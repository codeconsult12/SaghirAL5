// Welcome to your new AL extension.
// Remember that object names and IDs should be unique across all extensions.
// AL snippets start with t*, like tpageext - give them a try and happy coding!

tableextension 50102 GJLineExt extends "Gen. Journal Line"
{
    fields
    {
        field(50101; "Comment Description"; Text[250])
        { }
        field(50100; "Vendor Name"; Text[250])
        {

        }
    }
}

pageextension 50100 GeneralJnlExt extends "General Journal"
{
    layout
    {
        addafter(Description)
        {
            field("Vendor Name"; "Vendor Name")
            {
                ApplicationArea = all;
                Visible = true;
                Editable = true;
            }
        }
    }
    actions
    {
        addafter(Post)
        {
            action(Post1)
            {
                ApplicationArea = Basic, Suite;
                Caption = 'P&ost';
                //Image = PostOrder;
                Promoted = true;
                PromotedCategory = Category9;
                PromotedIsBig = true;
                ShortCutKey = 'F9';
                ToolTip = 'Finalize the document or journal by posting the amounts and quantities to the related accounts in your company books.';

                trigger OnAction()
                begin
                    CODEUNIT.Run(CODEUNIT::"Gen. Jnl.-Post1", Rec);
                    CurrentJnlBatchName := GetRangeMax("Journal Batch Name");
                    if IsSimplePage then
                        if GeneralLedgerSetup."Post with Job Queue" then begin
                            NewDocumentNo()
                        end
                        else begin
                            SetDataForSimpleModeOnPost;
                        end;
                    SetJobQueueVisibility();
                    CurrPage.Update(false);
                end;
            }
        }
        modify(Post)
        {
            Visible = false;
        }
        /* addafter(Post1)
         {
                         action(PostAndPrint1)
                 {
                     ApplicationArea = Basic, Suite;
                     Caption = 'Post and &Print';
                     Image = PostPrint;
                     Promoted = true;
                     PromotedCategory = Category9;
                     PromotedIsBig = true;
                     ShortCutKey = 'Shift+F9';
                     ToolTip = 'Finalize and prepare to print the document or journal. The values and quantities are posted to the related accounts. A report request window where you can specify what to include on the print-out.';

                     trigger OnAction()
                     begin
                         CODEUNIT.Run(CODEUNIT::"Gen. Jnl.-Post+Print1", Rec);
                         CurrentJnlBatchName := GetRangeMax("Journal Batch Name");
                         if GeneralLedgerSetup."Post & Print with Job Queue" then
                             NewDocumentNo()
                         else
                             SetDataForSimpleModeOnPost;
                         SetJobQueueVisibility();
                         CurrPage.Update(false);
                     end;
                 }
         }
        modify(PostAndPrint)
        {
            Visible = false;
        }*/
    }
    var
        CurrentJnlBatchName: Code[10];
        IsSimplePage: Boolean;
        GeneralLedgerSetup: Record "General Ledger Setup";
        JobQueuesUsed: Boolean;
        JobQueueVisible: Boolean;
        PostedFromSimplePage: Boolean;
        CurrentDocNo: Code[20];
        CurrentPostingDate: Date;
        CurrentCurrencyCode: Code[10];

    local procedure SetDataForSimpleModeOnPost()
    begin
        PostedFromSimplePage := true;
        SetCurrentKey("Document No.", "Line No.");
        if FindFirst then
            SetDataForSimpleMode(Rec)
    end;

    local procedure SetJobQueueVisibility()
    begin
        JobQueueVisible := "Job Queue Status" = "Job Queue Status"::"Scheduled for Posting";
        JobQueuesUsed := GeneralLedgerSetup.JobQueueActive;
    end;

    local procedure SetDataForSimpleMode(GenJournalLine1: Record "Gen. Journal Line")
    begin
        CurrentDocNo := GenJournalLine1."Document No.";
        CurrentPostingDate := GenJournalLine1."Posting Date";
        CurrentCurrencyCode := GenJournalLine1."Currency Code";
        SetDocumentNumberFilter(CurrentDocNo);
    end;

    local procedure SetDocumentNumberFilter(DocNoToSet: Code[20])
    var
        OriginalFilterGroup: Integer;
    begin
        OriginalFilterGroup := FilterGroup;
        FilterGroup := 25;
        SetFilter("Document No.", DocNoToSet);
        FilterGroup := OriginalFilterGroup;
    end;
}

