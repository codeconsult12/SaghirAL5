// Welcome to your new AL extension.
// Remember that object names and IDs should be unique across all extensions.
// AL snippets start with t*, like tpageext - give them a try and happy coding!
controladdin MyControlAddIn
{
    RequestedHeight = 15000;
    MinimumHeight = 15000;
    MaximumHeight = 15000;
    RequestedWidth = 4000;
    MinimumWidth = 4000;
    MaximumWidth = 4000;
    VerticalStretch = true;
    VerticalShrink = true;
    HorizontalStretch = true;
    HorizontalShrink = true;
    Scripts =
        'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.js',
        //        'https://cdnjs.cloudflare.com/ajax/libs/pivottable/2.23.0/pivot.min.js',
        'js/pivot.min.js',
        'https://code.jquery.com/ui/1.12.1/jquery-ui.js',
        //      'js/jquery.treetable.js',
        'js/xlsx.full.min.js',
        'js/FileSaver.js',
        'js/jsPDF.min.js',
        'js/jspdf.plugin.autotable.js',
        //      'js/tableexport.js',
        'js/table2excel.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
        'js/bootstrap-multiselect.min.js',
        'js/all.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js',
        'https://cdn.rawgit.com/rainabba/jquery-table2excel/1.1.0/dist/jquery.table2excel.min.js',
        'https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js';
    StyleSheets =
        'style/pivot.min.css',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
        'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css',
        //      'style/jquery.treetable.css',
        'style/bootstrap-multiselect.min.css',
        'style/all.min.css',
        //      'style/tableexport.css';
        'https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css';
    StartupScript = 'js/startupScript.js';
    //   RecreateScript = 'recreateScript.js';
    //   RefreshScript = 'refreshScript.js';

    event MyEvent()

    procedure MyProcedure()
}


page 50112 ReportCardPart
{
    Caption = 'Report Center';
    PageType = CardPart;
    ApplicationArea = All;
    UsageCategory = ReportsAndAnalysis;

    layout
    {
        area(Content)
        {
            usercontrol(Reports; MyControlAddIn)
            {
                ApplicationArea = All;
            }
        }
    }

    var
        myInt: Integer;
}

/*pageextension 50144 GLEExt extends "General Ledger Entries"
{
    layout
    {
        addbefore(IncomingDocAttachFactBox)
        {
            part(Dimensions; "Dimension Set Entries FactBox")
            {
                ApplicationArea = All;
                SubPageLink = "Dimension Set ID" = FIELD("Dimension Set ID");
            }
        }
    }
}*/
