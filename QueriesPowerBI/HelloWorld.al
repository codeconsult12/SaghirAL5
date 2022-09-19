// Welcome to your new AL extension.
// Remember that object names and IDs should be unique across all extensions.
// AL snippets start with t*, like tpageext - give them a try and happy coding!

query 50100 AncoraVendorExpenseByDim
{
    QueryType = Normal;
    //    APIPublisher = 'Ancora';
    //  APIGroup = 'VendorExpDim';
    //APIVersion = 'v1.0';
    //   EntityName = 'AncoraVendExpDim';
    // EntitySetName = 'AncoraVendorExprnsrByDimension';

    elements
    {
        dataitem("G_L_Entry"; "G/L Entry")
        {
            //            DataItemTableFilter = "G/L Account No." = filter(> 50000);
            filter(Document_Type; "Document Type")
            { ColumnFilter = Document_Type = filter(Invoice); }
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            //column(){}
            column(Amount; Amount) { }
            column(Posting_Date; "Posting Date") { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Description; Description) { }

            dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
            {
                DataItemLink = "Document No." = G_L_Entry."Document No.";

                dataitem(Vendor; Vendor)
                {
                    DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                    column(Name; Name)
                    { }
                }
            }
        }
    }
}

query 50101 AncoraExpenseByDim
{
    QueryType = Normal;

    elements
    {
        dataitem(G_L_Entry; "G/L Entry")
        {
            //            DataItemTableFilter = "G/L Account No." = filter(> 50000);
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            //column(){}
            column(Posting_Date; "Posting Date") { }
            column(Amount; Amount) { }
            column(Description; Description) { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Document_Type; "Document Type") { }
            dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
            {
                DataItemLink = "Document No." = G_L_Entry."Document No.";

                dataitem(Vendor; Vendor)
                {
                    DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                    column(Name; Name)
                    { }
                }
            }
        }
    }
}

query 50102 AncoraAllAccountByDim
{
    QueryType = Normal;

    elements
    {
        dataitem(G_L_Entry; "G/L Entry")
        {
            //DataItemTableFilter = "G/L Account No." = filter(> 50000);
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            //column(){}
            column(Posting_Date; "Posting Date") { }
            column(Amount; Amount) { }
            column(Description; Description) { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Document_Type; "Document Type") { }
            dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
            {
                DataItemLink = "Document No." = G_L_Entry."Document No.";

                dataitem(Vendor; Vendor)
                {
                    DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                    column(Name; Name)
                    { }
                }
            }
        }
    }
}

query 50104 TestDimension
{
    QueryType = Normal;
    elements
    {
        dataitem(G_L_Entry; "G/L Entry")
        {
            //            DataItemTableFilter = "G/L Account No." = filter(> 50000);
            filter(Document_Type; "Document Type")
            {
                // ColumnFilter = Document_Type = filter(Invoice); 
            }
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            //    column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            //    column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            column(Amount; Amount) { }
            column(Posting_Date; "Posting Date") { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Description; Description) { }

            dataitem(Project; "Dimension Set Entry")
            {
                DataItemLink = "Dimension Set ID" = G_L_Entry."Dimension Set ID";
                column(Dimension_Name; "Dimension Name")
                {

                }
                column(Dimension_Value_Code; "Dimension Value Code")
                {

                }
                //dataitem(Project_Name; "Dimension Value")
                //{
                //    DataItemLink = "Dimension Value ID" = Project."Dimension Value ID";
                //    column(DimName; Name) { }
                dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
                {
                    DataItemLink = "Document No." = G_L_Entry."Document No.";

                    dataitem(Vendor; Vendor)
                    {
                        DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                        column(Name; Name)
                        { }
                    }
                }
                //}
            }
        }
    }
}





query 50105 VendorExpenseByDimSet
{
    QueryType = Normal;
    //    APIPublisher = 'Ancora';
    //  APIGroup = 'VendorExpDim';
    //APIVersion = 'v1.0';
    //   EntityName = 'AncoraVendExpDim';
    // EntitySetName = 'AncoraVendorExprnsrByDimension';

    elements
    {
        dataitem("G_L_Entry"; "G/L Entry")
        {
            //            DataItemTableFilter = "G/L Account No." = filter(> 50000);
            filter(Document_Type; "Document Type")
            { ColumnFilter = Document_Type = filter(Invoice); }
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            //column(){}
            column(Amount; Amount) { }
            column(Posting_Date; "Posting Date") { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Description; Description) { }

            dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
            {
                DataItemLink = "Document No." = G_L_Entry."Document No.";

                dataitem(Vendor; Vendor)
                {
                    DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                    column(Name; Name)
                    { }
                }
            }
        }
    }
}

query 50107 ExpenseByDimSet
{
    QueryType = Normal;

    elements
    {
        dataitem(G_L_Entry; "G/L Entry")
        {
            //            DataItemTableFilter = "G/L Account No." = filter(> 50000);
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            //column(){}
            column(Posting_Date; "Posting Date") { }
            column(Amount; Amount) { }
            column(Description; Description) { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Document_Type; "Document Type") { }
            dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
            {
                DataItemLink = "Document No." = G_L_Entry."Document No.";

                dataitem(Vendor; Vendor)
                {
                    DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                    column(Name; Name)
                    { }
                }
            }
        }
    }
}

query 50108 AllAccountByDimSet
{
    QueryType = Normal;

    elements
    {
        dataitem(G_L_Entry; "G/L Entry")
        {
            //DataItemTableFilter = "G/L Account No." = filter(> 50000);
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            //column(){}
            column(Posting_Date; "Posting Date") { }
            column(Amount; Amount) { }
            column(Description; Description) { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Document_Type; "Document Type") { }
            dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
            {
                DataItemLink = "Document No." = G_L_Entry."Document No.";

                dataitem(Vendor; Vendor)
                {
                    DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                    column(Name; Name)
                    { }
                }
            }
        }
    }
}

/*query 50104 TestDimension
{
    QueryType = Normal;
    elements
    {
        dataitem(G_L_Entry; "G/L Entry")
        {
            //            DataItemTableFilter = "G/L Account No." = filter(> 50000);
            filter(Document_Type; "Document Type")
            {
                // ColumnFilter = Document_Type = filter(Invoice); 
            }
            column(G_L_Account_No_; "G/L Account No.") { }
            column(G_L_Account_Name; "G/L Account Name") { }
            //    column(Global_Dimension_1_Code; "Global Dimension 1 Code") { }
            //    column(Global_Dimension_2_Code; "Global Dimension 2 Code") { }
            //column(){}
            column(Amount; Amount) { }
            column(Posting_Date; "Posting Date") { }
            column(Document_No_; "Document No.") { }
            column(External_Document_No_; "External Document No.") { }
            column(Description; Description) { }

            dataitem(Project; "Dimension Set Entry")
            {
                DataItemLink = "Dimension Set ID" = G_L_Entry."Dimension Set ID";
                column(Dimension_Value_Code; "Dimension Value Code")
                {

                }
                dataitem(Project_Name; "Dimension Value")
                {
                    DataItemLink = "Dimension Value ID" = Project."Dimension Value ID";
                    column(DimName; Name) { }
                    dataitem("Vendor_Ledger_Entry"; "Vendor Ledger Entry")
                    {
                        DataItemLink = "Document No." = G_L_Entry."Document No.";

                        dataitem(Vendor; Vendor)
                        {
                            DataItemLink = "No." = Vendor_Ledger_Entry."Vendor No.";
                            column(Name; Name)
                            { }
                        }
                    }
                }
            }
        }
    }
}*/