tableextension 50103 GLEntryExt extends "G/L Entry"
{
    fields
    {
        field(50101; "Comment Description"; Text[250])
        { }
        field(50100; "Vendor Name"; Text[250])
        {
            Caption = 'Vendor';
        }
    }
    procedure CopyFromGenJnlLine1(GenJnlLine: Record "Gen. Journal Line")
    begin
        "Posting Date" := GenJnlLine."Posting Date";
        "Document Date" := GenJnlLine."Document Date";
        "Document Type" := GenJnlLine."Document Type";
        "Document No." := GenJnlLine."Document No.";
        "Vendor Name" := GenJnlLine."Vendor Name";
        "External Document No." := GenJnlLine."External Document No.";
        Description := GenJnlLine.Description;
        "Business Unit Code" := GenJnlLine."Business Unit Code";
        "Global Dimension 1 Code" := GenJnlLine."Shortcut Dimension 1 Code";
        "Global Dimension 2 Code" := GenJnlLine."Shortcut Dimension 2 Code";
        "Dimension Set ID" := GenJnlLine."Dimension Set ID";
        "Source Code" := GenJnlLine."Source Code";
        if GenJnlLine."Account Type" = GenJnlLine."Account Type"::"G/L Account" then begin
            if GenJnlLine."Source Type" = GenJnlLine."Source Type"::Employee then
                "Source Type" := "Source Type"::Employee
            else
                "Source Type" := GenJnlLine."Source Type";
            "Source No." := GenJnlLine."Source No.";
        end else begin
            if GenJnlLine."Account Type" = GenJnlLine."Account Type"::Employee then
                "Source Type" := "Source Type"::Employee
            else
                "Source Type" := GenJnlLine."Account Type".AsInteger();
            "Source No." := GenJnlLine."Account No.";
        end;
        if (GenJnlLine."Account Type" = GenJnlLine."Account Type"::"IC Partner") or
           (GenJnlLine."Bal. Account Type" = GenJnlLine."Bal. Account Type"::"IC Partner")
        then
            "Source Type" := "Source Type"::" ";
        "Job No." := GenJnlLine."Job No.";
        Quantity := GenJnlLine.Quantity;
        "Journal Batch Name" := GenJnlLine."Journal Batch Name";
        "Reason Code" := GenJnlLine."Reason Code";
        "User ID" := UserId;
        "No. Series" := GenJnlLine."Posting No. Series";
        "IC Partner Code" := GenJnlLine."IC Partner Code";

        OnAfterCopyGLEntryFromGenJnlLine(Rec, GenJnlLine);
    end;

    [IntegrationEvent(false, false)]
    local procedure OnAfterCopyGLEntryFromGenJnlLine(var GLEntry: Record "G/L Entry"; var GenJournalLine: Record "Gen. Journal Line")
    begin
    end;
}

pageextension 50101 GeneralLedExt extends "General Ledger Entries"
{
    layout
    {
        addafter("Global Dimension 2 Code")
        {
            field("Vendor Name"; "Vendor Name")
            {

                ApplicationArea = basic, suite;
                Visible = true;
                Editable = true;
            }
        }

    }
    trigger OnModifyRecord(): Boolean
    begin

        Message('Vendor --> %1', rec."Vendor Name");
        Message('Descri --> %1', Rec.Description);
        CODEUNIT.Run(CODEUNIT::"G/L Entry-Edit1", Rec);
        // exit(false);
    end;
}