codeunit 50108 "G/L Entry-Edit1"
{
    EventSubscriberInstance = Manual;
    Permissions = TableData "G/L Entry" = m;
    TableNo = "G/L Entry";

    trigger OnRun()
    var
        GLEntryEdit: Codeunit "G/L Entry-Edit1";
    begin
        BindSubscription(GLEntryEdit);
        GLEntry := Rec;
        GLEntry.LockTable();
        GLEntry.Find;
        GLEntry.Description := Description;
        GLEntry."Vendor Name" := "Vendor Name";
        OnBeforeGLLedgEntryModify(GLEntry, Rec);
        GLEntry.TestField("Entry No.", "Entry No.");
        GLEntry.Modify(true);
        Rec := GLEntry;
    end;

    var
        GLEntry: Record "G/L Entry";

    [IntegrationEvent(false, false)]
    local procedure OnBeforeGLLedgEntryModify(var GLEntry: Record "G/L Entry"; FromGLEntry: Record "G/L Entry")
    begin
    end;

    [EventSubscriber(ObjectType::Codeunit, 423, 'OnAfterIsAlwaysLoggedTable', '', false, false)]
    local procedure OnAfterIsAlwaysLoggedTable(TableID: Integer; var AlwaysLogTable: Boolean)
    begin
        if TableID = DATABASE::"G/L Entry" then
            AlwaysLogTable := true;
    end;
}