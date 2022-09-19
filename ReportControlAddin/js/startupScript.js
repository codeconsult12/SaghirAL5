var controlAddIn = document.getElementById('controlAddIn');
var divmodal = document.createElement('div');
divmodal.setAttribute('id', 'divWait');
//divmodal.style.display = 'none';
divmodal.style.position = 'fixed';
divmodal.style.zIndex = '1000';
divmodal.style.top = '0';
divmodal.style.left = '0';
divmodal.style.height = '4%';
divmodal.style.width = '35%';
divmodal.style.background = 'rgba(255,255,255,.8) url("http://i.stack.imgur.com/FhHRx.gif") 50% 50% no-repeat';
controlAddIn.appendChild(divmodal);


var tbl = document.createElement('table');
tbl.id = 'tblControls';
//tbl.style = 'width:15%';
tbl.innerHTML = '<tr>' +
    '<td style="text-align:right">' +
    '  <p style="display:inline;">Report:&nbsp;&nbsp;</p>' +
    '</td>' +
    '<td id="tdRprtSlct">' +
    '  <select class="multiselect dropdown-toggle custom-select" style="width:250px" id="ddlReport">' +
    '    <option value="PL">Profit and loss</option>' +
    '    <option value="ASV">Account summary by vendor</option>' +
    '    <option value="BS">Balance sheet</option>' +
    '    <option value="VES">Vendor Expense Summary</option>' +
    '  </select>' +
    '</td>' +
    '<td></td>' +
    '<td></td>' +
    '<td></td>' +
    '</tr>';

controlAddIn.appendChild(tbl);
$(document).on("click", 'input[type="radio"]', function () {
    var inputValue = $(this).attr("value");
    if (inputValue === "Project") {
        ///        $('#trCompany').hide();
        $('#trProject').show();
        var newOptions = { "Period to date": "Period", "YTD": "YTD", "ITD": "ITD" };
        var ddlOutput = $('#ddlOutput');
        ddlOutput.empty();
        $.each(newOptions, function (key, value) {
            ddlOutput.append($("<option></option>").attr("value", value).text(key));
        });
    }
    else if (inputValue === "Company") {
        ///        $('#trCompany').show();
        $('#trProject').hide();
        var newOptions = { "Period to date": "Period", "By month": "Month", "YTD": "YTD", "ITD": "ITD" };
        var ddlOutput = $('#ddlOutput');
        ddlOutput.empty();
        $.each(newOptions, function (key, value) {
            ddlOutput.append($("<option></option>").attr("value", value).text(key));
        });
    }
});

//$(window).load(function () {
var reportType = $('#ddlReport').val();
$('#divWait').show();
if (reportType === 'PL') {
    $('#ddlCompany').multiselect('destroy');
    $('#ddlProj').multiselect('destroy');
    $('#ddlVendor').multiselect('destroy');

    $("#tblControls").find("tbody tr:gt(0)").remove();
    var strControls = '<tr>' +
        '  <td></td>' +
        '  <td style="text-align:left">' +
        '    <label><input type="radio" name="colorRadio" checked value="Company"> Company</label>' +
        '    &nbsp;&nbsp;' +
        '    <label><input type="radio" name="colorRadio" value="Project"> Project</label>' +
        '  </td>' +
        '</tr>' +
        '<tr id="trCompany">' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">Company:&nbsp;&nbsp;</p>' +
        '  </td>' +
        '  <td >' +
        '    <select class="multiselect dropdown-toggle custom-select" id="ddlCompany" multiple="multiple"></select>' +
        '  </td>' +
        '</tr>' +
        '<tr  id="trProject">' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">Project:&nbsp;&nbsp;</p>' +
        '  </td>' +
        '  <td>' +
        '    <select class="multiselect dropdown-toggle custom-select" id="ddlProj" multiple="multiple"></select>' +
        '  </td>' +
        '</tr>' +
        '<tr>' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">Vendor:&nbsp;&nbsp;</p>' +
        '  </td>' +
        '  <td id="tdVendSlct">' +
        '    <select class="multiselect dropdown-toggle custom-select" id="ddlVendor" multiple="multiple"></select>' +
        '  </td>' +
        '  <td></td>' +
        '</tr>' +
        '<tr>' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">Show as:&nbsp;&nbsp;</p>' +
        '  </td> ' +
        '  <td id="tdVendSlct">' +
        '    <select class="multiselect dropdown-toggle custom-select" style="width:180px" id="ddlOutput">' +
        '      <option value="Period">Period to date</option>' +
        '     <option value="Month">By month</option>' +
        '      <option value="YTD">YTD</option>' +
        '      <option value="ITD">ITD</option>' +
        '    </select>' +
        '  </td>' +
        '  <td></td>' +
        '</tr>' +
        '<tr>' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">From:&nbsp;&nbsp;</p>' +
        '  </td> ' +
        '  <td >' +
        '    <input type="text" style="width:130px;height:38px;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
        'font-size: 1rem;' +
        'font-weight: 400;' +
        'line-height: 1.5;' +
        'color: #495057;' +
        'vertical-align: middle;' +
        'border: 1px solid #ced4da;' +
        'border-radius: .25rem;' +
        '-webkit-appearance: none;' +
        '-moz-appearance: none;' +
        'appearance: none;" id="datepickerFrom">' +
        '  </td>' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">To:&nbsp;&nbsp;</p>' +
        '  </td> ' +
        '  <td > ' +
        '    <input type="text"  style="width:130px;height:38px;;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
        'font-size: 1rem;' +
        'font-weight: 400;' +
        'line-height: 1.5;' +
        'color: #495057;' +
        'vertical-align: middle;' +
        'border: 1px solid #ced4da;' +
        'border-radius: .25rem;' +
        '-webkit-appearance: none;' +
        '-moz-appearance: none;' +
        'appearance: none;" id="datepickerTo">' +
        '  </td>' +
        '  <td>' +
        '  &nbsp;&nbsp;&nbsp;' +
        '  <button id = "btnReport" style="border-radius: 20px; width: 100px;height: 35px" >Run Report</button>' +
        '  </td>' +
        '</tr>';
    $('#tblControls').append(strControls);
    $('#ddlCompany').multiselect('rebuild', { maxHeight: 250 });
    $('#trProject').hide();
    $('#ddlProj').multiselect('rebuild', { maxHeight: 250 });
    $('#ddlVendor').multiselect('rebuild', { maxHeight: 250 });

    loadDDLs();
}
else if (reportType === 'ASV') {
    $('#ddlCompany').multiselect('destroy');
    $('#ddlAccount').multiselect('destroy');
    $('#ddlVendor').multiselect('destroy');
    $('#ddlProj').multiselect('destroy');
    $("#tblControls").find("tbody tr:gt(0)").remove();
    var strControls = '<tr>' +
        '<td style="text-align:right"><p style="display:inline;">Company:&nbsp;&nbsp;</p></td> <td><select class="multiselect dropdown-toggle custom-select" id="ddlCompany" multiple="multiple"></select>' +
        '</tr>' +
        '<tr  id="trProject">' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">Project:&nbsp;&nbsp;</p>' +
        '  </td>' +
        '  <td>' +
        '    <select class="multiselect dropdown-toggle custom-select" id="ddlProj" multiple="multiple"></select>' +
        '  </td>' +
        '</tr>' +
        '<tr>' +
        '<td style="text-align:right"><p style="display:inline;">Vendor:&nbsp;&nbsp;</p></td> <td><select class="multiselect dropdown-toggle custom-select" style="width:180px"  id="ddlVendor" multiple="multiple"></select></td><td></td>' +
        '</tr>' +
        '<tr>' +
        '<td style="text-align:right"><p style="display:inline;">Account:&nbsp;&nbsp;</p></td> <td><select class="multiselect dropdown-toggle custom-select"style="width:180px" id="ddlAccount"  multiple="multiple"></select></td><td></td>' +
        '</tr>' +
        '<tr>' +
        '<td style="text-align:right"><p style="display:inline;">From:&nbsp;&nbsp;</p></td> <td ><input type="text" style="width:130px;height:38px;;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
        'font-size: 1rem;' +
        'font-weight: 400;' +
        'line-height: 1.5;' +
        'color: #495057;' +
        'vertical-align: middle;' +
        'border: 1px solid #ced4da;' +
        'border-radius: .25rem;' +
        '-webkit-appearance: none;' +
        '-moz-appearance: none;' +
        'appearance: none;" id="datepickerFrom"></td>' +
        '<td style="text-align:right"><p style="display:inline;">To:&nbsp;&nbsp;</p></td> <td > <input type="text"  style="width:130px;height:38px;;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
        'font-size: 1rem;' +
        'font-weight: 400;' +
        'line-height: 1.5;' +
        'color: #495057;' +
        'vertical-align: middle;' +
        'border: 1px solid #ced4da;' +
        'border-radius: .25rem;' +
        '-webkit-appearance: none;' +
        '-moz-appearance: none;' +
        'appearance: none;" id="datepickerTo"></td>' +
        '</tr><tr>' +
        '<td style="text-align:right"><p style="display:inline;">Show as:&nbsp;&nbsp;</p></td> <td id="tdVendSlct"><select class="multiselect dropdown-toggle custom-select"style="width:180px" id="ddlOutput">' +
        '<option value="Period">Period to date</option>' +
        '<option value="Month">By month</option>' +
        '<option value="YTD">YTD</option>' +
        '<option value="ITD">ITD</option>' +
        '</select></td><td></td>' +
        '<td>&nbsp;&nbsp;&nbsp;<button id = "btnReport" style="border-radius: 20px; width: 100px;height: 35px" >Run Report</button>';
    $('#tblControls').append(strControls);
    $('#ddlCompany').multiselect('rebuild', { maxHeight: 250 });
    $('#ddlAccount').multiselect('rebuild', { maxHeight: 250 });
    $('#ddlVendor').multiselect('rebuild', { maxHeight: 250 });
    $('#ddlProj').multiselect('rebuild', { maxHeight: 250 });
    $("#datepickerFrom").datepicker();
    $("#datepickerTo").datepicker();
    loadDDLs();
}
else if (reportType === 'BS') {
    $('#ddlCompany').multiselect('destroy');
    $("#tblControls").find("tbody tr:gt(0)").remove();
    var strControls = '<tr id="trCompany">' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">Company:&nbsp;&nbsp;</p>' +
        '  </td>' +
        '  <td >' +
        '    <select class="multiselect dropdown-toggle custom-select" id="ddlCompany" multiple="multiple"></select>' +
        '  </td>' +
        '</tr>' +
        '<tr>' +
        '  <td style="text-align:right">' +
        '    <p style="display:inline;">From:&nbsp;&nbsp;</p>' +
        '  </td> ' +
        '  <td >' +
        '    <input type="text" style="width:130px;height:38px;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
        'font-size: 1rem;' +
        'font-weight: 400;' +
        'line-height: 1.5;' +
        'color: #495057;' +
        'vertical-align: middle;' +
        'border: 1px solid #ced4da;' +
        'border-radius: .25rem;' +
        '-webkit-appearance: none;' +
        '-moz-appearance: none;' +
        'appearance: none;" id="datepicker">' +
        '  </td>' +
        '  <td>' +
        '  &nbsp;&nbsp;&nbsp;' +
        '  <button id = "btnReport" style="border-radius: 20px; width: 100px;height: 35px" >Run Report</button>' +
        '  </td>' +
        '</tr>';
    $('#tblControls').append(strControls);
    $('#ddlCompany').multiselect('rebuild', { maxHeight: 250 });
    loadCompanies();
    $("#datepicker").datepicker();
}
//});

$('#ddlReport').on('change', function () {
    var reportType = $('#ddlReport').val();
    if (reportType === 'PL') {
        $('#ddlCompany').multiselect('destroy');
        $('#ddlProj').multiselect('destroy');
        $('#ddlVendor').multiselect('destroy');

        $("#tblControls").find("tbody tr:gt(0)").remove();
        var strControls = '<tr>' +
            '  <td></td>' +
            '  <td style="text-align:left">' +
            '    <label><input type="radio" name="colorRadio" checked value="Company"> Company</label>' +
            '    &nbsp;&nbsp;' +
            '    <label><input type="radio" name="colorRadio" value="Project"> Project</label>' +
            '  </td>' +
            '</tr>' +
            '<tr id="trCompany">' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Company:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td >' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlCompany" multiple="multiple"></select>' +
            '  </td>' +
            '</tr>' +
            '<tr  id="trProject">' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Project:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td>' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlProj" multiple="multiple"></select>' +
            '  </td>' +
            '</tr>' +
            '<tr>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Vendor:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td id="tdVendSlct">' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlVendor" multiple="multiple"></select>' +
            '  </td>' +
            '  <td></td>' +
            '</tr>' +
            '<tr>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Show as:&nbsp;&nbsp;</p>' +
            '  </td> ' +
            '  <td id="tdVendSlct">' +
            '    <select class="multiselect dropdown-toggle custom-select" style="width:180px" id="ddlOutput">' +
            '      <option value="Period">Period to date</option>' +
            '     <option value="Month">By month</option>' +
            '      <option value="YTD">YTD</option>' +
            '      <option value="ITD">ITD</option>' +
            '    </select>' +
            '  </td>' +
            '  <td></td>' +
            '</tr>' +
            '<tr>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">From:&nbsp;&nbsp;</p>' +
            '  </td> ' +
            '  <td >' +
            '    <input type="text" style="width:130px;height:38px;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
            'font-size: 1rem;' +
            'font-weight: 400;' +
            'line-height: 1.5;' +
            'color: #495057;' +
            'vertical-align: middle;' +
            'border: 1px solid #ced4da;' +
            'border-radius: .25rem;' +
            '-webkit-appearance: none;' +
            '-moz-appearance: none;' +
            'appearance: none;" id="datepickerFrom">' +
            '  </td>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">To:&nbsp;&nbsp;</p>' +
            '  </td> ' +
            '  <td > ' +
            '    <input type="text"  style="width:130px;height:38px;;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
            'font-size: 1rem;' +
            'font-weight: 400;' +
            'line-height: 1.5;' +
            'color: #495057;' +
            'vertical-align: middle;' +
            'border: 1px solid #ced4da;' +
            'border-radius: .25rem;' +
            '-webkit-appearance: none;' +
            '-moz-appearance: none;' +
            'appearance: none;" id="datepickerTo">' +
            '  </td>' +
            '  <td>' +
            '  &nbsp;&nbsp;&nbsp;' +
            '  <button id = "btnReport" style="border-radius: 20px; width: 100px;height: 35px" >Run Report</button>' +
            '  </td>' +
            '</tr>';
        $('#tblControls').append(strControls);
        $('#ddlCompany').multiselect('rebuild', { maxHeight: 250 });
        $('#trProject').hide();
        $('#ddlProj').multiselect('rebuild', { maxHeight: 250 });
        $('#ddlVendor').multiselect('rebuild', { maxHeight: 250 });
        $("#datepickerFrom").datepicker();
        $("#datepickerTo").datepicker();
        loadDDLs();
    }
    else if (reportType === 'ASV') {
        $('#ddlCompany').multiselect('destroy');
        $('#ddlAccount').multiselect('destroy');
        $('#ddlVendor').multiselect('destroy');
        $('#ddlProj').multiselect('destroy');
        $("#tblControls").find("tbody tr:gt(0)").remove();
        var strControls = '<tr>' +
            '<td style="text-align:right"><p style="display:inline;">Company:&nbsp;&nbsp;</p></td> <td>' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlCompany" multiple="multiple"></select>' +
            '  </td>' +
            '</tr>' +
            '<tr  id="trProject">' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Project:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td>' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlProj" multiple="multiple"></select>' +
            '  </td>' +
            '</tr>' +
            '<tr>' +
            '<td style="text-align:right"><p style="display:inline;">Vendor:&nbsp;&nbsp;</p></td> <td><select class="multiselect dropdown-toggle custom-select"select style="width:180px" id="ddlVendor" multiple="multiple"></select></td><td></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="text-align:right"><p style="display:inline;">Account:&nbsp;&nbsp;</p></td> <td><select class="multiselect dropdown-toggle custom-select" style="width:180px" id="ddlAccount"  multiple="multiple"></select></td><td></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="text-align:right"><p style="display:inline;">Show as:&nbsp;&nbsp;</p></td> <td><select class="multiselect dropdown-toggle custom-select" style="width:180px" id="ddlOutput">' +
            '<option value="Period">Period to date</option>' +
            '<option value="Month">By month</option>' +
            '<option value="YTD">YTD</option>' +
            '<option value="ITD">ITD</option>' +
            '</select></td><td></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="text-align:right"><p style="display:inline;">From:&nbsp;&nbsp;</p></td> <td ><input type="text" style="width:130px;height:38px;;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
            'font-size: 1rem;' +
            'font-weight: 400;' +
            'line-height: 1.5;' +
            'color: #495057;' +
            'vertical-align: middle;' +
            'border: 1px solid #ced4da;' +
            'border-radius: .25rem;' +
            '-webkit-appearance: none;' +
            '-moz-appearance: none;' +
            'appearance: none;" id="datepickerFrom"></td>' +
            '<td style="text-align:right"><p style="display:inline;">To:&nbsp;&nbsp;</p></td> <td > <input type="text"  style="width:130px;height:38px;;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
            'font-size: 1rem;' +
            'font-weight: 400;' +
            'line-height: 1.5;' +
            'color: #495057;' +
            'vertical-align: middle;' +
            'border: 1px solid #ced4da;' +
            'border-radius: .25rem;' +
            '-webkit-appearance: none;' +
            '-moz-appearance: none;' +
            'appearance: none;" id="datepickerTo"></td>' +
            '<td>&nbsp;&nbsp;&nbsp;<button id = "btnReport" style="border-radius: 20px; width: 100px;height: 35px" >Run Report</button></td></tr>';
        $('#tblControls').append(strControls);
        $('#ddlCompany').multiselect('rebuild', { maxHeight: 250 });
        $('#ddlAccount').multiselect('rebuild', { maxHeight: 250 });
        $('#ddlVendor').multiselect('rebuild', { maxHeight: 250 });
        $('#ddlProj').multiselect('rebuild', { maxHeight: 250 });
        $("#datepickerFrom").datepicker();
        $("#datepickerTo").datepicker();
        loadDDLs();
    }
    else if (reportType === 'BS') {
        $('#ddlCompany').multiselect('destroy');
        $("#tblControls").find("tbody tr:gt(0)").remove();
        var strControls = '<tr id="trCompany">' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Company:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td >' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlCompany" multiple="multiple"></select>' +
            '  </td>' +
            '</tr>' +
            '<tr>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">As of date:&nbsp;&nbsp;</p>' +
            '  </td> ' +
            '  <td >' +
            '    <input type="text" style="width:130px;height:38px;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
            'font-size: 1rem;' +
            'font-weight: 400;' +
            'line-height: 1.5;' +
            'color: #495057;' +
            'vertical-align: middle;' +
            'border: 1px solid #ced4da;' +
            'border-radius: .25rem;' +
            '-webkit-appearance: none;' +
            '-moz-appearance: none;' +
            'appearance: none;" id="datepicker">' +
            '  </td>' +
            '  <td>' +
            '  &nbsp;&nbsp;&nbsp;' +
            '  <button id = "btnReport" style="border-radius: 20px; width: 100px;height: 35px" >Run Report</button>' +
            '  </td>' +
            '</tr>';
        $('#tblControls').append(strControls);
        $('#ddlCompany').multiselect('rebuild', { maxHeight: 250 });
        loadCompanies();
        $("#datepicker").datepicker();
    }
    else if (reportType === 'VES') {
        $('#ddlCompany').multiselect('destroy');
        $('#ddlVendor').multiselect('destroy');
        $('#ddlProj').multiselect('destroy');
        $("#tblControls").find("tbody tr:gt(0)").remove();
        var strControls = '<tr id="trCompany">' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Company:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td >' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlCompany" multiple="multiple"></select>' +
            '  </td>' +
            '</tr>' +
            '<tr  id="trProject">' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Project:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td>' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlProj" multiple="multiple"></select>' +
            '  </td>' +
            '</tr>' +
            '<tr>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Vendor:&nbsp;&nbsp;</p>' +
            '  </td>' +
            '  <td id="tdVendSlct">' +
            '    <select class="multiselect dropdown-toggle custom-select" id="ddlVendor" multiple="multiple"></select>' +
            '  </td>' +
            '  <td></td>' +
            '</tr>' +
            '<tr>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">Show as:&nbsp;&nbsp;</p>' +
            '  </td> ' +
            '  <td id="tdVendSlct">' +
            '    <select class="multiselect dropdown-toggle custom-select" style="width:180px" id="ddlOutput">' +
            '      <option value="Period">Period to date</option>' +
            '     <option value="Month">By month</option>' +
            '      <option value="YTD">YTD</option>' +
            '      <option value="ITD">ITD</option>' +
            '    </select>' +
            '  </td>' +
            '  <td></td>' +
            '</tr>' +
            '<tr>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">From:&nbsp;&nbsp;</p>' +
            '  </td> ' +
            '  <td >' +
            '    <input type="text" style="width:130px;height:38px;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
            'font-size: 1rem;' +
            'font-weight: 400;' +
            'line-height: 1.5;' +
            'color: #495057;' +
            'vertical-align: middle;' +
            'border: 1px solid #ced4da;' +
            'border-radius: .25rem;' +
            '-webkit-appearance: none;' +
            '-moz-appearance: none;' +
            'appearance: none;" id="datepickerFrom">' +
            '  </td>' +
            '  <td style="text-align:right">' +
            '    <p style="display:inline;">To:&nbsp;&nbsp;</p>' +
            '  </td> ' +
            '  <td > ' +
            '    <input type="text"  style="width:130px;height:38px;;display: inline-block; height: calc(1.5em + .75rem + 2px); padding: .375rem 1.75rem .375rem .75rem;' +
            'font-size: 1rem;' +
            'font-weight: 400;' +
            'line-height: 1.5;' +
            'color: #495057;' +
            'vertical-align: middle;' +
            'border: 1px solid #ced4da;' +
            'border-radius: .25rem;' +
            '-webkit-appearance: none;' +
            '-moz-appearance: none;' +
            'appearance: none;" id="datepickerTo">' +
            '  </td>' +
            '  <td>' +
            '  &nbsp;&nbsp;&nbsp;' +
            '  <button id = "btnReport" style="border-radius: 20px; width: 100px;height: 35px" >Run Report</button>' +
            '  </td>' +
            '</tr>';
        $('#tblControls').append(strControls);
        $('#ddlCompany').multiselect('rebuild', { maxHeight: 250 });
        $('#ddlProj').multiselect('rebuild', { maxHeight: 250 });
        $('#ddlVendor').multiselect('rebuild', { maxHeight: 250 });
        $("#datepickerFrom").datepicker();
        $("#datepickerTo").datepicker();
        loadDDLs();
    }
});

var ddlOut = $('#ddlOutput').val();
if (ddlOut === "Period") {
    $('#datepickerFrom').prop('disabled', false);
    $('#datepickerFrom').val(((new Date).getMonth() + 1) + '/01/' + (new Date).getFullYear());
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
    $('#datepickerTo').val(today);
}

$(document).on('change', '#ddlOutput', function () {
    var ddlOut = $('#ddlOutput').val();
    if (ddlOut === "Period" || ddlOut === "Month") {
        $('#datepickerFrom').prop('disabled', false);
        $('#datepickerFrom').val(((new Date).getMonth() + 1) + '/01/' + (new Date).getFullYear());
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        $('#datepickerTo').val(today);
    }
    if (ddlOut === "YTD") {
        $('#datepickerFrom').prop('disabled', false);
        $('#datepickerFrom').val('01/01/' + (new Date).getFullYear());
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        $('#datepickerTo').val(today);
    }
    if (ddlOut === "ITD") {
        $('#datepickerFrom').val('Inception');
        $('#datepickerFrom').prop('disabled', true);
        // $('#datepickerFrom').val(((new Date).getMonth() +1)+'/01/' + (new Date).getFullYear());
        var today = new Date();
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = mm + '/' + dd + '/' + yyyy;
        $('#datepickerTo').val(today);
    }
});

var brk = document.createElement('br');
controlAddIn.appendChild(brk);
var hr = document.createElement('hr');
hr.style.backgroundColor = 'black';
controlAddIn.appendChild(hr);
controlAddIn.appendChild(brk);

var tag = document.createElement("div");
tag.setAttribute("id", "pivot");
tag.style.marginLeft = '2%';
controlAddIn.appendChild(tag);

var backi = document.createElement('i');
backi.setAttribute('id', 'back');
backi.setAttribute("class", "fas fa-arrow-circle-left");
backi.style.fontSize = '50px';
backi.style.display = 'none';
controlAddIn.appendChild(backi);

var divDetail = document.createElement('div');
divDetail.setAttribute('id', 'divDetail');
divDetail.style.display = 'none';
controlAddIn.appendChild(divDetail);

$(function () {
    $("#datepickerFrom").datepicker();
    $("#datepickerTo").datepicker();
});

function loadDDLs() {
    $.ajax({
        url: "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company",
        type: "GET", //or POST?
        dataType: "json",
        beforeSend: function (request) {
            AddToHeader(request);
        },
        success: function (data) {
            $('#ddlCompany').multiselect('destroy');

            var sel = $("#ddlCompany");
            sel.empty();

            // sel.append('<option value="All" selected>All</option>');
            for (var i = 0; i < data.value.length; i++) {
                //if(data.value[i].Display_Name !== "" ||)
                if (data.value[i].Display_Name === "Ancora Innovation, LLC" || data.value[i].Display_Name === "Blackfan Circle Inn, LLC" ||
                    data.value[i].Display_Name === "Blue One Biosciences, LLC" || data.value[i].Display_Name === "Blue Q Biosciences LLC" ||
                    data.value[i].Display_Name === "Bluefield Innovations, LLC" || data.value[i].Display_Name === "Deerfield BI, LLC" ||
                    data.value[i].Display_Name === "Deerfield D&D, LLC" || data.value[i].Display_Name === "Exohalt Therapeutics, LLC" ||
                    data.value[i].Display_Name === "Four Points Innovation LLC" || data.value[i].Display_Name === "Galium Biosciences LLC" ||
                    data.value[i].Display_Name === "Hudson Heights Innovations LLC" || data.value[i].Display_Name === "Lab1636, LLC" ||
                    data.value[i].Display_Name === "Lakeside Discovery, LLC" || data.value[i].Display_Name === "Orchard Innovations, LLC" ||
                    data.value[i].Display_Name === "Pinnacle Hill, LLC" || data.value[i].Display_Name === "Poseidon Innovation, LLC" ||
                    data.value[i].Display_Name === "West Loop Innovations, LLC" || data.value[i].Display_Name === "Riverway Discoveries, LLC" ||
                    data.value[i].Display_Name === "Great Lakes Discovery, LLC" || data.value[i].Display_Name === "Blue Square Discoveries, LLC" ||
                    data.value[i].Display_Name === "Empire Deerfield D&D, LLC" || data.value[i].Display_Name === "DFBI 4, Inc." ||
                    data.value[i].Display_Name === "Poseidon Innovation 1, Inc.") {

                    sel.append('<option value="' + data.value[i].Display_Name + '" >' + data.value[i].Display_Name + '</option>');
                }
            }
            //            sel.multiselect('rebuild');
            sortSelect(document.getElementById('ddlCompany'));
            sel.multiselect({
                includeSelectAllOption: true,
                numberDisplayed: 1,
                maxHeight: 250,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true,
                onDropdownHide: function (event) {
                    if ($('#ddlReport').val() === 'PL' || $('#ddlReport').val() === 'VES') {
                        GetProjectVendors();
                    }
                    if ($('#ddlReport').val() === 'ASV') {
                        GetGLAccounts();
                        GetProjectVendors();
                    }
                }
            });
            $("#ddlCompany").multiselect('clearSelection');
            GetProjectVendors();
            GetGLAccounts();
            $('div.input-group-prepend').css({ 'display': 'none' });
            //            $("#ddlCompany option:selected").removeAttr("selected");
            //            $("#ddlProj option:selected").removeAttr("selected");
            //            $("#ddlVendor option:selected").removeAttr("selected");
            //            $("#ddlAccount option:selected").removeAttr("selected");
        },
        complete: function () {
            $('#divWait').hide();

        }
    });
}
function loadCompanies() {
    $.ajax({
        url: "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company",
        type: "GET", //or POST?
        dataType: "json",
        beforeSend: function (request) {
            AddToHeader(request);
        },
        success: function (data) {
            $('#ddlCompany').multiselect('destroy');

            var sel = $("#ddlCompany");
            sel.empty();

            // sel.append('<option value="All" selected>All</option>');

            for (var i = 0; i < data.value.length; i++) {
                if (data.value[i].Display_Name === "Ancora Innovation, LLC" || data.value[i].Display_Name === "Blackfan Circle Inn, LLC" ||
                    data.value[i].Display_Name === "Blue One Biosciences, LLC" || data.value[i].Display_Name === "Blue Q Biosciences LLC" ||
                    data.value[i].Display_Name === "Bluefield Innovations, LLC" || data.value[i].Display_Name === "Deerfield BI, LLC" ||
                    data.value[i].Display_Name === "Deerfield D&D, LLC" || data.value[i].Display_Name === "Exohalt Therapeutics, LLC" ||
                    data.value[i].Display_Name === "Four Points Innovation LLC" || data.value[i].Display_Name === "Galium Biosciences LLC" ||
                    data.value[i].Display_Name === "Hudson Heights Innovations LLC" || data.value[i].Display_Name === "Lab1636, LLC" ||
                    data.value[i].Display_Name === "Lakeside Discovery, LLC" || data.value[i].Display_Name === "Orchard Innovations, LLC" ||
                    data.value[i].Display_Name === "Pinnacle Hill, LLC" || data.value[i].Display_Name === "Poseidon Innovation, LLC" ||
                    data.value[i].Display_Name === "West Loop Innovations, LLC" || data.value[i].Display_Name === "Riverway Discoveries, LLC" ||
                    data.value[i].Display_Name === "Great Lakes Discovery, LLC" || data.value[i].Display_Name === "Blue Square Discoveries, LLC" ||
                    data.value[i].Display_Name === "Empire Deerfield D&D, LLC" || data.value[i].Display_Name === "DFBI 4, Inc." ||
                    data.value[i].Display_Name === "Poseidon Innovation 1, Inc.") {

                    sel.append('<option value="' + data.value[i].Display_Name + '" >' + data.value[i].Display_Name + '</option>');
                }
            }
            //            sel.multiselect('rebuild');
            sortSelect(document.getElementById('ddlCompany'));
            sel.multiselect({
                includeSelectAllOption: true,
                numberDisplayed: 1,
                maxHeight: 250,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true
            });
            $('div.input-group-prepend').css({ 'display': 'none' });
            $("#ddlCompany").multiselect('clearSelection');
        },
        complete: function () {
            $('#divWait').hide();

        }
    });
}
function sortSelect(selElem) {
    var tmpAry = new Array();
    if (selElem != null) {
        for (var i = 0; i < selElem.options.length; i++) {
            tmpAry[i] = new Array();
            tmpAry[i][0] = selElem.options[i].text;
            tmpAry[i][1] = selElem.options[i].value;
        }
        tmpAry.sort();
        while (selElem.options.length > 0) {
            selElem.options[0] = null;
        }
        for (var i = 0; i < tmpAry.length; i++) {
            var op = new Option(tmpAry[i][0], tmpAry[i][1], false, true);
            selElem.options[i] = op;
        }
        return;
    }
}

function GetGLAccounts() {
    $('#divWait').hide();
    var companies = $('#ddlCompany').val();
    $('#ddlAccount').children().remove();
    $('#ddlAccount').multiselect('destroy');
    if (companies.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server

        for (i = 0; i < companies.length; ++i) {
            var glURI = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + companies[i] + "')/GLE?$filter=G_L_Account_No ge '50000' & $select=G_L_Account_Name";
            deferred = $.ajax({
                url: glURI,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            var final = results.flat();

            var selAccount = $("#ddlAccount");
            //selAccount.append('<option value="All">All</option>');
            for (var i = 0; i < final.length; i++) {
                if ($("#ddlAccount option[value='" + final[i].G_L_Account_Name + "']").length == 0) {
                    selAccount.append('<option value="' + final[i].G_L_Account_Name + '">' + final[i].G_L_Account_Name + '</option>');
                }
            }
            sortSelect(document.getElementById('ddlAccount'));
            $("#ddlAccount").multiselect({
                includeSelectAllOption: true,
                numberDisplayed: 1,
                maxHeight: 250,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true
            });
            $('div.input-group-prepend').css({ 'display': 'none' });
            // $("#ddlAccount").multiselect('clearSelection');
        });
    }
    else {
        var glURI = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + companies[0] + "')/GLE?$filter=G_L_Account_No ge '50000' & $select=G_L_Account_Name";
        $.ajax({
            url: glURI,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (dataDim) {
                var selAccount = $("#ddlAccount");
                //selAccount.append('<option value="All">All</option>');
                for (var i = 0; i < dataDim.value.length; i++) {
                    if ($("#ddlAccount option[value='" + dataDim.value[i].G_L_Account_Name + "']").length == 0) {
                        selAccount.append('<option value="' + dataDim.value[i].G_L_Account_Name + '">' + dataDim.value[i].G_L_Account_Name + '</option>');
                    }
                }
                sortSelect(document.getElementById('ddlAccount'));
                $("#ddlAccount").multiselect({
                    includeSelectAllOption: true,
                    numberDisplayed: 1,
                    maxHeight: 250,
                    enableFiltering: true,
                    enableCaseInsensitiveFiltering: true
                });
                $('div.input-group-prepend').css({ 'display': 'none' });
                // $("#ddlAccount").multiselect('clearSelection');
            },
            complete: function () {
                $('#divWait').hide();
                $('div.input-group-prepend').css({ 'display': 'none' });
            }
        });
    }
}

function GetProjectVendors() {
    $('#divWait').hide();
    var companies = $('#ddlCompany').val();
    //$('#ddlReport').children().remove();
    $('#ddlProj').children().remove();
    $('#ddlVendor').children().remove();
    $('#ddlProj').multiselect('destroy');
    $('#ddlVendor').multiselect('destroy');
    if (companies.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < companies.length; ++i) {
            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + companies[i] + "')/GLE?$filter=G_L_Account_No ge '50000' & $select=Global_Dimension_1_Code,Vendor_Name";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            var selProj = $("#ddlProj");
            var selVendor = $("#ddlVendor");

            //            selProj.append('<option value="All" selected>All</option>');
            //            selVendor.append('<option value="All" selected>All</option>');


            var final = results.flat();

            for (var i = 0; i < final.length; i++) {

                if (final[i].Global_Dimension_1_Code.trim() != '') {// || final[i].Global_Dimension_1_Code != 'NOT SPECIFIED') {
                    if ($("#ddlProj option[value='" + final[i].Global_Dimension_1_Code + "']").length == 0) {
                        selProj.append('<option value="' + final[i].Global_Dimension_1_Code + '">' + final[i].Global_Dimension_1_Code + '</option>');
                    }
                }
                else {
                    if ($("#ddlProj option[value='" + final[i].Global_Dimension_1_Code.trim() + "']").length == 0) {
                        selProj.append('<option value="' + final[i].Global_Dimension_1_Code + '">Uncategorized</option>');
                    }
                }
                if (final[i].Vendor_Name.trim() != '') {
                    if ($("#ddlVendor option[value='" + final[i].Vendor_Name + "']").length == 0) {
                        selVendor.append('<option value="' + final[i].Vendor_Name + '">' + final[i].Vendor_Name + '</option>');
                    }
                }
                else {
                    if ($("#ddlVendor option[value='" + final[i].Vendor_Name.trim() + "']").length == 0) {
                        selVendor.append('<option value="' + final[i].Vendor_Name + '">Uncategorized</option>');
                    }
                }
            }
            sortSelect(document.getElementById('ddlProj'));
            sortSelect(document.getElementById('ddlVendor'));
            $("#ddlProj").multiselect({
                includeSelectAllOption: true,
                numberDisplayed: 1,
                maxHeight: 250,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true
            });//('rebuild', { maxHeight: 200 });

            $("#ddlVendor").multiselect({
                includeSelectAllOption: true,
                numberDisplayed: 1,
                maxHeight: 250,
                enableFiltering: true,
                enableCaseInsensitiveFiltering: true
            });//('rebuild', { maxHeight: 200 });
            $('div.input-group-prepend').css({ 'display': 'none' });
            $("#ddlProj").multiselect('clearSelection');
            // $("#ddlVendor").multiselect('clearSelection');
        });
    }
    else if (companies.length === 1) {

        var uri = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + companies[0] + "')/GLE?$filter=G_L_Account_No ge '50000' & $select=Global_Dimension_1_Code,Vendor_Name";
        $.ajax({
            url: uri,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {

                var selProj = $("#ddlProj");
                var selVendor = $("#ddlVendor");

                //                    selProj.append('<option value="All" selected>All</option>');
                //                    selVendor.append('<option value="All" selected>All</option>');



                for (var i = 0; i < data.value.length; i++) {
                    if (data.value[i].Global_Dimension_1_Code.trim() != '') {// || data.value[i].Global_Dimension_1_Code != 'NOT SPECIFIED') {
                        if ($("#ddlProj option[value='" + data.value[i].Global_Dimension_1_Code + "']").length == 0) {
                            selProj.append('<option value="' + data.value[i].Global_Dimension_1_Code + '" selected>' + data.value[i].Global_Dimension_1_Code + '</option>');
                        }
                    }
                    else {
                        if ($("#ddlProj option[value='" + data.value[i].Global_Dimension_1_Code.trim() + "']").length == 0) {
                            selProj.append('<option value="' + data.value[i].Global_Dimension_1_Code + '">Uncategorized</option>');
                        }
                    }

                    if (data.value[i].Vendor_Name.trim() != '') {
                        if ($("#ddlVendor option[value='" + data.value[i].Vendor_Name + "']").length == 0) {
                            selVendor.append('<option value="' + data.value[i].Vendor_Name + '" selected>' + data.value[i].Vendor_Name + '</option>');
                        }
                    }
                    else {
                        if ($("#ddlVendor option[value='" + data.value[i].Vendor_Name.trim() + "']").length == 0) {
                            selVendor.append('<option value="' + data.value[i].Vendor_Name + '">Uncategorized</option>');
                        }
                    }
                }
                sortSelect(document.getElementById('ddlProj'));
                sortSelect(document.getElementById('ddlVendor'));
                $("#ddlProj").multiselect({
                    includeSelectAllOption: true,
                    numberDisplayed: 1,
                    maxHeight: 250,
                    enableFiltering: true,
                    enableCaseInsensitiveFiltering: true
                });//('rebuild', { maxHeight: 200 });
                $("#ddlVendor").multiselect({
                    includeSelectAllOption: true,
                    numberDisplayed: 1,
                    maxHeight: 250,
                    enableFiltering: true,
                    enableCaseInsensitiveFiltering: true
                });//('rebuild', { maxHeight: 200 });
                $('div.input-group-prepend').css({ 'display': 'none' });
                $("#ddlProj").multiselect('clearSelection');
                //    $("#ddlVendor").multiselect('clearSelection');
            }
        });

    }
    $('#divWait').hide();
}

/*$(document).on('change', '#ddlCompany', function () {

    if ($('#ddlReport').val() === 'PL' || $('#ddlReport').val() === 'VES') {
        GetProjectVendors();
    }
    if ($('#ddlReport').val() === 'ASV') {
        GetGLAccounts();
        GetProjectVendors();
    }
});*/

function AddToHeader(xhr) {

    xhr.setRequestHeader("Authorization", "Basic " + btoa("DYN365-ADMIN:kMLYu2C64oLch3JkvYqzyhvfIfLgOtpd5buBj36L6k4="));
}

Date.prototype.yyyymmdd = function (b) {
    if (b) {
        var mm = this.getMonth() + 1; // ****getMonth() is zero-based
        var dd = this.getDate();

        return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
    else {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();

        return [this.getFullYear() - 1,
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('-');
    }
};

$(document).on("click", "#btnReport", function () {
    //$("#btnReport").live('click',function(){
    //$("#btnReport").on('click', function () {
    $('#divWait').show();
    $('#pivot').show();
    $('#back').hide();
    $('#divDetail').hide();
    if ($('#ddlReport').val() === "PL") {
        var radioValue = $("input[name='colorRadio']:checked").val();
        if (radioValue === 'Company') {
            if ($('#datepickerFrom').val() !== '' && $('#datepickerTo').val() !== '' && $('#ddlCompany').val().length > 0 && $('#ddlVendor').val().length > 0) {
                PLCompany();
            }
            else {
                $('#divWait').hide();
                alert("Error! Please provide all fields for criteria to run the report.");
            }
        }
        else if (radioValue === 'Project') {
            if ($('#datepickerFrom').val() !== '' && $('#datepickerTo').val() !== '' && $('#ddlCompany').val().length > 0 && $('#ddlVendor').val().length > 0 && $('#ddlProj').val().length > 0) {
                PLProject();
            }
            else {
                $('#divWait').hide();
                alert("Error! Please provide all fields for criteria to run the report.");
            }
        }
    }
    else if ($('#ddlReport').val() === "ASV") {
        if ($('#datepickerFrom').val() !== '' && $('#datepickerTo').val() !== '' && $('#ddlCompany').val().length > 0 && $('#ddlAccount').val().length > 0 && $('#ddlVendor').val().length > 0) {
            ASV();
        }
        else {
            $('#divWait').hide();
            alert("Error! Please provide all fields for criteria to run the report.");
        }
    }
    else if ($('#ddlReport').val() === "BS") {
        if ($('#datepicker').val() !== '' && $('#ddlCompany').val().length > 0) {
            BS();
        }
        else {
            $('#divWait').hide();
            alert("Error! Please provide all fields for criteria to run the report.");
        }
    }
    else if ($('#ddlReport').val() === "VES") {
        if ($('#datepickerFrom').val() !== '' && $('#datepickerTo').val() !== '' && $('#ddlCompany').val().length > 0 && $('#ddlVendor').val().length > 0 && $('#ddlProj').val().length > 0) {
            VES();
        }
        else {
            $('#divWait').hide();
            alert("Error! Please provide all fields for criteria to run the report.");
        }
    }
});

function PLCompany() {
    var outputAs = $('#ddlOutput').val();
    var comp = $('#ddlCompany').val();
    var vendors = $('#ddlVendor').val();
    if (outputAs === 'ITD') {
        PLCompanyITD(comp, vendors);
    }
    if (outputAs === 'YTD') {
        PLCompanyYTD(comp, vendors);
    }
    if (outputAs === 'Period') {
        PLCompanyPeriod(comp, vendors);
    }
    if (outputAs === 'Month') {
        PLCompanyMonth(comp, vendors);
    }
}

function PLProject() {
    var outputAs = $('#ddlOutput').val();
    var company = $('#ddlCompany').val();
    var proj = $('#ddlProj').val();
    var vendors = $('#ddlVendor').val();
    if (outputAs === 'ITD') {
        PLProjectITD(company, proj, vendors);
    }
    if (outputAs === 'YTD') {
        PLProjectYTD(company, proj, vendors);
    }
    if (outputAs === 'Period') {
        PLProjectPeriod(company, proj, vendors);
    }
}

function ASV() {
    var outputAs = $('#ddlOutput').val();
    var comp = $('#ddlCompany').val();
    var vendors = $('#ddlVendor').val();
    var accnt = $('#ddlAccount').val();
    var proj = $('#ddlProj').val();
    if (outputAs === 'ITD') {
        ASVITD(comp, proj, vendors, accnt);
    }
    if (outputAs === 'YTD') {
        ASVYTD(comp, proj, vendors, accnt);
    }
    if (outputAs === 'Period') {
        ASVPeriod(comp, proj, vendors, accnt);
    }
    if (outputAs === 'Month') {
        ASVMonth(comp, proj, vendors, accnt);
    }

}

function BS() {
    var date = new Date($('#datepicker').val()).yyyymmdd(true);
    var company = $('#ddlCompany').val();
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=Posting_Date le " + date;
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {

                        item.Translator = mySubString;
                    });
                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            //globalData = results;
            var final;

            final = results.flat(1);
            //      globalData = final;
            $.each(final, function (i, item) {
                //item.Account = item.G_L_Account_No + " - " + item.G_L_Account_Name;
                item.G_L_Account_Name = item.G_L_Account_Name.trim();
            });

            var res = $.grep(final, function (n, i) {
                return n.G_L_Account_No != "";
            });
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var tpl = $.pivotUtilities.aggregatorTemplates;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name"],
                            cols: ["Period"],
                            aggregator: tpl.sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:20%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 >3DC All Translator Companies</h2>' +
                            '<h3 >Balance Sheet</h3>' +
                            '<p>As of ' + $('#datepicker').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:20%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 >' + company[i] + '</h2>';
                        }
                        Header += '<h3 >Balance Sheet</h3>' +
                            '<p>As of ' + $('#datepicker').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                    $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                    $('.pvtTable').switchColumns(0, 1);

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Account Number');
                    $('.pvtTable thead tr th:eq(1)').text('Account Description');
                    $('.pvtTable thead tr th:eq(2)').text('Amount');

                    //  $(".pvtTable tbody tr:last").prev().remove();

                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });

                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                        formats: ['csv']
                    //                    });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    var count = 0;
                    var totalBankAccounts = 0, totalOtherCurrentAssets = 0, totalCurrentAssets = 0, totalAssets = 0,
                        totalAccountsPayables = 0, TotalOtherCurrentLiablities = 0, TotalCurrentLiabilities = 0, totalLiabilities = 0,
                        netIncome = 0, sumEquity = 0, totalEquity = 0, totalLiabilitiesandEquity = 0;
                    var check10 = false, check11 = false, check20 = false, check21 = false, check3 = false;
                    var val = 0;
                    $('.pvtTable tbody tr').each(function (i) {
                        var $this = $(this);
                        $('th', $this).each(function (j) {
                            if (j == 0) {
                                val = parseInt($(this).text())
                                if ($.isNumeric(val) || val == '') {
                                    //val = parseInt(val / 1000);

                                    if (val >= 10000 && val < 11000 && !check10) {
                                        $('.pvtTable > tbody > tr').eq(count).
                                            before('<tr><th class="pvtRowLabel">ASSETS</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:10px;">Current Assets</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:20px;">Bank Accounts</th><th class="pvtRowLabel"></th><td></td></tr>'
                                            );
                                        count += 4;
                                        check10 = true;
                                    }
                                    else if (val >= 10000 && val < 11000 && check10) {
                                        count++;
                                    }
                                    if (val >= 11000 && val < 20000 && !check11) {
                                        $('.pvtTable > tbody > tr').eq(count).
                                            before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Bank Accounts</th><th class="pvtRowLabel" ></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:20px;">Other Current Assets</th><th class="pvtRowLabel"></th><td></td></tr>'
                                            );
                                        count += 3;
                                        check11 = true;
                                    }
                                    else if (val >= 11000 && val < 20000 && check11) {
                                        count++;
                                    }

                                    if (val >= 20000 && val < 21000 && !check20) {
                                        $('.pvtTable > tbody > tr').eq(count).
                                            before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Other Current Assets</th><th class="pvtRowLabel" ></th><td style="border-top:2px solid black"></td></tr>' +
                                                '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:10px ">Total Current Assets</th><th class="pvtRowLabel" ></th><td ></td></tr>' +
                                                '<tr style="border-top:2px solid gray; border-bottom: 3.5px solid black"><th class="pvtRowLabel" >TOTAL ASSETS</th><th class="pvtRowLabel" ></th><td style="border-top:2px solid black"></td></tr>' +
                                                '<tr><th class="pvtRowLabel">LIABILITIES AND EQUITY</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:10px;">Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:20px;">Current Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:30px;">Accounts Payable</th><th class="pvtRowLabel"></th><td></td></tr>'
                                            );
                                        count += 8;
                                        check20 = true;
                                    }
                                    else if (val >= 20000 && val < 21000 && check20) {
                                        count++;
                                    }

                                    if (val >= 21000 && val < 30000 && !check21) {
                                        $('.pvtTable > tbody >tr').eq(count).
                                            before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:30px ">Total Accounts Payable</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:30px;">Other Current Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>');
                                        count += 3;
                                        check21 = true;
                                    }
                                    else if (val >= 21000 && val < 30000 && check21) {
                                        count++;
                                    }

                                    if (val >= 30000 && val < 40000 && !check3) {
                                        $('.pvtTable > tbody > tr').eq(count).
                                            before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:30px ">Total Other Current Liabilities</th><th class="pvtRowLabel" ></th><td></td></tr>' +
                                                '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Current Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:10px;">Total Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                '<tr><th class="pvtRowLabel" style="padding-left:10px;">Equity</th><th class="pvtRowLabel"></th><td></td></tr>'
                                            );
                                        count += 5;
                                        check3 = true;
                                    }
                                    else if (val >= 30000 && val < 40000 && check3) {
                                        count++;
                                    }
                                }
                            }
                        });
                    });
                    $('.pvtTable tbody tr:last').replaceWith('<tr><th style="padding-left:20px;">Net Income</th><th class="pvtRowLabel"></th><td>' + netIncome + '</td></tr>' +
                        '<tr style="border-top:2px solid gray"><th style="padding-left:10px ">Total Equity</th><th class="pvtRowLabel"></th><td>' + totalEquity + '</td></tr>' +
                        '<tr style="border-top:2px solid gray; border-bottom: 3.5px solid black"><th style="padding-left:0px; ">TOTAL LIABILITIES AND EQUITY</th><th class="pvtRowLabel"></th><td style="border-top:2px solid black"></td></tr>'
                    );

                    var table = document.getElementsByClassName('pvtTable')[0];
                    for (let line = 0; line < table.rows.length; line++) {
                        var rc0 = table.rows[line].cells[0].textContent;
                        var rc2 = parseFloat(table.rows[line].cells[2].textContent.replace(/,/g, '')).toFixed(2);
                        if ($.isNumeric(rc0)) {
                            rc0 = parseInt(rc0);
                            if (rc0 >= 10000 && rc0 < 11000) {
                                //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      '+rc0;
                                table.rows[line].cells[0].style.paddingLeft = '30px';
                                totalBankAccounts = parseFloat(totalBankAccounts) + parseFloat(rc2);
                                table.rows[line].cells[2].innerText = numberWithCommas(rc2);
                            }
                            if (rc0 >= 11000 && rc0 < 20000) {
                                //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      '+rc0;
                                table.rows[line].cells[0].style.paddingLeft = '30px';
                                totalOtherCurrentAssets = parseFloat(totalOtherCurrentAssets) + parseFloat(rc2);
                                table.rows[line].cells[2].innerText = numberWithCommas(rc2);
                            }
                            if (rc0 >= 20000 && rc0 < 21000) {
                                //                                   table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        '+rc0;
                                table.rows[line].cells[0].style.paddingLeft = '40px';
                                totalAccountsPayables = parseFloat(totalAccountsPayables) + parseFloat(rc2);
                                table.rows[line].cells[2].innerText = numberWithCommas(rc2 * parseFloat(-1));
                            }
                            if (rc0 >= 21000 && rc0 < 30000) {
                                //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        '+rc0;
                                table.rows[line].cells[0].style.paddingLeft = '40px';
                                TotalOtherCurrentLiablities = parseFloat(TotalOtherCurrentLiablities) + parseFloat(rc2);
                                table.rows[line].cells[2].innerText = numberWithCommas(rc2 * parseFloat(-1));
                            }
                            if (rc0 >= 30000 && rc0 < 40000) {
                                //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;    '+rc0;
                                table.rows[line].cells[0].style.paddingLeft = '20px';
                                sumEquity = parseFloat(sumEquity) + parseFloat(rc2);
                                table.rows[line].cells[2].innerText = numberWithCommas(rc2 * parseFloat(-1));
                            }
                            if (rc0 >= 50000 && rc0 < 90000) {

                                netIncome = parseFloat(netIncome) + parseFloat(rc2);
                                table.rows[line].cells[2].innerText = rc2 * parseFloat(-1);
                            }
                        }
                        else {
                            if (rc0.trim() === 'Total Bank Accounts') {
                                //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nb'+rc0;
                                table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(totalBankAccounts).toFixed(2));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Total Other Current Assets') {
                                //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                table.rows[line].cells[2].innerText = numberWithCommas(totalOtherCurrentAssets);
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Total Current Assets') {
                                //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;'+rc0;
                                totalCurrentAssets = totalOtherCurrentAssets + totalBankAccounts;
                                table.rows[line].cells[2].innerText = numberWithCommas(totalCurrentAssets);
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'TOTAL ASSETS') {
                                totalAssets = totalCurrentAssets;
                                table.rows[line].cells[2].innerText = numberWithCommas(totalAssets);
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Total Accounts Payable') {
                                //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                table.rows[line].cells[2].innerText = numberWithCommas((totalAccountsPayables * (-1)));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Total Other Current Liabilities') {
                                //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                table.rows[line].cells[2].innerText = numberWithCommas((TotalOtherCurrentLiablities * (-1)));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Total Current Liabilities') {
                                //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                TotalCurrentLiabilities = totalAccountsPayables + TotalOtherCurrentLiablities;
                                table.rows[line].cells[2].innerText = numberWithCommas((TotalCurrentLiabilities * (-1)));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Total Liabilities') {
                                //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;'+rc0;
                                totalLiabilities = totalAccountsPayables + TotalOtherCurrentLiablities;
                                table.rows[line].cells[2].innerText = numberWithCommas((totalLiabilities * (-1)));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Net Income') {
                                //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                table.rows[line].cells[2].innerText = numberWithCommas((netIncome * (-1)));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'Total Equity') {
                                //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;'+rc0;
                                totalEquity = (parseFloat(sumEquity) + parseFloat(netIncome)).toFixed(2);
                                table.rows[line].cells[2].innerText = numberWithCommas((totalEquity * (-1)));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                            if (rc0.trim() === 'TOTAL LIABILITIES AND EQUITY') {
                                totalLiabilitiesandEquity = (parseFloat(totalLiabilities) + parseFloat(totalEquity)).toFixed(2);
                                table.rows[line].cells[2].innerText = numberWithCommas((totalLiabilitiesandEquity * (-1)));
                                table.rows[line].cells[2].style.fontWeight = "bold";
                            }
                        }
                    }
                    for (var line = table.rows.length - 1; line >= 0; line--) {
                        var rc0 = parseInt(table.rows[line].cells[0].textContent);
                        if (rc0 >= 50000 && rc0 <= 90000) {
                            $('.pvtTable tbody tr').eq(line - 1).remove();
                        }
                    }
                    for (var line = table.rows.length - 1; line >= 0; line--) {
                        //var rc2 = table.rows[line].cells[2].textContent;
                        //if (rc2.indexOf('.') !== -1) {
                            //rc2 = rc2.split('.')[0];
                            //table.rows[line].cells[2].innerText = rc2;
                        //}
                        table.rows[line].cells[2].style.backgroundColor = '#e6EEEE';
                    }
                    $('.pvtTable').ConvertHyperlinkBS();
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=Posting_Date le " + date;// + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                var Months = {
                    "January": "01",
                    "February": "02",
                    "March": "03",
                    "April": "04",
                    "May": "05",
                    "June": "06",
                    "July": "07",
                    "August": "08",
                    "September": "09",
                    "October": "10",
                    "November": "11",
                    "December": "12"
                };

                var final = data.value;//.concat(data1.value);
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );
                $.each(final, function (i, item) {
                    item.Translator = mySubString;
                });

                // globalData = data.value;

                $.each(final, function (i, item) {
                    if (item.G_L_Account_No != "") {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    }
                });


                var res = $.grep(final, function (n, i) {
                    return n.G_L_Account_No != "";
                });

                globalData = res;

                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var tpl = $.pivotUtilities.aggregatorTemplates;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name"],
                                cols: ["Period"],
                                aggregator: tpl.sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );

                        var Header = '<div style="border:black solid 1.5pt;width:20%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 >' + company[0] + '</h2>' +
                            '<h3 >Balance Sheet</h3>' +
                            '<p>As of ' + $('#datepicker').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                        $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                        $('.pvtTable').switchColumns(0, 1);

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(0)').text('Account Number');
                        $('.pvtTable thead tr th:eq(1)').text('Account Description');
                        $('.pvtTable thead tr th:eq(2)').text('Amount');

                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });

                        //                        $('table').eq(1).tableExport({
                        //                            type: 'excel',
                        //                            filename: 'Profit & loss by month',
                        //                            position: 'top',
                        //                            formats: ['csv']
                        //                        });

                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        var count = 0;
                        var totalBankAccounts = 0, totalOtherCurrentAssets = 0, totalCurrentAssets = 0, totalAssets = 0,
                            totalAccountsPayables = 0, TotalOtherCurrentLiablities = 0, TotalCurrentLiabilities = 0, totalLiabilities = 0,
                            netIncome = 0, sumEquity = 0, totalEquity = 0, totalLiabilitiesandEquity = 0;
                        var check10 = false, check11 = false, check20 = false, check21 = false, check3 = false;
                        var val = 0;
                        $('.pvtTable tbody tr').each(function (i) {
                            var $this = $(this);
                            $('th', $this).each(function (j) {
                                if (j == 0) {
                                    val = parseInt($(this).text())
                                    if ($.isNumeric(val) || val == '') {
                                        //val = parseInt(val / 1000);

                                        if (val >= 10000 && val < 11000 && !check10) {
                                            $('.pvtTable > tbody > tr').eq(count).
                                                before('<tr><th class="pvtRowLabel">ASSETS</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:10px;">Current Assets</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:20px;">Bank Accounts</th><th class="pvtRowLabel"></th><td></td></tr>'
                                                );
                                            count += 4;
                                            check10 = true;
                                        }
                                        else if (val >= 10000 && val < 11000 && check10) {
                                            count++;
                                        }
                                        if (val >= 11000 && val < 20000 && !check11) {
                                            $('.pvtTable > tbody > tr').eq(count).
                                                before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Bank Accounts</th><th class="pvtRowLabel" ></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:20px;">Other Current Assets</th><th class="pvtRowLabel"></th><td></td></tr>'
                                                );
                                            count += 3;
                                            check11 = true;
                                        }
                                        else if (val >= 11000 && val < 20000 && check11) {
                                            count++;
                                        }

                                        if (val >= 20000 && val < 21000 && !check20) {
                                            $('.pvtTable > tbody > tr').eq(count).
                                                before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Other Current Assets</th><th class="pvtRowLabel" ></th><td style="border-top:2px solid black"></td></tr>' +
                                                    '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:10px ">Total Current Assets</th><th class="pvtRowLabel" ></th><td ></td></tr>' +
                                                    '<tr style="border-top:2px solid gray; border-bottom: 3.5px solid black"><th class="pvtRowLabel" >TOTAL ASSETS</th><th class="pvtRowLabel" ></th><td style="border-top:2px solid black"></td></tr>' +
                                                    '<tr><th class="pvtRowLabel">LIABILITIES AND EQUITY</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:10px;">Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:20px;">Current Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:30px;">Accounts Payable</th><th class="pvtRowLabel"></th><td></td></tr>'
                                                );
                                            count += 8;
                                            check20 = true;
                                        }
                                        else if (val >= 20000 && val < 21000 && check20) {
                                            count++;
                                        }

                                        if (val >= 21000 && val < 30000 && !check21) {
                                            $('.pvtTable > tbody >tr').eq(count).
                                                before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:30px ">Total Accounts Payable</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:30px;">Other Current Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>');
                                            count += 3;
                                            check21 = true;
                                        }
                                        else if (val >= 21000 && val < 30000 && check21) {
                                            count++;
                                        }

                                        if (val >= 30000 && val < 40000 && !check3) {
                                            $('.pvtTable > tbody > tr').eq(count).
                                                before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:30px ">Total Other Current Liabilities</th><th class="pvtRowLabel" ></th><td></td></tr>' +
                                                    '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Current Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:10px;">Total Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                                    '<tr><th class="pvtRowLabel" style="padding-left:10px;">Equity</th><th class="pvtRowLabel"></th><td></td></tr>'
                                                );
                                            count += 5;
                                            check3 = true;
                                        }
                                        else if (val >= 30000 && val < 40000 && check3) {
                                            count++;
                                        }
                                    }
                                }
                            });
                        });
                        $('.pvtTable tbody tr:last').replaceWith('<tr><th style="padding-left:20px;">Net Income</th><th class="pvtRowLabel"></th><td>' + netIncome + '</td></tr>' +
                            '<tr style="border-top:2px solid gray"><th style="padding-left:10px ">Total Equity</th><th class="pvtRowLabel"></th><td>' + totalEquity + '</td></tr>' +
                            '<tr style="border-top:2px solid gray; border-bottom: 3.5px solid black"><th style="padding-left:0px; ">TOTAL LIABILITIES AND EQUITY</th><th class="pvtRowLabel"></th><td style="border-top:2px solid black"></td></tr>'
                        );

                        if ($('.pvtTable:contains(ASSETS)').length <= 0) {
                            $('.pvtTable > tbody > tr').eq(0).
                                before('<tr><th class="pvtRowLabel">ASSETS</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                    '<tr><th class="pvtRowLabel" style="padding-left:10px;">Current Assets</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                    '<tr><th class="pvtRowLabel" style="padding-left:20px;">Bank Accounts</th><th class="pvtRowLabel"></th><td></td></tr>'
                                );
                        }
                        if ($('.pvtTable:contains(Total Bank Accounts)').length <= 0) {
                            $('.pvtTable > tbody > tr').eq(3).
                                before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Bank Accounts</th><th class="pvtRowLabel" ></th><td>' + totalBankAccounts + '</td></tr>' +
                                    '<tr><th class="pvtRowLabel" style="padding-left:20px;">Other Current Assets</th><th class="pvtRowLabel"></th><td></td></tr>'
                                );
                        }
                        if ($('.pvtTable:contains(Total Other Current Assets)').length <= 0) {
                            $('.pvtTable > tbody > tr').eq(5).
                                before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Other Current Assets</th><th class="pvtRowLabel" ></th><td>' + totalOtherCurrentAssets + '</td></tr>' +
                                    '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:10px ">Total Current Assets</th><th class="pvtRowLabel" ></th><td>' + totalCurrentAssets + '</td></tr>' +
                                    '<tr style="border-top:2px solid gray; border-bottom: 3.5px solid black"><th class="pvtRowLabel" >TOTAL ASSETS</th><th class="pvtRowLabel" ></th><td>' + totalAssets + '</td></tr>' +
                                    '<tr><th class="pvtRowLabel">LIABILITIES AND EQUITY</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                    '<tr><th class="pvtRowLabel" style="padding-left:10px;">Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                    '<tr><th class="pvtRowLabel" style="padding-left:20px;">Current Liabilities</th><th class="pvtRowLabel"></th><td></td></tr>' +
                                    '<tr><th class="pvtRowLabel" style="padding-left:30px;">Accounts Payable</th><th class="pvtRowLabel"></th><td></td></tr>'
                                );
                        }

                        if ($('.pvtTable:contains(Total Other Current Liabilities)').length <= 0) {
                            $('.pvtTable > tbody > tr').eq(15).
                                before('<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:30px ">Total Other Current Liabilities</th><th class="pvtRowLabel" ></th><td>' + TotalOtherCurrentLiablities + '</td></tr>' +
                                    '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:20px ">Total Current Liabilities</th><th class="pvtRowLabel"></th><td>' + TotalCurrentLiabilities + '</td></tr>' +
                                    '<tr style="border-top:2px solid gray"><th class="pvtRowLabel" style="padding-left:10px;">Total Liabilities</th><th class="pvtRowLabel"></th><td>' + totalLiabilities + '</td></tr>' +
                                    '<tr><th class="pvtRowLabel" style="padding-left:10px;">Equity</th><th class="pvtRowLabel"></th><td></td></tr>'
                                );
                        }


                        var table = document.getElementsByClassName('pvtTable')[0];
                        for (let line = 0; line < table.rows.length; line++) {
                            var rc0 = table.rows[line].cells[0].textContent;
                            var rc2 = parseFloat(table.rows[line].cells[2].textContent.replace(/,/g, '')).toFixed(2);
                            if ($.isNumeric(rc0)) {
                                rc0 = parseInt(rc0);
                                if (rc0 >= 10000 && rc0 < 11000) {
                                    //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      '+rc0;
                                    table.rows[line].cells[0].style.paddingLeft = '30px';
                                    totalBankAccounts = parseFloat(totalBankAccounts) + parseFloat(rc2);
                                    table.rows[line].cells[2].innerText = numberWithCommas(rc2);
                                }
                                if (rc0 >= 11000 && rc0 < 20000) {
                                    //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      '+rc0;
                                    table.rows[line].cells[0].style.paddingLeft = '30px';
                                    totalOtherCurrentAssets = parseFloat(totalOtherCurrentAssets) + parseFloat(rc2);
                                    table.rows[line].cells[2].innerText = numberWithCommas(rc2);
                                }
                                if (rc0 >= 20000 && rc0 < 21000) {
                                    //                                   table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        '+rc0;
                                    table.rows[line].cells[0].style.paddingLeft = '40px';
                                    totalAccountsPayables = parseFloat(totalAccountsPayables) + parseFloat(rc2);
                                    table.rows[line].cells[2].innerText = numberWithCommas(rc2 * parseFloat(-1));
                                }
                                if (rc0 >= 21000 && rc0 < 30000) {
                                    //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        '+rc0;
                                    table.rows[line].cells[0].style.paddingLeft = '40px';
                                    TotalOtherCurrentLiablities = parseFloat(TotalOtherCurrentLiablities) + parseFloat(rc2);
                                    console.log(rc2);
                                    //console.log(parseFloat(TotalOtherCurrentLiablities).toFixed(2));
                                    table.rows[line].cells[2].innerText = numberWithCommas(rc2 * parseFloat(-1));
                                }
                                if (rc0 >= 30000 && rc0 < 40000) {
                                    //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;    '+rc0;
                                    table.rows[line].cells[0].style.paddingLeft = '20px';
                                    sumEquity = parseFloat(sumEquity) + parseFloat(rc2);
                                    table.rows[line].cells[2].innerText = numberWithCommas(rc2 * parseFloat(-1));
                                }
                                if (rc0 >= 50000 && rc0 < 90000) {

                                    netIncome = parseFloat(netIncome) + parseFloat(rc2);
                                    table.rows[line].cells[2].innerText = rc2 * parseFloat(-1);
                                }
                            }
                            else {
                                if (rc0.trim() === 'Total Bank Accounts') {
                                    //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nb'+rc0;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(totalBankAccounts).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Total Other Current Assets') {
                                    //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(totalOtherCurrentAssets).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Total Current Assets') {
                                    //                                    table.rows[line].cells[0].innerHtml='&nbsp;&nbsp;'+rc0;
                                    totalCurrentAssets = totalOtherCurrentAssets + totalBankAccounts;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(totalCurrentAssets).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'TOTAL ASSETS') {
                                    totalAssets = totalCurrentAssets;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat( totalAssets).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Total Accounts Payable') {
                                    //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(totalAccountsPayables * (-1)).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Total Other Current Liabilities') {
                                    //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(TotalOtherCurrentLiablities * (-1)).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Total Current Liabilities') {
                                    //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                    TotalCurrentLiabilities = totalAccountsPayables + TotalOtherCurrentLiablities;
                                    console.log(TotalCurrentLiabilities);
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(TotalCurrentLiabilities * (-1)).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Total Liabilities') {
                                    //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;'+rc0;
                                    totalLiabilities = totalAccountsPayables + TotalOtherCurrentLiablities;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(totalLiabilities * (-1)).toFixed(2));
                                    console.log(totalLiabilities);
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Net Income') {
                                    console.log("net:  "+netIncome);
                                    //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;'+rc0;
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(netIncome * (-1)).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'Total Equity') {
                                    //                                    table.rows[line].cells[0].innerHTML='&nbsp;&nbsp;'+rc0;
                                    totalEquity = (parseFloat(sumEquity) + parseFloat(netIncome)).toFixed(2);
                                    table.rows[line].cells[2].innerText = numberWithCommas((totalEquity * (-1)));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                                if (rc0.trim() === 'TOTAL LIABILITIES AND EQUITY') {
                                    totalLiabilitiesandEquity = (parseFloat(totalLiabilities) + parseFloat(totalEquity)).toFixed(2);
                                    table.rows[line].cells[2].innerText = numberWithCommas(parseFloat(totalLiabilitiesandEquity * (-1)).toFixed(2));
                                    table.rows[line].cells[2].style.fontWeight = "bold";
                                }
                            }
                        }
                        for (var line = table.rows.length - 1; line >= 0; line--) {
                            var rc0 = parseInt(table.rows[line].cells[0].textContent);
                            if (rc0 >= 50000 && rc0 <= 90000) {
                                $('.pvtTable tbody tr').eq(line - 1).remove();
                            }
                        }
                        for (var line = table.rows.length - 1; line >= 0; line--) {
                            //var rc2 = table.rows[line].cells[2].textContent;
                            //if (rc2.indexOf('.') !== -1) {
                                //rc2 = rc2.split('.')[0];
                                //table.rows[line].cells[2].innerText = rc2;
                            //}
                            table.rows[line].cells[2].style.backgroundColor = '#e6EEEE';
                        }



                        $('.pvtTable').ConvertHyperlinkBS();
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        //                        var $span = $('.pvtTable');
                        //                        $span.find('td').wrapInner('<th />').contents().unwrap();
                        //                        $span.find('tbody').contents().unwrap();


                        
                    });
                });
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
        /*},
 
       }   error: function () { alert("error") }
    })*/
    }
}

function VES() {
    var outputAs = $('#ddlOutput').val();
    var comp = $('#ddlCompany').val();
    var vendors = $('#ddlVendor').val();
    var proj = $('#ddlProj').val();
    if (outputAs === 'ITD') {
        VESITD(comp, vendors, proj);
    }
    if (outputAs === 'YTD') {
        VESYTD(comp, vendors, proj);
    }
    if (outputAs === 'Period') {
        VESPeriod(comp, vendors, proj);
    }
    if (outputAs === 'Month') {
        VESMonth(comp, vendors, proj);
    }
}

var globalData = [];
function PLCompanyITD(company, vend) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;34
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;

            final = results.flat(1);
            var DocNo = [];

            var res = '';


            if (vend[0] === 'All') {
                res = $.grep(final, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }

            //            var resITD = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            //        if (data1.value.length === 0) {

            //            var strFrom = prevdateFrom.toString();
            //            var strTo = prevdateTo.toString();

            //            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
            //item.Period = "Period From " + dateFrom + " To " + dateTo;
            //                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });

            //            }
            //            else {
            //                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
            //            }
            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
            //      }
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>' +
                            '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }

                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                    $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                    $('.pvtTable').switchColumns(0, 1);

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Account Number');
                    $('.pvtTable thead tr th:eq(1)').text('Account Description');
                    $('.pvtTable thead tr th:eq(2)').text('Amount');



                    //$('.pvtTable').numberWithParanthesis();
                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlink();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                    var Ttl = $('.pvtTable tbody tr:last td:eq(0)').text();
                    var int = parseInt(Ttl, 10);
                    if (int > 0) {
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    }
                    else {

                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>' + Ttl + '</td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    }

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });



                    /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                         $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                     }*/
                    //                                $('#btnExport').css('display','block');
                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                        formats: ['csv']
                    //                    });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });

            });
            $('#divWait').hide();
        });


    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;// + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                /*$.ajax({
                    url: PrevPnLURL,
                    type: "GET", //or POST?
                    dataType: "json",
                    beforeSend: function (request) {
                        AddToHeader(request);
                    },
                    success: function (data1) {*/
                var final = data.value;//.concat(data1.value);
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );
                $.each(final, function (i, item) {
                    item.Translator = mySubString;
                });




                //globalData = data.value;

                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });
                final = final.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                var res = '';
                if (vend[0] === 'All') {
                    res = $.grep(final, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });
                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000// && n.VLC_Shortcut_Dimension_4_Code

                    });
                }
                //                var resITD = $.grep(resITD, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });
                /*-                        if (data1.value.length === 0) {
                
                                            var strFrom = prevdateFrom.toString();
                                            var strTo = prevdateTo.toString();
                
                                            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                
                                            }
                                            else {
                                                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                            }
                                            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                        }*/
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name"],
                                cols: ["Period"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                            '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                        $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                        $('.pvtTable').switchColumns(0, 1);

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(0)').text('Account Number');
                        $('.pvtTable thead tr th:eq(1)').text('Account Description');
                        $('.pvtTable thead tr th:eq(2)').text('Amount');




                        //  $(".pvtTable tbody tr:last").prev().remove();
                        $('.pvtTable').ConvertHyperlink();
                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                        var Ttl = $('.pvtTable tbody tr:last td:eq(0)').text();
                        var int = parseInt(Ttl, 10);
                        if (int > 0) {
                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>(' + Ttl + ') </td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        }
                        else {

                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        }

                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });



                        /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                             $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                         }*/
                        //                                $('#btnExport').css('display','block');
                        //                        $('table').eq(1).tableExport({
                        //                            type: 'excel',
                        //                            filename: 'Profit & loss by month',
                        //                            position: 'top',
                        //                            formats: ['csv']
                        //                        });

                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
        /*},
 
       }   error: function () { alert("error") }
    })*/
    }
}

function PLProjectITD(company, project, vend) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );

                    $.each(data, function (i, item) {

                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    /* $.each(data, function (i, item) {
                         
                         item.Translator = $(this).url;
                     });*/
                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '', final1 = '';
            if (project[0] === 'All') {
                final1 = final;
            }
            else {
                final1 = final.filter(function (array_el) {
                    return project.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Global_Dimension_1_Code;
                    }).length > 0
                });
            }

            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resITD = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            //        if (data1.value.length === 0) {

            //            var strFrom = prevdateFrom.toString();
            //            var strTo = prevdateTo.toString();

            //            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
            //item.Period = "Period From " + dateFrom + " To " + dateTo;
            //                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });

            //            }
            //            else {
            //                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
            //            }
            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
            //      }
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name"],
                            cols: ["Global_Dimension_1_Code"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';

                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }

                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Account Number');
                    $('.pvtTable thead tr th:eq(1)').text('Account Description');


                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlinkProject();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                    var strrow1 = '<tr><th class="pvtTotalLabel pvtColTotalLabel">Net Operating Income (Loss)</th><th></th>';
                    var strrow2 = '<tr><th class="pvtTotalLabel pvtColTotalLabel">Net Income (Loss)</th><th></th>';
                    var $td = $('.pvtTable tbody tr:last').find('td');
                    $td.each(function (i, ele) {

                        var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                        var int = parseInt(Ttl, 10);
                        if (int > 0) {
                            strrow1 += '<td>(' + Ttl + ')</td>';
                            strrow2 += '<td>(' + Ttl + ')</td>';
                        }
                        else {
                            strrow1 += '<td> ' + Ttl + ' </td>';
                            strrow2 += '<td> ' + Ttl + ' </td>';
                        }
                    });
                    $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });


                    /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                         $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                     }*/
                    //                                $('#btnExport').css('display','block');
                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                        formats: ['csv']
                    //                    });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });

            });


            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;
        $.ajax({
            url: CompUrl,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (result) {
                // 2. Store the results in an array
                var data = result.value;
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );

                $.each(data, function (i, item) {

                    item.Translator = mySubString;
                });
                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var final;
                final = data;
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });

                final = final.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                var res = '', final1 = '';
                if (project[0] === 'All') {
                    final1 = final;
                }
                else {
                    final1 = final.filter(function (array_el) {
                        return project.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Global_Dimension_1_Code;
                        }).length > 0
                    });
                }
                if (vend[0] === 'All') {
                    res = $.grep(final1, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final1.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });

                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                //                var resITD = $.grep(res, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });

                //        if (data1.value.length === 0) {

                //            var strFrom = prevdateFrom.toString();
                //            var strTo = prevdateTo.toString();

                //            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                //item.Period = "Period From " + dateFrom + " To " + dateTo;
                //                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });

                //            }
                //            else {
                //                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                //            }
                //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                //      }
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name"],
                                cols: ["Global_Dimension_1_Code"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company + '</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(0)').text('Account Number');
                        $('.pvtTable thead tr th:eq(1)').text('Account Description');

                        //  $(".pvtTable tbody tr:last").prev().remove();
                        $('.pvtTable').ConvertHyperlinkProject();
                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                        var strrow1 = '<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th>';
                        var strrow2 = '<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th>';
                        var $td = $('.pvtTable tbody tr:last').find('td');
                        $td.each(function (i, ele) {

                            var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                            var int = parseInt(Ttl, 10);
                            if (int > 0) {
                                strrow1 += '<td>(' + Ttl + ')</td>';
                                strrow2 += '<td>(' + Ttl + ')</td>';
                            }
                            else {
                                strrow1 += '<td> ' + Ttl + ' </td>';
                                strrow2 += '<td> ' + Ttl + ' </td>';
                            }
                        });
                        $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });



                        /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                             $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                         }*/
                        //                                $('#btnExport').css('display','block');
                        //                        $('table').eq(1).tableExport({
                        //                            type: 'excel',
                        //                            filename: 'Profit & loss by month',
                        //                            position: 'top',
                        //                            formats: ['csv']
                        //                        });

                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
                $('#divWait').hide();
            }
        });
    }
}

function VESITD(company, vend, project) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };

            var final;
            final = results.flat(1);

            var res = '', final1 = '';
            final1 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });

            //final1=final1.filter(function (array_element){
            //    return DocNo.filter(function(array_element2){
            //        return array_element2!=array_element.Document_No;
            //    }).length>0
            //})

            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }

            //            var resITD = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            //        if (data1.value.length === 0) {

            //            var strFrom = prevdateFrom.toString();
            //            var strTo = prevdateTo.toString();

            //            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
            //item.Period = "Period From " + dateFrom + " To " + dateTo;
            //                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });

            //            }
            //            else {
            //                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
            //            }
            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
            //      }

            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["Vendor_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }

                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                    $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                    $('.pvtTable').switchColumns(0, 1);

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');

                    $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                    $('.pvtTable thead tr th:eq(1)').text('Amount');



                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlinkVES();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total</th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });



                    /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                         $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                     }*/
                    //                                $('#btnExport').css('display','block');
                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                        formats: ['csv']
                    //                    });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });

                    $(".pvtTable thead th:last-child").remove();
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        //    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);

        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;// + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                /*$.ajax({
                    url: PrevPnLURL,
                    type: "GET", //or POST?
                    dataType: "json",
                    beforeSend: function (request) {
                        AddToHeader(request);
                    },
                    success: function (data1) {*/
                var final = data.value;//.concat(data1.value);
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );
                $.each(final, function (i, item) {
                    item.Translator = mySubString;
                });




                //globalData = data.value;

                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });
                var res = '', final1 = '';
                final1 = final.filter(function (array_el) {
                    return project.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Global_Dimension_1_Code;
                    }).length > 0
                });
                final1 = final1.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                if (vend[0] === 'All') {
                    res = $.grep(final1, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final1.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });
                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000// && n.VLC_Shortcut_Dimension_4_Code

                    });
                }
                //                var resITD = $.grep(resITD, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });
                /*-                        if (data1.value.length === 0) {
                
                                            var strFrom = prevdateFrom.toString();
                                            var strTo = prevdateTo.toString();
                
                                            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                
                                            }
                                            else {
                                                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                            }
                                            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                        }*/
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["Vendor_Name"],
                                cols: ["Period"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                        $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                        $('.pvtTable').switchColumns(0, 1);

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');

                        $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                        $('.pvtTable thead tr th:eq(1)').text('Amount');




                        //  $(".pvtTable tbody tr:last").prev().remove();
                        $('.pvtTable').ConvertHyperlinkVES();
                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total</th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });



                        /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                             $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                         }*/
                        //                                $('#btnExport').css('display','block');
                        //                        $('table').eq(1).tableExport({
                        //                            type: 'excel',
                        //                            filename: 'Profit & loss by month',
                        //                            position: 'top',
                        //                            formats: ['csv']
                        //                        });

                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        $(".pvtTable thead th:last-child").remove();
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
        /*},
 
       }   error: function () { alert("error") }
    })*/
    }
}

function ASVITD(company, project, vend, account) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;

            final = results.flat(1);

            var res = '', final1 = '', final2 = '';

            final2 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });

            final1 = final2.filter(function (array_el) {
                return account.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.G_L_Account_Name;
                }).length > 0
            });
            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }

            //            var resITD = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            //        if (data1.value.length === 0) {

            //            var strFrom = prevdateFrom.toString();
            //            var strTo = prevdateTo.toString();

            //            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
            //item.Period = "Period From " + dateFrom + " To " + dateTo;
            //                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });

            //            }
            //            else {
            //                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
            //            }
            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
            //      }
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var newT = document.getElementById('pivot');

                    $(".pvtTable tbody *").removeAttr("rowspan");
                    var table = document.getElementsByClassName('pvtTable')[0];
                    var length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        if (table.rows[line].cells[0].hasAttribute('colspan')) {
                            var x = table.rows[line].insertCell(0); //.textContent;
                            var y = table.rows[line].insertCell(1); //.textContent;
                        }
                    }
                    var tbl = document.createElement('table');
                    var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description<th>Amount</th></tr></thead><tbody>';
                    tbl.style.textAlign = 'left';
                    tbl.setAttribute('id', 'newTable');

                    table = document.getElementsByClassName('pvtTable')[0];
                    length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        //tblStr += '<tr>';
                        if (table.rows[line].cells[0].textContent === '') {
                            var rc2 = table.rows[line].cells[2].textContent;
                            var rc3 = table.rows[line].cells[3].textContent;
                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                            tblStr += '<th></th><th></th><th style="padding-right:25px">' + rc2 + '</th>';
                            tblStr += '<td>' + rc3 + '</td>';
                            tblStr += '</tr>';
                        } else {
                            var rc0 = table.rows[line].cells[0].textContent;
                            var rc1 = table.rows[line].cells[1].textContent;
                            var rc2 = table.rows[line].cells[2].textContent;
                            var rc3 = table.rows[line].cells[3].textContent;
                            tblStr += '<tr data-depth="0" class="expand1 level0"><th><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th><td></td></tr>';
                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                            tblStr += '<th  style="padding-right:25px">' + rc2 + '</th>';
                            tblStr += '<td>' + rc3 + '</td>';
                            tblStr += '</tr>';
                        }
                    }
                    tblStr += '<tr>';

                    var rc0 = table.rows[length - 1].cells[0].textContent;
                    var rc1 = table.rows[length - 1].cells[1].textContent;
                    //var rc2 = table.rows[length - 1].cells[2].textContent;
                    tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                    tblStr += '<td>' + rc1 + '</td>';
                    tblStr += '</tr>';

                    tbl.innerHTML = tblStr + '</tbody>';
                    newT.appendChild(tbl);

                    //$('#newTable tr:last').after($(".pvtTable").find("tr").last().html());
                    $('.pvtTable').remove();
                    tbl.setAttribute('class', 'pvtTable');

                    table = document.getElementById('newTable');
                    length = $('#newTable tr').length;
                    var sum1 = 0.00;
                    for (let line = length - 2; line >= 1; line--) {
                        if ($('#newTable tr').eq(line).find('td').text() === '') {
                            $('#newTable tr').eq(line).find('td').text(numberWithCommas(parseFloat(sum1).toFixed(2)));
                            $('#newTable tr').eq(line).find('td').css('font-weight', 'bold');
                            sum1 = 0.00;
                        } else {
                            sum1 = parseInt(sum1,10) + parseInt($('#newTable tr').eq(line).find('td').text().replace(/,/g, ''),10);
                            console.log(sum1);
                        }
                    }

                    $('.pvtTable').ConvertHyperlinkASV();

                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }

                    $(Header).insertBefore('.pvtTable');
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        //    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);

        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date le " + dateTo;// + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                /*$.ajax({
                    url: PrevPnLURL,
                    type: "GET", //or POST?
                    dataType: "json",
                    beforeSend: function (request) {
                        AddToHeader(request);
                    },
                    success: function (data1) {*/
                var final = data.value;//.concat(data1.value);
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );
                $.each(final, function (i, item) {
                    item.Translator = mySubString;
                });




                //                globalData = data.value;

                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });
                final = final.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                var res = '', final1 = '', final2 = '';

                final2 = final.filter(function (array_el) {
                    return project.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Global_Dimension_1_Code;
                    }).length > 0
                });
                final1 = final2.filter(function (array_el) {
                    return account.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.G_L_Account_Name;
                    }).length > 0
                });

                if (vend[0] === 'All') {
                    res = $.grep(final1, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final1.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });
                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000// && n.VLC_Shortcut_Dimension_4_Code

                    });
                }
                //                var res = $.grep(resITD, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });

                /*-                        if (data1.value.length === 0) {
                
                                            var strFrom = prevdateFrom.toString();
                                            var strTo = prevdateTo.toString();
                
                                            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                
                                            }
                                            else {
                                                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                            }
                                            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                        }*/
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                                cols: ["Period"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var newT = document.getElementById('pivot');

                        $(".pvtTable tbody *").removeAttr("rowspan");
                        var table = document.getElementsByClassName('pvtTable')[0];
                        var length = table.rows.length;
                        for (let line = 2; line < length - 1; line++) {
                            if (table.rows[line].cells[0].hasAttribute('colspan')) {
                                var x = table.rows[line].insertCell(0); //.textContent;
                                var y = table.rows[line].insertCell(1); //.textContent;
                            }
                        }
                        var tbl = document.createElement('table');
                        var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description<th>Amount</th></tr></thead><tbody>';
                        tbl.style.textAlign = 'left';
                        tbl.setAttribute('id', 'newTable');

                        table = document.getElementsByClassName('pvtTable')[0];
                        length = table.rows.length;
                        for (let line = 2; line < length - 1; line++) {
                            //tblStr += '<tr>';
                            if (table.rows[line].cells[0].textContent === '') {
                                var rc2 = table.rows[line].cells[2].textContent;
                                var rc3 = table.rows[line].cells[3].textContent;
                                tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                                tblStr += '<th></th><th></th><th  style="padding-right:25px">' + rc2 + '</th>';
                                tblStr += '<td>' + rc3 + '</td>';
                                tblStr += '</tr>';
                            } else {
                                var rc0 = table.rows[line].cells[0].textContent;
                                var rc1 = table.rows[line].cells[1].textContent;
                                var rc2 = table.rows[line].cells[2].textContent;
                                var rc3 = table.rows[line].cells[3].textContent;
                                tblStr += '<tr data-depth="0" class="expand1 level0"><th ><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th><td></td></tr>';
                                tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                                tblStr += '<th style="padding-right:25px">' + rc2 + '</th>';
                                tblStr += '<td>' + rc3 + '</td>';
                                tblStr += '</tr>';
                            }
                        }
                        tblStr += '<tr>';

                        var rc0 = table.rows[length - 1].cells[0].textContent;
                        var rc1 = table.rows[length - 1].cells[1].textContent;
                        //var rc2 = table.rows[length - 1].cells[2].textContent;
                        tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                        tblStr += '<td>' + rc1 + '</td>';
                        tblStr += '</tr>';

                        tbl.innerHTML = tblStr + '</tbody>';
                        newT.appendChild(tbl);

                        //$('#newTable tr:last').after($(".pvtTable").find("tr").last().html());
                        $('.pvtTable').remove();
                        tbl.setAttribute('class', 'pvtTable');

                        table = document.getElementById('newTable');
                        length = $('#newTable tr').length;
                        var sum1 = 0;
                        for (let line = length - 2; line >= 1; line--) {
                            if ($('#newTable tr').eq(line).find('td').text() === '') {
                                $('#newTable tr').eq(line).find('td').text(numberWithCommas(parseFloat(sum1).toFixed(2)));
                                $('#newTable tr').eq(line).find('td').css('font-weight', 'bold');
                                sum1 = 0;
                            } else {
                                sum1 = parseFloat(sum1) + parseFloat($('#newTable tr').eq(line).find('td').text().replace(/,/g, ''));
                            }
                        }

                        $('.pvtTable').ConvertHyperlinkASV();


                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
        /*},
 
       }   error: function () { alert("error") }
    })*/
    }
}

function PLCompanyYTD(company, vend) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            var CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {

                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '';
            if (vend[0] === 'All') {
                res = $.grep(final, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resYTD = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>' +
                            '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    } $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                    $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                    $('.pvtTable').switchColumns(0, 1);

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Account Number');
                    $('.pvtTable thead tr th:eq(1)').text('Account Description');
                    $('.pvtTable thead tr th:eq(2)').text('Amount');




                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlink();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                    var Ttl = $('.pvtTable tbody tr:last td:eq(0)').text();
                    var int = parseInt(Ttl, 10);
                    if (int > 0) {
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    }
                    else {

                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td> ' + Ttl + '</td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    }

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });



                    //                                $('#btnExport').css('display','block');
                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                        formats: ['csv']
                    //                    });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                /*$.ajax({
                    url: PrevPnLURL,
                    type: "GET", //or POST?
                    dataType: "json",
                    beforeSend: function (request) {
                        AddToHeader(request);
                    },
                    success: function (data1) {*/
                var final = data.value;//.concat(data1.value);
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );
                $.each(final, function (i, item) {

                    item.Translator = mySubString;
                });

                //globalData = final;

                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });
                final = final.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                var res = '';
                if (vend[0] === 'All') {
                    res = $.grep(final, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });

                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }

                //                var resYTD = $.grep(resYTD, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });


                /*-                        if (data1.value.length === 0) {
                
                                            var strFrom = prevdateFrom.toString();
                                            var strTo = prevdateTo.toString();
                
                                            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                
                                            }
                                            else {
                                                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                            }
                                            //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                        }*/
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name"],
                                cols: ["Period"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                            '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                        $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                        $('.pvtTable').switchColumns(0, 1);

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(0)').text('Account Number');
                        $('.pvtTable thead tr th:eq(1)').text('Account Description');
                        $('.pvtTable thead tr th:eq(2)').text('Amount');


                        //$(".pvtTable tbody tr:last").prev().remove();
                        $('.pvtTable').ConvertHyperlink();
                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                        var Ttl = $('.pvtTable tbody tr:last td:eq(0)').text();
                        var int = parseInt(Ttl, 10);
                        if (int > 0) {
                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        }
                        else {

                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        }



                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });

                        //$('.pvtTable tbody tr').each(function () {
                        //    if ($(this).find("td:last-child a").text() == '')
                        //        $(this).find("td:last-child a").text('-');
                        //});
                        //if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                        //    $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                        // }
                        //                                $('#btnExport').css('display','block');
                        //                        $('table').eq(1).tableExport({
                        //                            type: 'excel',
                        //                            filename: 'Profit & loss by month',
                        //                            position: 'top',
                        //                            formats: ['csv']
                        //                        });

                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
        /*},
 
        error: function () { alert("error") }
    })*/
    }
}

function PLProjectYTD(company, project, vend) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);

    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );

                    $.each(data, function (i, item) {

                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });


                    /* $.each(data, function (i, item) {
                         
                         item.Translator = $(this).url;
                     });*/
                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);
            var res = '', final1 = '';
            if (project[0] === 'All') {
                final1 = final;
            }
            else {
                final1 = final.filter(function (array_el) {
                    return project.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Global_Dimension_1_Code;
                    }).length > 0
                });
            }

            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }

            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name"],
                            cols: ["Global_Dimension_1_Code"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    } $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Account Number');
                    $('.pvtTable thead tr th:eq(1)').text('Account Description');

                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlinkProject();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                    var strrow1 = '<tr><th class="pvtTotalLabel pvtColTotalLabel">Net Operating Income (Loss)</th><th></th>>';
                    var strrow2 = '<tr><th class="pvtTotalLabel pvtColTotalLabel">Net Income (Loss)</th><th></th>';
                    var $td = $('.pvtTable tbody tr:last').find('td');
                    $td.each(function (i, ele) {

                        var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                        var int = parseInt(Ttl, 10);
                        if (int > 0) {
                            strrow1 += '<td>(' + Ttl + ')</td>';
                            strrow2 += '<td>(' + Ttl + ')</td>';
                        }
                        else {
                            strrow1 += '<td> ' + Ttl + ' </td>';
                            strrow2 += '<td> ' + Ttl + ' </td>';
                        }
                    });
                    $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });



                    /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                         $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                     }*/
                    //                                $('#btnExport').css('display','block');
                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                        formats: ['csv']
                    //                    });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CompUrl,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (result) {
                // 2. Store the results in an array
                var data = result.value;
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );

                $.each(data, function (i, item) {

                    item.Translator = mySubString;
                });
                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var final;
                final = data;
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });
                final = final.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                var res = '', final1 = '';
                if (project[0] === 'All') {
                    final1 = final;
                }
                else {
                    final1 = final.filter(function (array_el) {
                        return project.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Global_Dimension_1_Code;
                        }).length > 0
                    });
                }
                if (vend[0] === 'All') {
                    res = $.grep(final1, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final1.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });

                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                //                var resYTD = $.grep(res, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });

                //        if (data1.value.length === 0) {

                //            var strFrom = prevdateFrom.toString();
                //            var strTo = prevdateTo.toString();

                //            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                //item.Period = "Period From " + dateFrom + " To " + dateTo;
                //                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });

                //            }
                //            else {
                //                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                //            }
                //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                //      }
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name"],
                                cols: ["Global_Dimension_1_Code"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company + '</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(0)').text('Account Number');
                        $('.pvtTable thead tr th:eq(1)').text('Account Description');

                        //  $(".pvtTable tbody tr:last").prev().remove();
                        $('.pvtTable').ConvertHyperlinkProject();
                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                        var strrow1 = '<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th>';
                        var strrow2 = '<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th>';
                        var $td = $('.pvtTable tbody tr:last').find('td');
                        $td.each(function (i, ele) {

                            var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                            var int = parseInt(Ttl, 10);
                            if (int > 0) {
                                strrow1 += '<td>(' + Ttl + ')</td>';
                                strrow2 += '<td>(' + Ttl + ')</td>';
                            }
                            else {
                                strrow1 += '<td> ' + Ttl + ' </td>';
                                strrow2 += '<td> ' + Ttl + ' </td>';
                            }
                        });
                        $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });



                        /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                             $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                         }*/
                        //                                $('#btnExport').css('display','block');
                        //                        $('table').eq(1).tableExport({
                        //                            type: 'excel',
                        //                            filename: 'Profit & loss by month',
                        //                            position: 'top',
                        //                            formats: ['csv']
                        //                        });

                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });

                });
                $('#divWait').hide();
            }
        });
    }
}

function VESYTD(company, vend, project) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            var CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {

                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '', final1 = '';
            final1 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });
            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resYTD = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["Vendor_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3>Vendor Expense Summary</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    } $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                    $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                    $('.pvtTable').switchColumns(0, 1);

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                    $('.pvtTable thead tr th:eq(1)').text('Amount');

                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlinkVES();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total</th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });

                    //                                $('#btnExport').css('display','block');
                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                        formats: ['csv']
                    //                    });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $(".pvtTable thead th:last-child").remove();
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                /*$.ajax({
                    url: PrevPnLURL,
                    type: "GET", //or POST?
                    dataType: "json",
                    beforeSend: function (request) {
                        AddToHeader(request);
                    },
                    success: function (data1) {*/
                var final = data.value;//.concat(data1.value);
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );
                $.each(final, function (i, item) {

                    item.Translator = mySubString;
                });

                //               globalData = final;

                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });
                final = final.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                var res = '', final1 = '';
                final1 = final.filter(function (array_el) {
                    return project.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Global_Dimension_1_Code;
                    }).length > 0
                });
                if (vend[0] === 'All') {
                    res = $.grep(final1, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final1.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });

                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }

                //                var resYTD = $.grep(resYTD, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["Vendor_Name"],
                                cols: ["Period"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        } else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                        $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                        $('.pvtTable').switchColumns(0, 1);

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');

                        $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                        $('.pvtTable thead tr th:eq(1)').text('Amount');


                        //$(".pvtTable tbody tr:last").prev().remove();
                        $('.pvtTable').ConvertHyperlinkVES();
                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total</th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });

                        //$('.pvtTable tbody tr').each(function () {
                        //    if ($(this).find("td:last-child a").text() == '')
                        //        $(this).find("td:last-child a").text('-');
                        //});
                        //if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                        //    $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                        // }
                        //                                $('#btnExport').css('display','block');
                        //                        $('table').eq(1).tableExport({
                        //                            type: 'excel',
                        //                            filename: 'Profit & loss by month',
                        //                           position: 'top',
                        //                            formats: ['csv']
                        //                        });

                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        $(".pvtTable thead th:last-child").remove();
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
        /*},
 
        error: function () { alert("error") }
    })*/
    }
}

function ASVYTD(company, project, vend, account) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            var CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {

                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);
            var res = '', final1 = '', final2 = '';

            final2 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });
            final1 = final2.filter(function (array_el) {
                return account.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.G_L_Account_Name
                }).length > 0
            });
            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resYTD = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );

                    var newT = document.getElementById('pivot');

                    $(".pvtTable tbody *").removeAttr("rowspan");
                    var table = document.getElementsByClassName('pvtTable')[0];
                    var length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        if (table.rows[line].cells[0].hasAttribute('colspan')) {
                            var x = table.rows[line].insertCell(0); //.textContent;
                            var y = table.rows[line].insertCell(1); //.textContent;
                        }
                    }
                    var tbl = document.createElement('table');
                    var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description<th>Amount</th></tr></thead><tbody>';
                    tbl.style.textAlign = 'left';
                    tbl.setAttribute('id', 'newTable');

                    table = document.getElementsByClassName('pvtTable')[0];
                    length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        //tblStr += '<tr>';
                        if (table.rows[line].cells[0].textContent === '') {
                            var rc2 = table.rows[line].cells[2].textContent;
                            var rc3 = table.rows[line].cells[3].textContent;
                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                            tblStr += '<th></th><th></th><th style="padding-right:25px">' + rc2 + '</th>';
                            tblStr += '<td>' + rc3 + '</td>';
                            tblStr += '</tr>';
                        } else {
                            var rc0 = table.rows[line].cells[0].textContent;
                            var rc1 = table.rows[line].cells[1].textContent;
                            var rc2 = table.rows[line].cells[2].textContent;
                            var rc3 = table.rows[line].cells[3].textContent;
                            tblStr += '<tr data-depth="0" class="expand1 level0"><th ><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th><td></td></tr>';
                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                            tblStr += '<th style="padding-right:25px">' + rc2 + '</th>';
                            tblStr += '<td>' + rc3 + '</td>';
                            tblStr += '</tr>';
                        }
                    }
                    tblStr += '<tr>';

                    var rc0 = table.rows[length - 1].cells[0].textContent;
                    var rc1 = table.rows[length - 1].cells[1].textContent;
                    //var rc2 = table.rows[length - 1].cells[2].textContent;
                    tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                    tblStr += '<td>' + rc1 + '</td>';
                    tblStr += '</tr>';

                    tbl.innerHTML = tblStr + '</tbody>';
                    newT.appendChild(tbl);

                    //$('#newTable tr:last').after($(".pvtTable").find("tr").last().html());
                    $('.pvtTable').remove();
                    tbl.setAttribute('class', 'pvtTable');

                    table = document.getElementById('newTable');
                    length = $('#newTable tr').length;
                    var sum1 = 0;
                    for (let line = length - 2; line >= 1; line--) {
                        if ($('#newTable tr').eq(line).find('td').text() === '') {
                            $('#newTable tr').eq(line).find('td').text(numberWithCommas(sum1));
                            $('#newTable tr').eq(line).find('td').css('font-weight', 'bold');
                            sum1 = 0;
                        } else {
                            sum1 = parseInt(sum1, 10) + parseInt($('#newTable tr').eq(line).find('td').text().replace(/,/g, ''), 10);
                        }
                    }

                    $('.pvtTable').ConvertHyperlinkASV();

                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }

                    $(Header).insertBefore('.pvtTable');


                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel" style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');



                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                /*$.ajax({
                    url: PrevPnLURL,
                    type: "GET", //or POST?
                    dataType: "json",
                    beforeSend: function (request) {
                        AddToHeader(request);
                    },
                    success: function (data1) {*/
                var final = data.value;//.concat(data1.value);
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );
                $.each(final, function (i, item) {

                    item.Translator = mySubString;
                });

                //               globalData = final;

                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };
                var DocNo = [];
                $.each(final, function (i, item) {
                    item.G_L_Account_Name = item.G_L_Account_Name.trim();
                    if (item.Source_Code === 'CLSINCOME') {
                        if (!DocNo.includes(item.Document_No)) {
                            DocNo.push(item.Document_No);
                        }
                    }
                });
                final = final.filter(function (val) {
                    return DocNo.indexOf(val.Document_No) == -1;
                });
                var res = '', final1 = '', final2 = '';

                final2 = final.filter(function (array_el) {
                    return project.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Global_Dimension_1_Code;
                    }).length > 0
                });
                final1 = final2.filter(function (array_el) {
                    return account.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.G_L_Account_Name;
                    }).length > 0
                });
                if (vend[0] === 'All') {
                    res = $.grep(final1, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final1.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });

                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }

                //                var resYTD = $.grep(resYTD, function (n, i) {
                //                    return n.Description.indexOf("Close") < 0;
                //                });
                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                                cols: ["Period"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );


                        var newT = document.getElementById('pivot');

                        $(".pvtTable tbody *").removeAttr("rowspan");
                        var table = document.getElementsByClassName('pvtTable')[0];
                        var length = table.rows.length;
                        for (let line = 2; line < length - 1; line++) {
                            if (table.rows[line].cells[0].hasAttribute('colspan')) {
                                var x = table.rows[line].insertCell(0); //.textContent;
                                var y = table.rows[line].insertCell(1);
                            }
                        }
                        var tbl = document.createElement('table');
                        var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description<th>Amount</th></tr></thead><tbody>';
                        tbl.style.textAlign = 'left';
                        tbl.setAttribute('id', 'newTable');

                        table = document.getElementsByClassName('pvtTable')[0];
                        length = table.rows.length;
                        for (let line = 2; line < length - 1; line++) {
                            //tblStr += '<tr>';
                            if (table.rows[line].cells[0].textContent === '') {
                                var rc2 = table.rows[line].cells[2].textContent;
                                var rc3 = table.rows[line].cells[3].textContent;
                                tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                                tblStr += '<th></th><th></th><th style="padding-right:25px">' + rc2 + '</th>';
                                tblStr += '<td>' + rc3 + '</td>';
                                tblStr += '</tr>';
                            } else {
                                var rc0 = table.rows[line].cells[0].textContent;
                                var rc1 = table.rows[line].cells[1].textContent;
                                var rc2 = table.rows[line].cells[2].textContent;
                                var rc3 = table.rows[line].cells[3].textContent;
                                tblStr += '<tr data-depth="0" class="expand1 level0"><th ><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th><td></td></tr>';
                                tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                                tblStr += '<th style="padding-right:25px">' + rc2 + '</th>';
                                tblStr += '<td>' + rc3 + '</td>';
                                tblStr += '</tr>';
                            }
                        }
                        tblStr += '<tr>';

                        var rc0 = table.rows[length - 1].cells[0].textContent;
                        var rc1 = table.rows[length - 1].cells[1].textContent;
                        //var rc2 = table.rows[length - 1].cells[2].textContent;
                        tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                        tblStr += '<td>' + rc1 + '</td>';
                        tblStr += '</tr>';

                        tbl.innerHTML = tblStr + '</tbody>';
                        newT.appendChild(tbl);

                        //$('#newTable tr:last').after($(".pvtTable").find("tr").last().html());
                        $('.pvtTable').remove();
                        tbl.setAttribute('class', 'pvtTable');

                        table = document.getElementById('newTable');
                        length = $('#newTable tr').length;
                        var sum1 = 0;
                        for (let line = length - 2; line >= 1; line--) {
                            if ($('#newTable tr').eq(line).find('td').text() === '') {
                                $('#newTable tr').eq(line).find('td').text(numberWithCommas(sum1));
                                $('#newTable tr').eq(line).find('td').css('font-weight', 'bold');
                                sum1 = 0;
                            } else {
                                sum1 = parseInt(sum1, 10) + parseInt($('#newTable tr').eq(line).find('td').text().replace(/,/g, ''), 10);
                            }
                        }

                        $('.pvtTable').ConvertHyperlinkASV();


                        var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                        $(Header).insertBefore('.pvtTable');
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
        /*},
 
        error: function () { alert("error") }
    })*/
    }
}

function PLCompanyPeriod(company, vend) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '';

            if (vend[0] === 'All') {
                res = $.grep(final, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>' +
                            '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                    $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                    $('.pvtTable').switchColumns(0, 1);

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Account Number');
                    $('.pvtTable thead tr th:eq(1)').text('Account Description');
                    $('.pvtTable thead tr th:eq(2)').text('Amount');




                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlink();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                    var Ttl = $('.pvtTable tbody tr:last td:eq(0)').text();
                    var int = parseInt(Ttl, 10);
                    if (int > 0) {
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    }
                    else {

                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    }

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });


                    //                                $('#btnExport').css('display','block');
                    //                    $('table').eq(1).tableExport({
                    //                        type: 'excel',
                    //                        filename: 'Profit & loss by month',
                    //                        position: 'top',
                    //                       formats: ['csv']
                    //                   });

                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;

        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {

                if (data.value.length > 0) {
                    /*$.ajax({
                        url: PrevPnLURL,
                        type: "GET", //or POST?
                        dataType: "json",
                        beforeSend: function (request) {
                            AddToHeader(request);
                        },
                        success: function (data1) {*/
                    var final = data.value;//.concat(data1.value);
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(final, function (i, item) {

                        item.Translator = mySubString;
                    });

                    //                       globalData = final;

                    var Months = {
                        "01": "January",
                        "02": "February",
                        "03": "March",
                        "04": "April",
                        "05": "May",
                        "06": "June",
                        "07": "July",
                        "08": "August",
                        "09": "September",
                        "10": "October",
                        "11": "November",
                        "12": "December"
                    };
                    var DocNo = [];
                    $.each(final, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    final = final.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    var res = '';
                    if (vend[0] === 'All') {
                        res = $.grep(final, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    else {
                        var filteredArray = final.filter(function (array_el) {
                            return vend.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Vendor_Name;
                            }).length > 0
                        });

                        res = $.grep(filteredArray, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    //                    var resPeriod = $.grep(res, function (n, i) {
                    //                        return n.Description.indexOf("Close") < 0;
                    //                    });


                    /*-                        if (data1.value.length === 0) {
                    
                                                var strFrom = prevdateFrom.toString();
                                                var strTo = prevdateTo.toString();
                    
                                                if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                    //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                    res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                    
                                                }
                                                else {
                                                    res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                                }
                                                //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                            }*/
                    globalData = res;
                    $(function () {
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                        $(function () {
                            $("#pivot").pivot(res,
                                {
                                    rows: ["G_L_Account_No", "G_L_Account_Name"],
                                    cols: ["Period"],
                                    aggregator: sum(intFormat)(["Amount"]),
                                    colOrder: "key_z_to_a"
                                }
                            );
                            var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                                '<h3 >Profit and Loss</h3>' +
                                '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                            $(Header).insertBefore('.pvtTable');
                            $('.pvtTable thead tr').eq(1).remove();
                            $('.pvtTable thead tr th:eq(1)').remove();
                            $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                            $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                            $('.pvtTable').switchColumns(0, 1);

                            $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(0)').text('Account Number');
                            $('.pvtTable thead tr th:eq(1)').text('Account Description');
                            $('.pvtTable thead tr th:eq(2)').text('Amount');


                            //       $(".pvtTable tbody tr:last").prev().remove();
                            $('.pvtTable').ConvertHyperlink();
                            $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                            $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                            $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                            $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                            $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                            var Ttl = $('.pvtTable tbody tr:last td:eq(0)').text();
                            var int = parseInt(Ttl, 10);
                            if (int > 0) {
                                $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                                $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                                $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td>(' + Ttl + ')</td>');
                                $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            }
                            else {

                                $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                                $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                                $('.pvtTable tbody tr:last').after('<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th><td> ' + Ttl + ' </td><td class="pvtTotal colTotal" data-value="" data-for="col1"></td></tr>');
                                $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            }

                            $('.pvtTable tbody tr').each(function () {
                                $(this).find('td').each(function () {
                                    if ($(this).text().trim() === '')
                                        $(this).text('-');
                                });
                            });
                            //                                $('#btnExport').css('display','block');
                            //$('table').eq(1).tableExport({
                            //  type: 'excel',
                            //filename: 'Profit & loss by month',
                            ////                                position: 'top',
                            //                            formats: ['csv']
                            //                      });

                            //                                $('table').eq(1).tableExport({
                            //                                  type: 'pdf',
                            //                                jspdf: {
                            //                                  orientation: 'p',
                            //                                margins: { left: 20, top: 10 },
                            //                              autotable: false
                            //                        },
                            //                      formats:['pdf']
                            //                });
                            $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        });
                    });
                }
                else {
                    $("#pivot").empty();
                    var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                        '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                        '<h3 >Profit and Loss</h3>' +
                        '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                        '</div><br/><br/>' +
                        'Entries not found';
                    $("#pivot").append(Header);
                }
                $('#divWait').hide();


            },
            error: function () {
                alert("error");
            }
        });
    }
}

function PLProjectPeriod(company, project, vend) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);

    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );

                    $.each(data, function (i, item) {

                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    results.push(data);
                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            if (final.length > 0) {

                var res = '', final1 = '';
                if (project[0] === 'All') {
                    final1 = final;
                }
                else {
                    final1 = final.filter(function (array_el) {
                        return project.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Global_Dimension_1_Code;
                        }).length > 0
                    });
                }

                if (vend[0] === 'All') {
                    res = $.grep(final1, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }
                else {
                    var filteredArray = final1.filter(function (array_el) {
                        return vend.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Vendor_Name;
                        }).length > 0
                    });

                    res = $.grep(filteredArray, function (n, i) {
                        return n.G_L_Account_No >= 50000;
                    });
                }

                globalData = res;
                $(function () {
                    var sum = $.pivotUtilities.aggregatorTemplates.sum;
                    var numberFormat = $.pivotUtilities.numberFormat;
                    var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                    $(function () {
                        $("#pivot").pivot(res,
                            {
                                rows: ["G_L_Account_No", "G_L_Account_Name"],
                                cols: ["Global_Dimension_1_Code"],
                                aggregator: sum(intFormat)(["Amount"]),
                                colOrder: "key_z_to_a"
                            }
                        );
                        var Header = '';
                        if (company.length === $('#ddlCompany > option').length) {
                            Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                            if ($('#ddlProj option:not(:selected)').length == 0) {
                                Header += "<h3> All Projects </h3>";
                            }
                            else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                                const n = 3;
                                const result = new Array(Math.ceil(project.length / n))
                                    .fill()
                                    .map(_ => project.splice(0, n));

                                for (var i = 0; i < result.length; i++) {
                                    Header += '<h5>' + result[i].join('; ') + '</h5>';
                                }
                            }
                            else if ($('#ddlProj').val().length > 10) {
                                Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                            }
                            else {
                                var proj = $('#ddlProj').val();
                                Header += "<h3>" + proj[0] + " Project</h3>";
                            }
                            Header += '<h3 >Profit and Loss</h3>' +
                                '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                        }
                        else {
                            Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                            for (var i = 0; i < company.length; i++) {
                                Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                            }
                            if ($('#ddlProj option:not(:selected)').length == 0) {
                                Header += "<h3> All Projects </h3>";
                            }
                            else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                                const n = 3;
                                const result = new Array(Math.ceil(project.length / n))
                                    .fill()
                                    .map(_ => project.splice(0, n));

                                for (var i = 0; i < result.length; i++) {
                                    Header += '<h5>' + result[i].join('; ') + '</h5>';
                                }
                            }
                            else if ($('#ddlProj').val().length > 10) {
                                Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                            }
                            else {
                                var proj = $('#ddlProj').val();
                                Header += "<h3>" + proj[0] + " Project</h3>";
                            }
                            Header += '<h3 >Profit and Loss</h3>' +
                                '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                        }
                        $(Header).insertBefore('.pvtTable');
                        $('.pvtTable thead tr').eq(1).remove();
                        $('.pvtTable thead tr th:eq(1)').remove();
                        $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                        $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                        $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                        $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                        $('.pvtTable thead tr th:eq(0)').text('Account Number');
                        $('.pvtTable thead tr th:eq(1)').text('Account Description');

                        //  $(".pvtTable tbody tr:last").prev().remove();
                        $('.pvtTable').ConvertHyperlinkProject();
                        $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                        $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                        $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                        $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                        var strrow1 = '<tr><th class="pvtTotalLabel pvtColTotalLabel">Net Operating Income (Loss)</th><th></th>';
                        var strrow2 = '<tr><th class="pvtTotalLabel pvtColTotalLabel">Net Income (Loss)</th><th></th>';
                        var $td = $('.pvtTable tbody tr:last').find('td');
                        $td.each(function (i, ele) {

                            var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                            var int = parseInt(Ttl, 10);
                            if (int > 0) {
                                strrow1 += '<td>(' + Ttl + ')</td>';
                                strrow2 += '<td>(' + Ttl + ')</td>';
                            }
                            else {
                                strrow1 += '<td> ' + Ttl + ' </td>';
                                strrow2 += '<td> ' + Ttl + ' </td>';
                            }
                        });
                        $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                        $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                        $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                        $('.pvtTable tbody tr').each(function () {
                            $(this).find('td').each(function () {
                                if ($(this).text().trim() === '')
                                    $(this).text('-');
                            });
                        });



                        /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                             $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                         }
                        //                                $('#btnExport').css('display','block');
                        $('table').eq(1).tableExport({
                            type: 'excel',
                            filename: 'Profit & loss by month',
                            position: 'top',
                            formats: ['csv']
                        });
*/
                        //                                $('table').eq(1).tableExport({
                        //                                  type: 'pdf',
                        //                                jspdf: {
                        //                                  orientation: 'p',
                        //                                margins: { left: 20, top: 10 },
                        //                              autotable: false
                        //                        },
                        //                      formats:['pdf']
                        //                });
                        $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                    });
                });
            }
            else {
                $("#pivot").empty();
                var Header = '<div style="border:black solid 1.5pt;width:20%;margin-left:5%;margin-right:auto;text-align:center;">' +
                    //                            '<h2 >' + company[0] + '</h2>' +
                    '<h3 >Profit and Loss</h3>' +
                    '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                    '</div><br/><br/>' +
                    'Entries not found';
                $("#pivot").append(Header);
            }
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CompUrl,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (result) {
                // 2. Store the results in an array
                var data = result.value;
                var str = this.url;
                var mySubString = str.substring(
                    str.lastIndexOf("(") + 2,
                    str.lastIndexOf(")") - 1
                );

                $.each(data, function (i, item) {

                    item.Translator = mySubString;
                });

                /* $.each(data, function (i, item) {
                     
                     item.Translator = $(this).url;
                 });*/
                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };

                var final;
                final = data;
                if (final.length > 0) {
                    var DocNo = [];
                    $.each(final, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    final = final.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    var res = '', final1 = '';
                    if (project[0] === 'All') {
                        final1 = final;
                    }
                    else {
                        final1 = final.filter(function (array_el) {
                            return project.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Global_Dimension_1_Code;
                            }).length > 0
                        });
                    }

                    if (vend[0] === 'All') {
                        res = $.grep(final1, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    else {
                        var filteredArray = final1.filter(function (array_el) {
                            return vend.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Vendor_Name;
                            }).length > 0
                        });

                        res = $.grep(filteredArray, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }

                    //                    var resPeriod = $.grep(res, function (n, i) {
                    //                        return n.Description.indexOf("Close") < 0;
                    //                    });

                    //        if (data1.value.length === 0) {

                    //            var strFrom = prevdateFrom.toString();
                    //            var strTo = prevdateTo.toString();

                    //            if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                    //item.Period = "Period From " + dateFrom + " To " + dateTo;
                    //                res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });

                    //            }
                    //            else {
                    //                res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                    //            }
                    //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                    //      }
                    globalData = res;
                    $(function () {
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                        $(function () {
                            $("#pivot").pivot(res,
                                {
                                    rows: ["G_L_Account_No", "G_L_Account_Name"],
                                    cols: ["Global_Dimension_1_Code"],
                                    aggregator: sum(intFormat)(["Amount"]),
                                    colOrder: "key_z_to_a"
                                }
                            );
                            var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                            if ($('#ddlProj option:not(:selected)').length == 0) {
                                Header += "<h3> All Projects </h3>";
                            }
                            else if ($('#ddlProj').val().length > 1) {
                                Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                            }
                            else {
                                var proj = $('#ddlProj').val();
                                Header += "<h3>" + proj[0] + " Project</h3>";
                            }
                            Header += '<h3 >Profit and Loss</h3>' +
                                '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                            $(Header).insertBefore('.pvtTable');
                            $('.pvtTable thead tr').eq(1).remove();
                            $('.pvtTable thead tr th:eq(1)').remove();
                            $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                            $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                            $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                            $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(0)').text('Account Number');
                            $('.pvtTable thead tr th:eq(1)').text('Account Description');

                            //  $(".pvtTable tbody tr:last").prev().remove();
                            $('.pvtTable').ConvertHyperlinkProject();
                            $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total Expenses</th><th></th>');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                            $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                            $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                            $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                            $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');



                            var strrow1 = '<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income (Loss)</th><th></th>';
                            var strrow2 = '<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Income (Loss)</th><th></th>';
                            var $td = $('.pvtTable tbody tr:last').find('td');
                            $td.each(function (i, ele) {

                                var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                                var int = parseInt(Ttl, 10);
                                if (int > 0) {
                                    strrow1 += '<td>(' + Ttl + ')</td>';
                                    strrow2 += '<td>(' + Ttl + ')</td>';
                                }
                                else {
                                    strrow1 += '<td> ' + Ttl + ' </td>';
                                    strrow2 += '<td> ' + Ttl + ' </td>';
                                }
                            });
                            $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                            $('.pvtTable tbody tr').each(function () {
                                $(this).find('td').each(function () {
                                    if ($(this).text().trim() === '')
                                        $(this).text('-');
                                });
                            });



                            /* if ($('.pvtTable tbody tr:nth-last-child(1) td:last-child').text() === '-' && $('.pvtTable tbody tr:nth-last-child(2) td:last-child').text() === '-') {
                                 $('.pvtTable tbody tr:nth-last-child(3) td:last-child').text('-');
                             }
                            //                                $('#btnExport').css('display','block');
                            $('table').eq(1).tableExport({
                                type: 'excel',
                                filename: 'Profit & loss by month',
                                position: 'top',
                                formats: ['csv']
                            });
*/
                            //                                $('table').eq(1).tableExport({
                            //                                  type: 'pdf',
                            //                                jspdf: {
                            //                                  orientation: 'p',
                            //                                margins: { left: 20, top: 10 },
                            //                              autotable: false
                            //                        },
                            //                      formats:['pdf']
                            //                });
                            $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        });
                    });
                } else {
                    $("#pivot").empty();
                    var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                        '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                        '<h3 >Profit and Loss</h3>' +
                        '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                        '</div><br/><br/>' +
                        'Entries not found';
                    $("#pivot").append(Header);
                }
                $('#divWait').hide();
            }
        });
    }
}

function VESPeriod(company, vend, project) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {
            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '', final1;
            final1 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });
            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resPeriod = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["Vendor_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        } else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                    $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                    $('.pvtTable').switchColumns(0, 1);

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                    $('.pvtTable thead tr th:eq(1)').text('Amount');




                    //  $(".pvtTable tbody tr:last").prev().remove();
                    $('.pvtTable').ConvertHyperlinkVES();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total</th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                    $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                    $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });


                    //                                $('#btnExport').css('display','block');
                    /*                    $('table').eq(1).tableExport({
                                            type: 'excel',
                                            filename: 'Profit & loss by month',
                                            position: 'top',
                                            formats: ['csv']
                                        });
                    */
                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $(".pvtTable thead th:last-child").remove();
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {

                if (data.value.length > 0) {
                    /*$.ajax({
                        url: PrevPnLURL,
                        type: "GET", //or POST?
                        dataType: "json",
                        beforeSend: function (request) {
                            AddToHeader(request);
                        },
                        success: function (data1) {*/
                    var final = data.value;//.concat(data1.value);
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(final, function (i, item) {

                        item.Translator = mySubString;
                    });

                    //                    globalData = final;

                    var Months = {
                        "01": "January",
                        "02": "February",
                        "03": "March",
                        "04": "April",
                        "05": "May",
                        "06": "June",
                        "07": "July",
                        "08": "August",
                        "09": "September",
                        "10": "October",
                        "11": "November",
                        "12": "December"
                    };
                    var DocNo = [];
                    $.each(final, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    final = final.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    var res = '', final1 = '';
                    final1 = final.filter(function (array_el) {
                        return project.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Global_Dimension_1_Code;
                        }).length > 0
                    });
                    if (vend[0] === 'All') {
                        res = $.grep(final1, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    else {
                        var filteredArray = final1.filter(function (array_el) {
                            return vend.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Vendor_Name;
                            }).length > 0
                        });

                        res = $.grep(filteredArray, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    //                    var resPeriod = $.grep(res, function (n, i) {
                    //                        return n.Description.indexOf("Close") < 0;
                    //                    });


                    /*-                        if (data1.value.length === 0) {
                    
                                                var strFrom = prevdateFrom.toString();
                                                var strTo = prevdateTo.toString();
                    
                                                if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                    //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                    res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                    
                                                }
                                                else {
                                                    res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                                }
                                                //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                            }*/
                    globalData = res;
                    $(function () {
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                        $(function () {
                            $("#pivot").pivot(res,
                                {
                                    rows: ["Vendor_Name"],
                                    cols: ["Period"],
                                    aggregator: sum(intFormat)(["Amount"]),
                                    colOrder: "key_z_to_a"
                                }
                            );
                            var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                            if ($('#ddlProj option:not(:selected)').length == 0) {
                                Header += "<h3> All Projects </h3>";
                            }
                            else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                                const n = 3;
                                const result = new Array(Math.ceil(project.length / n))
                                    .fill()
                                    .map(_ => project.splice(0, n));

                                for (var i = 0; i < result.length; i++) {
                                    Header += '<h5>' + result[i].join('; ') + '</h5>';
                                }
                            }
                            else if ($('#ddlProj').val().length > 10) {
                                Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                            }
                            else {
                                var proj = $('#ddlProj').val();
                                Header += "<h3>" + proj[0] + " Project</h3>";
                            }
                            Header += '<h3 >Vendor Expense Summary</h3>' +
                                '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                            $(Header).insertBefore('.pvtTable');
                            $('.pvtTable thead tr').eq(1).remove();
                            $('.pvtTable thead tr th:eq(1)').remove();
                            $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th><th></th>');
                            $(".pvtTable th:last-child, .pvtTable td:last-child").remove();
                            $('.pvtTable').switchColumns(0, 1);

                            $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                            $('.pvtTable thead tr th:eq(1)').text('Amount');


                            //       $(".pvtTable tbody tr:last").prev().remove();
                            $('.pvtTable').ConvertHyperlinkVES();
                            $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel">Total</th>');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                            $('.pvtTable tbody tr th:first-child').removeAttr('colspan');
                            $('.pvtTable tbody tr th:first-child').removeAttr('rowspan');
                            $('.pvtTable tbody tr th:nth-child(2)').removeAttr('colspan');
                            $('.pvtTable tbody tr th:nth-child(2)').removeAttr('rowspan');

                            $('.pvtTable tbody tr').each(function () {
                                $(this).find('td').each(function () {
                                    if ($(this).text().trim() === '')
                                        $(this).text('-');
                                });
                            });
                            //                                $('#btnExport').css('display','block');
                            /*                          $('table').eq(1).tableExport({
                                                          type: 'excel',
                                                          filename: 'Profit & loss by month',
                                                          position: 'top',
                                                          formats: ['csv']
                                                      });
                          */
                            //                                $('table').eq(1).tableExport({
                            //                                  type: 'pdf',
                            //                                jspdf: {
                            //                                  orientation: 'p',
                            //                                margins: { left: 20, top: 10 },
                            //                              autotable: false
                            //                        },
                            //                      formats:['pdf']
                            //                });
                            $(".pvtTable thead th:last-child").remove();
                            $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        });
                    });
                }
                else {
                    $("#pivot").empty();
                    var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                        '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +

                        '<h3 >Vendor Expense Summary</h3>' +
                        '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                        '</div><br/><br/>' +
                        'Entries not found';
                    $("#pivot").append(Header);
                }
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
    }
}

function ASVPeriod(company, project, vend, account) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        item.Translator = mySubString;
                    });

                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '', final1 = '', final2 = '';

            final2 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });
            final1 = final2.filter(function (array_el) {
                return account.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.G_L_Account_Name;
                }).length > 0
            });
            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resPeriod = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });
            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                            cols: ["Period"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );


                    var newT = document.getElementById('pivot');

                    $(".pvtTable tbody *").removeAttr("rowspan");
                    var table = document.getElementsByClassName('pvtTable')[0];
                    var length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        if (table.rows[line].cells[0].hasAttribute('colspan')) {
                            var x = table.rows[line].insertCell(0); //.textContent;
                            var y = table.rows[line].insertCell(1);
                        }
                    }
                    var tbl = document.createElement('table');
                    var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description<th>Amount</th></tr></thead><tbody>';
                    tbl.style.textAlign = 'left';
                    tbl.setAttribute('id', 'newTable');

                    table = document.getElementsByClassName('pvtTable')[0];
                    length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        //tblStr += '<tr>';
                        if (table.rows[line].cells[0].textContent === '') {
                            var rc2 = table.rows[line].cells[2].textContent;
                            var rc3 = table.rows[line].cells[3].textContent;
                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                            tblStr += '<th></th><th></th><th style="padding-right:25px">' + rc2 + '</th>';
                            tblStr += '<td>' + rc3 + '</td>';
                            tblStr += '</tr>';
                        } else {
                            var rc0 = table.rows[line].cells[0].textContent;
                            var rc1 = table.rows[line].cells[1].textContent;
                            var rc2 = table.rows[line].cells[2].textContent;
                            var rc3 = table.rows[line].cells[3].textContent;
                            tblStr += '<tr data-depth="0" class="expand1 level0"><th ><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th><td></td></tr>';
                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                            tblStr += '<th style="padding-right:25px">' + rc2 + '</th>';
                            tblStr += '<td>' + rc3 + '</td>';
                            tblStr += '</tr>';
                        }
                    }
                    tblStr += '<tr>';

                    var rc0 = table.rows[length - 1].cells[0].textContent;
                    var rc1 = table.rows[length - 1].cells[1].textContent;
                    //var rc2 = table.rows[length - 1].cells[2].textContent;
                    tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                    tblStr += '<td>' + rc1 + '</td>';
                    tblStr += '</tr>';

                    tbl.innerHTML = tblStr + '</tbody>';
                    newT.appendChild(tbl);

                    //$('#newTable tr:last').after($(".pvtTable").find("tr").last().html());
                    $('.pvtTable').remove();
                    tbl.setAttribute('class', 'pvtTable');

                    table = document.getElementById('newTable');
                    length = $('#newTable tr').length;
                    var sum1 = 0;
                    for (let line = length - 2; line >= 1; line--) {
                        if ($('#newTable tr').eq(line).find('td').text() === '') {
                            $('#newTable tr').eq(line).find('td').text(numberWithCommas(sum1));
                            $('#newTable tr').eq(line).find('td').css('font-weight', 'bold');
                            sum1 = 0;
                        } else {
                            sum1 = parseInt(sum1, 10) + parseInt($('#newTable tr').eq(line).find('td').text().replace(/,/g, ''), 10);
                        }
                    }

                    $('.pvtTable').ConvertHyperlinkASV();

                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;

        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {

                if (data.value.length > 0) {
                    /*$.ajax({
                        url: PrevPnLURL,
                        type: "GET", //or POST?
                        dataType: "json",
                        beforeSend: function (request) {
                            AddToHeader(request);
                        },
                        success: function (data1) {*/
                    var final = data.value;//.concat(data1.value);
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(final, function (i, item) {

                        item.Translator = mySubString;
                    });

                    //                    globalData = final;

                    var Months = {
                        "01": "January",
                        "02": "February",
                        "03": "March",
                        "04": "April",
                        "05": "May",
                        "06": "June",
                        "07": "July",
                        "08": "August",
                        "09": "September",
                        "10": "October",
                        "11": "November",
                        "12": "December"
                    };
                    var
                        DocNo = [];
                    $.each(final, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    final = final.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    var res = '', final1 = '', final2 = '';

                    final2 = final.filter(function (array_el) {
                        return project.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Global_Dimension_1_Code;
                        }).length > 0
                    });
                    final1 = final2.filter(function (array_el) {
                        return account.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.G_L_Account_Name;
                        }).length > 0
                    });
                    if (vend[0] === 'All') {
                        res = $.grep(final1, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    else {
                        var filteredArray = final1.filter(function (array_el) {
                            return vend.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Vendor_Name;
                            }).length > 0
                        });

                        res = $.grep(filteredArray, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }

                    globalData = res;
                    $(function () {
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                        $(function () {
                            $("#pivot").pivot(res,
                                {
                                    rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                                    cols: ["Period"],
                                    aggregator: sum(intFormat)(["Amount"]),
                                    colOrder: "key_z_to_a"
                                }
                            );
                            var newT = document.getElementById('pivot');

                            $(".pvtTable tbody *").removeAttr("rowspan");
                            var table = document.getElementsByClassName('pvtTable')[0];
                            var length = table.rows.length;
                            for (let line = 2; line < length - 1; line++) {
                                if (table.rows[line].cells[0].hasAttribute('colspan')) {
                                    var x = table.rows[line].insertCell(0); //.textContent;
                                    var y = table.rows[line].insertCell(0);
                                }
                            }
                            var tbl = document.createElement('table');
                            var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description<th>Amount</th></tr></thead><tbody>';
                            tbl.style.textAlign = 'left';
                            tbl.setAttribute('id', 'newTable');

                            table = document.getElementsByClassName('pvtTable')[0];
                            length = table.rows.length;
                            for (let line = 2; line < length - 1; line++) {
                                //tblStr += '<tr>';
                                if (table.rows[line].cells[0].textContent === '') {
                                    var rc2 = table.rows[line].cells[2].textContent;
                                    var rc3 = table.rows[line].cells[3].textContent;
                                    tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                                    tblStr += '<th></th><th></th><th style="padding-right:25px">' + rc2 + '</th>';
                                    tblStr += '<td>' + rc3 + '</td>';
                                    tblStr += '</tr>';
                                } else {
                                    var rc0 = table.rows[line].cells[0].textContent;
                                    var rc1 = table.rows[line].cells[1].textContent;
                                    var rc2 = table.rows[line].cells[2].textContent;
                                    var rc3 = table.rows[line].cells[3].textContent;
                                    tblStr += '<tr data-depth="0" class="expand1 level0"><th ><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th><td></td></tr>';
                                    tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                                    tblStr += '<th style="padding-right:25px">' + rc2 + '</th>';
                                    tblStr += '<td>' + rc3 + '</td>';
                                    tblStr += '</tr>';
                                }
                            }
                            tblStr += '<tr>';

                            var rc0 = table.rows[length - 1].cells[0].textContent;
                            var rc1 = table.rows[length - 1].cells[1].textContent;
                            //var rc2 = table.rows[length - 1].cells[2].textContent;
                            tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                            tblStr += '<td>' + rc1 + '</td>';
                            tblStr += '</tr>';

                            tbl.innerHTML = tblStr + '</tbody>';
                            newT.appendChild(tbl);

                            //$('#newTable tr:last').after($(".pvtTable").find("tr").last().html());
                            $('.pvtTable').remove();
                            tbl.setAttribute('class', 'pvtTable');

                            table = document.getElementById('newTable');
                            length = $('#newTable tr').length;
                            var sum1 = 0;
                            for (let line = length - 2; line >= 1; line--) {
                                if ($('#newTable tr').eq(line).find('td').text() === '') {
                                    $('#newTable tr').eq(line).find('td').text(numberWithCommas(sum1));
                                    $('#newTable tr').eq(line).find('td').css('font-weight', 'bold');
                                    sum1 = 0;
                                } else {
                                    sum1 = parseInt(sum1, 10) + parseInt($('#newTable tr').eq(line).find('td').text().replace(/,/g, ''), 10);
                                }
                            }

                            $('.pvtTable').ConvertHyperlinkASV();

                            var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                            if ($('#ddlProj option:not(:selected)').length == 0) {
                                Header += "<h3> All Projects </h3>";
                            }
                            else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                                const n = 3;
                                const result = new Array(Math.ceil(project.length / n))
                                    .fill()
                                    .map(_ => project.splice(0, n));

                                for (var i = 0; i < result.length; i++) {
                                    Header += '<h5>' + result[i].join('; ') + '</h5>';
                                }
                            }
                            else if ($('#ddlProj').val().length > 10) {
                                Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                            }
                            else {
                                var proj = $('#ddlProj').val();
                                Header += "<h3>" + proj[0] + " Project</h3>";
                            }
                            Header += '<h3 >Account Summary by Vendor</h3>' +
                                '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                            $(Header).insertBefore('.pvtTable');
                            $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        });
                    });
                }
                else {
                    $("#pivot").empty();
                    var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                        '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                    if ($('#ddlProj option:not(:selected)').length == 0) {
                        Header += "<h3> All Projects </h3>";
                    }
                    else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                        const n = 3;
                        const result = new Array(Math.ceil(project.length / n))
                            .fill()
                            .map(_ => project.splice(0, n));

                        for (var i = 0; i < result.length; i++) {
                            Header += '<h5>' + result[i].join('; ') + '</h5>';
                        }
                    }
                    else if ($('#ddlProj').val().length > 10) {
                        Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                    }
                    else {
                        var proj = $('#ddlProj').val();
                        Header += "<h3>" + proj[0] + " Project</h3>";
                    }
                    Header += '<h3 >Account Summary by Vendor</h3>' +
                        '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                        '</div><br/><br/>' +
                        'Entries not found';
                    $("#pivot").append(Header);
                }
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
    }
}

function PLCompanyMonth(company, vend) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        var strDate = item.Posting_Date;
                        var year = strDate.substring(0, 4);
                        var month = strDate.substring(5, 7);
                        item.MonthYear = year + ' ' + month;
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    console.log(DocNo);
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    /* $.each(data, function (i, item) {
                         
                         item.Translator = $(this).url;
                     });*/
                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;

            final = results.flat(1);
            var res = '';
            if (vend[0] === 'All') {
                res = $.grep(final, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            globalData = res;
            //console.log(res);
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name"],
                            cols: ["MonthYear"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>' +
                            '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        Header += '<h3 >Profit and Loss</h3>' +
                            '<p>Period: ' + minDate(res) + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                    var $th = $('.pvtTable thead tr').find('th');
                    $th.each(function (i, ele) {
                        $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('rowspan');
                    });

                    $th = $('.pvtTable thead tr').find('th');
                    $th.each(function (i, ele) {
                        if (i > 1 && i < $th.length - 1) {
                            var dt = $('.pvtTable thead tr th:eq(' + i + ')').text();
                            var dtstr = dt.slice(-2);
                            var replaced = dt.slice(0, -2) + Months[dtstr];
                            var replaced1 = replaced.split(" ")[1] + " " + replaced.split(" ")[0];

                            $('.pvtTable thead tr th:eq(' + i + ')').text(replaced1);
                        }
                    });


                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Account Number');
                    $('.pvtTable thead tr th:eq(1)').text('Account Description');
                    $('.pvtTable thead tr th:eq(1)').attr('colspan', '2');


                    $('.pvtTable').ConvertHyperlinkMonth();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th></th><th class="pvtTotalLabel" colspan="2">Total Expenses</th>');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    var strrow1 = '<tr><th></th><th class="pvtTotalLabel pvtColTotalLabel" colspan="2" >Net Operating Income (Loss)</th>';
                    var strrow2 = '<tr><th></th><th class="pvtTotalLabel pvtColTotalLabel" colspan="2" >Net Income (Loss)</th>';
                    var $td = $('.pvtTable tbody tr:last').find('td');
                    $td.each(function (i, ele) {

                        var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                        var int = parseInt(Ttl, 10);
                        if (int > 0) {
                            strrow1 += '<td>(' + Ttl + ')</td>';
                            strrow2 += '<td>(' + Ttl + ')</td>';
                        }
                        else {
                            strrow1 += '<td> ' + Ttl + ' </td>';
                            strrow2 += '<td> ' + Ttl + ' </td>';
                        }
                    });
                    // if (int > 0) {
                    //}
                    $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                    $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });
                    //                                $('#btnExport').css('display','block');
                    /*                  $('table').eq(1).tableExport({
                                          type: 'excel',
                                          filename: 'Profit & loss by month',
                                          position: 'top',
                                          formats: ['csv']
                                      });
                  */
                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {

        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;

        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };

                if (data.value.length > 0) {
                    /*$.ajax({
                        url: PrevPnLURL,
                        type: "GET", //or POST?
                        dataType: "json",
                        beforeSend: function (request) {
                            AddToHeader(request);
                        },
                        success: function (data1) {*/
                    var final = data.value;//.concat(data1.value);
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(final, function (i, item) {
                        var strDate = item.Posting_Date;
                        var year = strDate.substring(0, 4);
                        var month = strDate.substring(5, 7);


                        item.MonthYear = year + ' ' + month;
                        item.Translator = mySubString;
                    });

                    var DocNo = [];
                    $.each(final, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    final = final.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    var res = '';
                    if (vend[0] === 'All') {
                        res = $.grep(final, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    else {
                        var filteredArray = final.filter(function (array_el) {
                            return vend.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Vendor_Name;
                            }).length > 0
                        });

                        res = $.grep(filteredArray, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    //                    var resMonth = $.grep(res, function (n, i) {
                    //                        return n.Description.indexOf("Close") < 0;
                    //                    });




                    /*-                        if (data1.value.length === 0) {
                    
                                                var strFrom = prevdateFrom.toString();
                                                var strTo = prevdateTo.toString();
                    
                                                if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                    //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                    res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                    
                                                }
                                                else {
                                                    res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                                }
                                                //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                            }*/

                    globalData = res;
                    $(function () {
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                        $(function () {
                            $("#pivot").pivot(res,
                                {
                                    rows: ["G_L_Account_No", "G_L_Account_Name"],
                                    cols: ["MonthYear"],
                                    aggregator: sum(intFormat)(["Amount"]),
                                    colOrder: "key_z_to_a"
                                }
                            );
                            var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                                '<h3 >Profit and Loss</h3>' +
                                '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                            $(Header).insertBefore('.pvtTable');
                            $('.pvtTable thead tr').eq(1).remove();
                            $('.pvtTable thead tr th:eq(1)').remove();
                            $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                            $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                            $('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                            var $th = $('.pvtTable thead tr').find('th');
                            $th.each(function (i, ele) {
                                $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('colspan');
                                $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('rowspan');
                            });

                            $th = $('.pvtTable thead tr').find('th');
                            $th.each(function (i, ele) {
                                if (i > 1 && i < $th.length - 1) {
                                    var dt = $('.pvtTable thead tr th:eq(' + i + ')').text();
                                    var dtstr = dt.slice(-2);
                                    var replaced = dt.slice(0, -2) + Months[dtstr];
                                    var replaced1 = replaced.split(" ")[1] + " " + replaced.split(" ")[0];

                                    $('.pvtTable thead tr th:eq(' + i + ')').text(replaced1);
                                }
                            });


                            $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(3)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(3)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(0)').text('Account Number');
                            $('.pvtTable thead tr th:eq(1)').text('Account Description');
                            $('.pvtTable thead tr th:eq(1)').attr('colspan', '2');


                            $('.pvtTable').ConvertHyperlinkMonth();
                            $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th></th><th class="pvtTotalLabel" colspan="2">Total Expenses</th>');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                            var strrow1 = '<tr><th></th><th class="pvtTotalLabel pvtColTotalLabel" colspan="2" >Net Operating Income (Loss)</th>';
                            var strrow2 = '<tr><th></th><th class="pvtTotalLabel pvtColTotalLabel" colspan="2" >Net Income (Loss)</th>';
                            var $td = $('.pvtTable tbody tr:last').find('td');
                            $td.each(function (i, ele) {

                                var Ttl = $('.pvtTable tbody tr:last td:eq(' + i + ')').text();
                                var int = parseInt(Ttl, 10);
                                if (int > 0) {
                                    strrow1 += '<td>(' + Ttl + ')</td>';
                                    strrow2 += '<td>(' + Ttl + ')</td>';
                                }
                                else {
                                    strrow1 += '<td> ' + Ttl + ' </td>';
                                    strrow2 += '<td> ' + Ttl + ' </td>';
                                }
                            });
                            // if (int > 0) {
                            //}
                            $('.pvtTable tbody tr:last').after(strrow1);//'<tr><th class="pvtTotalLabel pvtColTotalLabel" >Net Operating Income</th><th></th><td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");
                            $('.pvtTable tbody tr:last').after(strrow2);//<td><a class="tblLink" href="#" data-id="Totals"> (' + Ttl + ')</a> </td>');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                            $('.pvtTable tbody tr').each(function () {
                                $(this).find('td').each(function () {
                                    if ($(this).text().trim() === '')
                                        $(this).text('-');
                                });
                            });
                            //                                $('#btnExport').css('display','block');
                            /*                            $('table').eq(1).tableExport({
                                                            type: 'excel',
                                                            filename: 'Profit & loss by month',
                                                            position: 'top',
                                                            formats: ['csv']
                                                        });
                                                        */

                            //                                $('table').eq(1).tableExport({
                            //                                  type: 'pdf',
                            //                                jspdf: {
                            //                                  orientation: 'p',
                            //                                margins: { left: 20, top: 10 },
                            //                              autotable: false
                            //                        },
                            //                      formats:['pdf']
                            //                });
                            $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        });
                    });
                }
                else {
                    $("#pivot").empty();
                    var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                        '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                        '<h3 >Profit and Loss</h3>' +
                        '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                        '</div><br/><br/>' +
                        'Entries not found';
                    $("#pivot").append(Header);
                }
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
    }
}

function VESMonth(company, vend, project) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        var strDate = item.Posting_Date;
                        var year = strDate.substring(0, 4);
                        var month = strDate.substring(5, 7);
                        item.MonthYear = year + ' ' + month;
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    /* $.each(data, function (i, item) {
                         
                         item.Translator = $(this).url;
                     });*/
                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '', final1 = '';
            final1 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });

            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resMonth = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });

            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["Vendor_Name"],
                            cols: ["MonthYear"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Vendor Expense Summary</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('.pvtTable thead tr').eq(1).remove();
                    $('.pvtTable thead tr th:eq(1)').remove();
                    $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                    $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                    //$('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                    var $th = $('.pvtTable thead tr').find('th');
                    $th.each(function (i, ele) {
                        $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('colspan');
                        $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('rowspan');
                    });

                    $th = $('.pvtTable thead tr').find('th');
                    $th.each(function (i, ele) {
                        if (i >= 1 && i < $th.length - 1) {
                            var dt = $('.pvtTable thead tr th:eq(' + i + ')').text();
                            var dtstr = dt.slice(-2);
                            var replaced = dt.slice(0, -2) + Months[dtstr];
                            var replaced1 = replaced.split(" ")[1] + " " + replaced.split(" ")[0];

                            $('.pvtTable thead tr th:eq(' + i + ')').text(replaced1);
                        }
                    });


                    $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                    $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                    $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                    $('.pvtTable thead tr th:eq(0)').attr('colspan', '2');


                    $('.pvtTable').ConvertHyperlinkVESMonth();
                    $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel" colspan="2">Totals</th>');

                    $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                    $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");

                    $('.pvtTable tbody tr').each(function () {
                        $(this).find('td').each(function () {
                            if ($(this).text().trim() === '')
                                $(this).text('-');
                        });
                    });
                    //                                $('#btnExport').css('display','block');
                    /*                    $('table').eq(1).tableExport({
                                            type: 'excel',
                                            filename: 'Profit & loss by month',
                                            position: 'top',
                                            formats: ['csv']
                                        });
                    */
                    //                                $('table').eq(1).tableExport({
                    //                                  type: 'pdf',
                    //                                jspdf: {
                    //                                  orientation: 'p',
                    //                                margins: { left: 20, top: 10 },
                    //                              autotable: false
                    //                        },
                    //                      formats:['pdf']
                    //                });
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;

        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };

                if (data.value.length > 0) {
                    /*$.ajax({
                        url: PrevPnLURL,
                        type: "GET", //or POST?
                        dataType: "json",
                        beforeSend: function (request) {
                            AddToHeader(request);
                        },
                        success: function (data1) {*/
                    var final = data.value;//.concat(data1.value);
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(final, function (i, item) {
                        var strDate = item.Posting_Date;
                        var year = strDate.substring(0, 4);
                        var month = strDate.substring(5, 7);


                        item.MonthYear = year + ' ' + month;
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(final, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    final = final.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    }); var res = '', final1 = '';
                    final1 = final.filter(function (array_el) {
                        return project.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Global_Dimension_1_Code;
                        }).length > 0
                    });
                    if (vend[0] === 'All') {
                        res = $.grep(final1, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    else {
                        var filteredArray = final1.filter(function (array_el) {
                            return vend.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Vendor_Name;
                            }).length > 0
                        });

                        res = $.grep(filteredArray, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    //                    var resMonth = $.grep(res, function (n, i) {
                    //                        return n.Description.indexOf("Close") < 0;
                    //                    });
                    /*-                        if (data1.value.length === 0) {
                    
                                                var strFrom = prevdateFrom.toString();
                                                var strTo = prevdateTo.toString();
                    
                                                if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                    //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                    res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                    
                                                }
                                                else {
                                                    res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                                }
                                                //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                            }*/

                    globalData = res;
                    $(function () {
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                        $(function () {
                            $("#pivot").pivot(res,
                                {
                                    rows: ["Vendor_Name"],
                                    cols: ["MonthYear"],
                                    aggregator: sum(intFormat)(["Amount"]),
                                    colOrder: "key_z_to_a"
                                }
                            );
                            var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                            if ($('#ddlProj option:not(:selected)').length == 0) {
                                Header += "<h3> All Projects </h3>";
                            }
                            else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                                const n = 3;
                                const result = new Array(Math.ceil(project.length / n))
                                    .fill()
                                    .map(_ => project.splice(0, n));

                                for (var i = 0; i < result.length; i++) {
                                    Header += '<h5>' + result[i].join('; ') + '</h5>';
                                }
                            }
                            else if ($('#ddlProj').val().length > 10) {
                                Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                            }
                            else {
                                var proj = $('#ddlProj').val();
                                Header += "<h3>" + proj[0] + " Project</h3>";
                            }
                            Header += '<h3 >Vendor Expense Summary</h3>' +
                                '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                            $(Header).insertBefore('.pvtTable');
                            $('.pvtTable thead tr').eq(1).remove();
                            $('.pvtTable thead tr th:eq(1)').remove();
                            $('.pvtTable thead tr th:eq(0)').replaceWith('<th></th>');

                            $('.pvtTable thead tr th:eq(0)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(0)').removeAttr('rowspan');
                            //$('<th></th>').insertAfter($('.pvtTable thead tr th:eq(0)'));

                            var $th = $('.pvtTable thead tr').find('th');
                            $th.each(function (i, ele) {
                                $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('colspan');
                                $('.pvtTable thead tr th:eq(' + (i + 1) + ')').removeAttr('rowspan');
                            });

                            $th = $('.pvtTable thead tr').find('th');
                            $th.each(function (i, ele) {
                                if (i >= 1 && i < $th.length - 1) {
                                    var dt = $('.pvtTable thead tr th:eq(' + i + ')').text();
                                    var dtstr = dt.slice(-2);
                                    var replaced = dt.slice(0, -2) + Months[dtstr];
                                    var replaced1 = replaced.split(" ")[1] + " " + replaced.split(" ")[0];

                                    $('.pvtTable thead tr th:eq(' + i + ')').text(replaced1);
                                }
                            });


                            $('.pvtTable thead tr th:eq(1)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(1)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('colspan');
                            $('.pvtTable thead tr th:eq(2)').removeAttr('rowspan');
                            $('.pvtTable thead tr th:eq(0)').text('Vendor Description');
                            $('.pvtTable thead tr th:eq(0)').attr('colspan', '2');



                            $('.pvtTable').ConvertHyperlinkVESMonth();
                            $('.pvtTable tbody tr:last th:eq(0)').replaceWith('<th class="pvtTotalLabel" colspan="2">Totals</th>');
                            //                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('colspan');
                            $('.pvtTable tbody tr:last th:eq(0)').removeAttr('rowspan');
                            $('.pvtTable tbody tr:last').css('border-bottom', "solid black 2pt");


                            $('.pvtTable tbody tr').each(function () {
                                $(this).find('td').each(function () {
                                    if ($(this).text().trim() === '')
                                        $(this).text('-');
                                });
                            });
                            //                                $('#btnExport').css('display','block');
                            /*                           $('table').eq(1).tableExport({
                                                           type: 'excel',
                                                           filename: 'Profit & loss by month',
                                                           position: 'top',
                                                           formats: ['csv']
                                                       });
                           */
                            //                                $('table').eq(1).tableExport({
                            //                                  type: 'pdf',
                            //                                jspdf: {
                            //                                  orientation: 'p',
                            //                                margins: { left: 20, top: 10 },
                            //                              autotable: false
                            //                        },
                            //                      formats:['pdf']
                            //                });
                            $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        });
                    });
                }
                else {
                    $("#pivot").empty();
                    var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                        '<h2 style="font-size:3rem;">' + company[0] + '</h2>' +
                        '<h3 >Vendor Expense Summary</h3>' +
                        '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                        '</div><br/><br/>' +
                        'Entries not found';
                    $("#pivot").append(Header);
                }
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
    }
}

function ASVMonth(company, project, vend, account) {
    var dateTo = new Date($('#datepickerTo').val()).yyyymmdd(true);
    var dateFrom = new Date($('#datepickerFrom').val()).yyyymmdd(true);
    if (company.length > 1) {
        var i,
            results = [],
            deferred,
            deferreds = [];// 1. Make multiple AJAX calls to a Server
        for (i = 0; i < company.length; ++i) {

            CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE?$filter=G_L_Account_No ge '50000' and Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;
            //CompUrl = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[i] + "')/GLE";
            deferred = $.ajax({
                url: CompUrl,
                type: "GET", //or POST?
                dataType: "json",
                beforeSend: function (request) {
                    AddToHeader(request);
                },
                success: function (result) {
                    // 2. Store the results in an array
                    var data = result.value;
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(data, function (i, item) {
                        var strDate = item.Posting_Date;
                        var year = strDate.substring(0, 4);
                        var month = strDate.substring(5, 7);
                        item.MonthYear = year + ' ' + month;
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(data, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    data = data.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });

                    /* $.each(data, function (i, item) {
                         
                         item.Translator = $(this).url;
                     });*/
                    results.push(data);

                }
            });
            deferreds.push(deferred);
        }
        $.when.apply($, deferreds).then(function () {
            // 3. Process the result array.
            var Months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            var final;
            final = results.flat(1);

            var res = '', final1 = '', final2 = '';

            final2 = final.filter(function (array_el) {
                return project.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.Global_Dimension_1_Code;
                }).length > 0
            });
            final1 = final2.filter(function (array_el) {
                return account.filter(function (anotherOne_el) {
                    return anotherOne_el == array_el.G_L_Account_Name;
                }).length > 0
            });

            if (vend[0] === 'All') {
                res = $.grep(final1, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            else {
                var filteredArray = final1.filter(function (array_el) {
                    return vend.filter(function (anotherOne_el) {
                        return anotherOne_el == array_el.Vendor_Name;
                    }).length > 0
                });

                res = $.grep(filteredArray, function (n, i) {
                    return n.G_L_Account_No >= 50000;
                });
            }
            //            var resMonth = $.grep(res, function (n, i) {
            //                return n.Description.indexOf("Close") < 0;
            //            });

            globalData = res;
            $(function () {
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                $(function () {
                    $("#pivot").pivot(res,
                        {
                            rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                            cols: ["MonthYear"],
                            aggregator: sum(intFormat)(["Amount"]),
                            colOrder: "key_z_to_a"
                        }
                    );

                    var newT = document.getElementById('pivot');

                    $(".pvtTable tbody *").removeAttr("rowspan");
                    var table = document.getElementsByClassName('pvtTable')[0];
                    var length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        if (table.rows[line].cells[0].hasAttribute('colspan')) {
                            var x = table.rows[line].insertCell(0); //.textContent;
                            var y = table.rows[line].insertCell(1); //.textContent;
                        }
                    }
                    var tbl = document.createElement('table');
                    var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description</th>';
                    tbl.style.textAlign = 'left';
                    tbl.setAttribute('id', 'newTable');

                    var colsHead = table.rows[0].cells.length;
                    for (let j = 2; j < colsHead; j++) {
                        var rc2 = table.rows[0].cells[j].textContent;
                        if (rc2 === 'Totals') {
                            tblStr += '<th>Totals</th>';
                        } else {
                            var dtstr = rc2.slice(-2);
                            var replaced = rc2.slice(0, -2) + Months[dtstr];
                            var replaced1 = replaced.split(" ")[1] + " " + replaced.split(" ")[0];


                            //                            var dtstr = rc2.substring(0, 2);
                            //                            var replaced = rc2.replace(dtstr, Months[dtstr]);
                            tblStr += '<th>' + replaced1 + '</th>';
                        }
                    }


                    tblStr += '</tr></thead><tbody>';
                    table = document.getElementsByClassName('pvtTable')[0];
                    length = table.rows.length;
                    for (let line = 2; line < length - 1; line++) {
                        //tblStr += '<tr>';
                        if (table.rows[line].cells[0].textContent === '') {
                            var rc2 = table.rows[line].cells[2].textContent;

                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                            tblStr += '<th></th><th></th><th style="padding-right:25px">' + rc2 + '</th>';

                            var colsLength = table.rows[line].cells.length;
                            for (let j = 3; j < colsLength; j++) {
                                var rc2 = table.rows[line].cells[j].textContent;
                                if (rc2 !== '') {
                                    tblStr += '<td>' + rc2 + '</td>';
                                } else {
                                    tblStr += '<td>-</td>';
                                }
                            }
                            tblStr += '</tr>';
                        } else {
                            var rc0 = table.rows[line].cells[0].textContent;
                            var rc1 = table.rows[line].cells[1].textContent;
                            var rc2 = table.rows[line].cells[2].textContent;
                            tblStr += '<tr data-depth="0" class="expand1 level0"><th><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th>';
                            var colsLength = table.rows[line].cells.length;
                            for (let j = 3; j < colsLength; j++) {
                                tblStr += '<td></td>';
                            }
                            tblStr += '</tr>';
                            tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                            tblStr += '<th style="padding-right:25px">' + rc2 + '</th>';
                            for (let j = 3; j < colsLength; j++) {
                                var rc2 = table.rows[line].cells[j].textContent;
                                if (rc2 !== '') {
                                    tblStr += '<td>' + rc2 + '</td>';
                                } else {
                                    tblStr += '<td>-</td>';
                                }
                            }
                            tblStr += '</tr>';
                        }
                    }
                    tblStr += '<tr>';
                    var cols = table.rows[length - 1].cells.length;
                    var rc0 = table.rows[length - 1].cells[0].textContent;
                    tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                    for (let j = 1; j < cols; j++) {
                        var rcol = table.rows[length - 1].cells[j].textContent;
                        tblStr += '<td>' + rcol + '</td>';
                    }
                    tblStr += '</tr>';

                    tbl.innerHTML = tblStr + '</tbody>';
                    newT.appendChild(tbl);


                    $('.pvtTable').remove();
                    tbl.setAttribute('class', 'pvtTable');

                    table = document.getElementById('newTable');
                    length = $('#newTable tr').length;
                    var sum1 = 0;
                    var colsLength = table.rows[0].cells.length;
                    for (let col = 3; col < colsLength; col++) {
                        for (let line = length - 2; line >= 1; line--) {
                            if (table.rows[line].cells[col].textContent === '') {
                                table.rows[line].cells[col].textContent = numberWithCommas(sum1);
                                sum1 = 0;
                            } else {
                                if (table.rows[line].cells[col].textContent !== '-') {
                                    //   isHyphen = true;
                                    // } else {
                                    sum1 = parseInt(sum1, 10) + parseInt(table.rows[line].cells[col].textContent.replace(/,/g, ''), 10);
                                }
                            }
                        }
                    }

                    $('.pvtTable').ConvertHyperlinkASVMonth();
                    var Header = '';
                    if (company.length === $('#ddlCompany > option').length) {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                            '<h2 style="font-size:3rem;">3DC All Translator Companies</h2>';
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    else {
                        Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">';
                        for (var i = 0; i < company.length; i++) {
                            Header += '<h2 style="font-size:3rem;">' + company[i] + '</h2>';
                        }
                        if ($('#ddlProj option:not(:selected)').length == 0) {
                            Header += "<h3> All Projects </h3>";
                        }
                        else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                            const n = 3;
                            const result = new Array(Math.ceil(project.length / n))
                                .fill()
                                .map(_ => project.splice(0, n));

                            for (var i = 0; i < result.length; i++) {
                                Header += '<h5>' + result[i].join('; ') + '</h5>';
                            }
                        }
                        else if ($('#ddlProj').val().length > 10) {
                            Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                        }
                        else {
                            var proj = $('#ddlProj').val();
                            Header += "<h3>" + proj[0] + " Project</h3>";
                        }
                        Header += '<h3 >Account Summary by Vendor</h3>' +
                            '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                            '</div><br/><br/>';
                    }
                    $(Header).insertBefore('.pvtTable');
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                });
            });
            $('#divWait').hide();
        });
    }
    else if (company.length === 1) {
        var CurrPnLURL = "https://api.businesscentral.dynamics.com/v2.0/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/Production/ODataV4/Company('" + company[0] + "')/GLE?$filter=Posting_Date ge " + dateFrom + " and Posting_Date le " + dateTo;

        $.ajax({
            url: CurrPnLURL,
            type: "GET", //or POST?
            dataType: "json",
            beforeSend: function (request) {
                AddToHeader(request);
            },
            success: function (data) {
                var Months = {
                    "01": "January",
                    "02": "February",
                    "03": "March",
                    "04": "April",
                    "05": "May",
                    "06": "June",
                    "07": "July",
                    "08": "August",
                    "09": "September",
                    "10": "October",
                    "11": "November",
                    "12": "December"
                };

                if (data.value.length > 0) {
                    /*$.ajax({
                        url: PrevPnLURL,
                        type: "GET", //or POST?
                        dataType: "json",
                        beforeSend: function (request) {
                            AddToHeader(request);
                        },
                        success: function (data1) {*/
                    var final = data.value;//.concat(data1.value);
                    var str = this.url;
                    var mySubString = str.substring(
                        str.lastIndexOf("(") + 2,
                        str.lastIndexOf(")") - 1
                    );
                    $.each(final, function (i, item) {
                        var strDate = item.Posting_Date;
                        var year = strDate.substring(0, 4);
                        var month = strDate.substring(5, 7);


                        item.MonthYear = year + ' ' + month;
                        item.Translator = mySubString;
                    });
                    var DocNo = [];
                    $.each(final, function (i, item) {
                        item.G_L_Account_Name = item.G_L_Account_Name.trim();
                        if (item.Source_Code === 'CLSINCOME') {
                            if (!DocNo.includes(item.Document_No)) {
                                DocNo.push(item.Document_No);
                            }
                        }
                    });
                    final = final.filter(function (val) {
                        return DocNo.indexOf(val.Document_No) == -1;
                    });
                    var res = '', final1 = '', final2 = '';

                    final2 = final.filter(function (array_el) {
                        return project.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.Global_Dimension_1_Code;
                        }).length > 0
                    });
                    final1 = final2.filter(function (array_el) {
                        return account.filter(function (anotherOne_el) {
                            return anotherOne_el == array_el.G_L_Account_Name;
                        }).length > 0
                    });
                    if (vend[0] === 'All') {
                        res = $.grep(final1, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    else {
                        var filteredArray = final1.filter(function (array_el) {
                            return vend.filter(function (anotherOne_el) {
                                return anotherOne_el == array_el.Vendor_Name;
                            }).length > 0
                        });

                        res = $.grep(filteredArray, function (n, i) {
                            return n.G_L_Account_No >= 50000;
                        });
                    }
                    //                    var resMonth = $.grep(res, function (n, i) {
                    //                        return n.Description.indexOf("Close") < 0;
                    //                    });
                    /*-                        if (data1.value.length === 0) {
                    
                                                var strFrom = prevdateFrom.toString();
                                                var strTo = prevdateTo.toString();
                    
                                                if (strFrom.substring(5, 7) === strTo.substring(5, 7)) {
                                                    //item.Period = "Period From " + dateFrom + " To " + dateTo;
                                                    res.push({ "Period": Months[strFrom.substring(5, 7)] + " " + strFrom.substring(0, 4) });
                    
                                                }
                                                else {
                                                    res.push({ "Period": "From " + prevdateFrom + " To " + prevdateTo });
                                                }
                                                //res.push({ "Period": "Period From " + prevdateFrom + " To " + prevdateTo });
                                            }*/

                    globalData = res;
                    $(function () {
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({ digitsAfterDecimal: 2 });
                        $(function () {
                            $("#pivot").pivot(res,
                                {
                                    rows: ["G_L_Account_No", "G_L_Account_Name", "Vendor_Name"],
                                    cols: ["MonthYear"],
                                    aggregator: sum(intFormat)(["Amount"]),
                                    colOrder: "key_z_to_a"
                                }
                            );
                            var newT = document.getElementById('pivot');

                            $(".pvtTable tbody *").removeAttr("rowspan");
                            var table = document.getElementsByClassName('pvtTable')[0];
                            var length = table.rows.length;
                            for (let line = 2; line < length - 1; line++) {
                                if (table.rows[line].cells[0].hasAttribute('colspan')) {
                                    var x = table.rows[line].insertCell(0); //.textContent;
                                    var y = table.rows[line].insertCell(1); //.textContent;
                                }
                            }
                            var tbl = document.createElement('table');
                            var tblStr = '<thead><tr><th>Account Number</th><th>Account Description</th><th>Vendor Description</th>';
                            tbl.style.textAlign = 'left';
                            tbl.setAttribute('id', 'newTable');

                            var colsHead = table.rows[0].cells.length;
                            for (let j = 2; j < colsHead; j++) {
                                var rc2 = table.rows[0].cells[j].textContent;
                                if (rc2 === 'Totals') {
                                    tblStr += '<th>Totals</th>';
                                } else {
                                    var dtstr = rc2.slice(-2);
                                    var replaced = rc2.slice(0, -2) + Months[dtstr];
                                    var replaced1 = replaced.split(" ")[1] + " " + replaced.split(" ")[0];
                                    //                                    var dtstr = rc2.substring(0, 2);
                                    //                                    var replaced = rc2.replace(dtstr, Months[dtstr]);
                                    tblStr += '<th>' + replaced1 + '</th>';
                                }
                            }


                            tblStr += '</tr></thead><tbody>';
                            table = document.getElementsByClassName('pvtTable')[0];
                            length = table.rows.length;
                            for (let line = 2; line < length - 1; line++) {
                                //tblStr += '<tr>';
                                if (table.rows[line].cells[0].textContent === '') {
                                    var rc2 = table.rows[line].cells[2].textContent;

                                    tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none">';
                                    tblStr += '<th></th><th></th><th style="padding-right:25px">' + rc2 + '</th>';

                                    var colsLength = table.rows[line].cells.length;
                                    for (let j = 3; j < colsLength; j++) {
                                        var rc2 = table.rows[line].cells[j].textContent;
                                        if (rc2 !== '') {
                                            tblStr += '<td>' + rc2 + '</td>';
                                        } else {
                                            tblStr += '<td>-</td>';
                                        }
                                    }
                                    tblStr += '</tr>';
                                } else {
                                    var rc0 = table.rows[line].cells[0].textContent;
                                    var rc1 = table.rows[line].cells[1].textContent;
                                    var rc2 = table.rows[line].cells[2].textContent;
                                    tblStr += '<tr data-depth="0" class="expand1 level0"><th ><span class="toggle1 expand1"></span>' + rc0 + '</th><th>' + rc1 + '</th><th></th>';
                                    var colsLength = table.rows[line].cells.length;
                                    for (let j = 3; j < colsLength; j++) {
                                        tblStr += '<td></td>';
                                    }
                                    tblStr += '</tr>';
                                    tblStr += '<tr data-depth="1" class="expand1 level1" style="display:none"><th></th><th></th>';
                                    tblStr += '<th style="padding-right:25px">' + rc2 + '</th>';
                                    for (let j = 3; j < colsLength; j++) {
                                        var rc2 = table.rows[line].cells[j].textContent;
                                        if (rc2 !== '') {
                                            tblStr += '<td>' + rc2 + '</td>';
                                        } else {
                                            tblStr += '<td>-</td>';
                                        }
                                    }
                                    tblStr += '</tr>';
                                }
                            }
                            tblStr += '<tr>';
                            var cols = table.rows[length - 1].cells.length;
                            var rc0 = table.rows[length - 1].cells[0].textContent;
                            tblStr += '<th>' + rc0 + '</th><th></th><th></th>';
                            for (let j = 1; j < cols; j++) {
                                var rcol = table.rows[length - 1].cells[j].textContent;
                                tblStr += '<td>' + rcol + '</td>';
                            }
                            tblStr += '</tr>';

                            tbl.innerHTML = tblStr + '</tbody>';
                            newT.appendChild(tbl);


                            $('.pvtTable').remove();
                            tbl.setAttribute('class', 'pvtTable');

                            table = document.getElementById('newTable');
                            length = $('#newTable tr').length;
                            var sum1 = 0;
                            var colsLength = table.rows[0].cells.length;
                            for (let col = 3; col < colsLength; col++) {
                                for (let line = length - 2; line >= 1; line--) {
                                    if (table.rows[line].cells[col].textContent === '') {
                                        table.rows[line].cells[col].textContent = numberWithCommas(sum1);
                                        sum1 = 0;
                                    } else {
                                        if (table.rows[line].cells[col].textContent !== '-') {
                                            //   isHyphen = true;
                                            // } else {
                                            sum1 = parseInt(sum1, 10) + parseInt(table.rows[line].cells[col].textContent.replace(/,/g, ''), 10);
                                        }
                                    }
                                }
                            }
                            $('.pvtTable').ConvertHyperlinkASVMonth();
                            var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                                '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                            if ($('#ddlProj option:not(:selected)').length == 0) {
                                Header += "<h3> All Projects </h3>";
                            }
                            else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                                const n = 3;
                                const result = new Array(Math.ceil(project.length / n))
                                    .fill()
                                    .map(_ => project.splice(0, n));

                                for (var i = 0; i < result.length; i++) {
                                    Header += '<h5>' + result[i].join('; ') + '</h5>';
                                }
                            }
                            else if ($('#ddlProj').val().length > 10) {
                                Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                            }
                            else {
                                var proj = $('#ddlProj').val();
                                Header += "<h3>" + proj[0] + " Project</h3>";
                            }
                            Header += '<h3 >Account Summary by Vendor</h3>' +
                                '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                                '</div><br/><br/>';
                            $(Header).insertBefore('.pvtTable');
                            $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                        });
                    });
                }
                else {
                    $("#pivot").empty();
                    var Header = '<div style="border:black solid 1.5pt;width:18%;margin-left:5%;margin-right:auto;text-align:center;">' +
                        '<h2 style="font-size:3rem;">' + company[0] + '</h2>';
                    if ($('#ddlProj option:not(:selected)').length == 0) {
                        Header += "<h3> All Projects </h3>";
                    }
                    else if ($('#ddlProj').val().length > 1 && $('#ddlProj').val().length <= 10) {
                        const n = 3;
                        const result = new Array(Math.ceil(project.length / n))
                            .fill()
                            .map(_ => project.splice(0, n));

                        for (var i = 0; i < result.length; i++) {
                            Header += '<h5>' + result[i].join('; ') + '</h5>';
                        }
                    }
                    else if ($('#ddlProj').val().length > 10) {
                        Header += "<h3>" + $('#ddlProj').val().length + " Projects </h3>";
                    }
                    else {
                        var proj = $('#ddlProj').val();
                        Header += "<h3>" + proj[0] + " Project</h3>";
                    }
                    Header += '<h3 >Account Summary by Vendor</h3>' +
                        '<p>Period: ' + $('#datepickerFrom').val() + ' - ' + $('#datepickerTo').val() + '</p>' +
                        '</div><br/><br/>' +
                        'Entries not found';
                    $("#pivot").append(Header);
                    $('<caption style="caption-side:top;"><input type="button" id="btnExportexcel"   style="height:30px;font: bold 12px sans-serif; margin-left:10px;border-radius: 25px;" value="Export to Excel" /></caption>').insertBefore('.pvtTable thead');
                }
                $('#divWait').hide();
            },
            error: function () {
                alert("error");
            }
        });
    }
}

$(document).on("click", "#btnExportpdf", function () {
    var innerHtm = $(".pvtTable caption").html();
    var attrs = $(".pvtTable caption").attrib();
    $(".pvtTable caption").remove();
    var pvt = $(".pvtTable");
    html2canvas($('.pvtTable'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("Table.pdf");
        }
    });

    setTimeout(() => {
        var inhtm = "<caption ";
        for (var key in attrs) {
            inhtm += key + "='" + attrs[key] + "' ";
        }

        inhtm += '>' + innerHtm + '</caption>';
        $(inhtm).insertBefore($(".pvtTable thead"));
        $('.pvtTable caption').css('text-align', 'left');
    }, 500);

});

(function (old) {
    $.fn.attrib = function () {
        if (arguments.length === 0) {
            if (this.length === 0) {
                return null;
            }

            var obj = {};
            $.each(this[0].attributes, function () {
                if (this.specified) {
                    obj[this.name] = this.value;
                }
            });
            return obj;
        }

        return old.apply(this, arguments);
    };
})($.fn.attrib);

$.fn.ConvertHyperlink = function () {
    var $this = this,
        $tr = $this.find('tr');

    $tr.each(function (i, ele) {
        var $ele = $(ele);
        if (i < $tr.length - 1) {
            //  if ($('.pvtTable tbody tr:eq(' + i + ') th:eq(0)')[0].innerText !== 'null') {
            if ($('.pvtTable tbody tr:eq(' + i + ') td:eq(0)')[0].innerText !== "") {
                var Amnt = $('.pvtTable tbody tr:eq(' + i + ') td:eq(0)')[0].innerText
                var Acnt = $('.pvtTable tbody tr:eq(' + i + ') th:eq(0)')[0].innerText;
                $('.pvtTable tbody tr:eq(' + i + ') td:eq(0)').replaceWith('<td><a class="tblLink" href="#" data-id="' + Acnt + '"> ' + Amnt + '</a> </td>');
            }
        }
    })
}

$.fn.ConvertHyperlinkBS = function () {
    var $this = this,
        $tr = $this.find('tr');

    $tr.each(function (i, ele) {
        var $ele = $(ele);
        if (i < $tr.length - 1) {
            //  if ($('.pvtTable tbody tr:eq(' + i + ') th:eq(0)')[0].innerText !== 'null') {
            if ($('.pvtTable tbody tr:eq(' + i + ') td:eq(0)')[0].innerText !== "") {
                var Amnt = $('.pvtTable tbody tr:eq(' + i + ') td:eq(0)')[0].innerText
                var Acnt = $('.pvtTable tbody tr:eq(' + i + ') th:eq(0)')[0].innerText;
                if (Acnt === 'Total Bank Accounts' ||
                    Acnt === 'Total Other Current Assets' ||
                    Acnt === 'Total Current Assets' ||
                    Acnt === 'TOTAL ASSETS' ||
                    Acnt === 'Total Accounts Payable' ||
                    Acnt === 'Total Other Current Liabilities' ||
                    Acnt === 'Total Current Liabilities' ||
                    Acnt === 'Total Liabilities' ||
                    Acnt === 'Net Income' ||
                    Acnt === 'Total Equity' ||
                    Acnt === 'TOTAL LIABILITIES AND EQUITY') {
                    $('.pvtTable tbody tr:eq(' + i + ') td:eq(0)').replaceWith('<td style="background-color:#e6EEEE;"><a style="font-weight:bold" class="tblLinkBS" href="#" data-id="' + Acnt + '"> ' + Amnt + '</a> </td>');
                }
                else {
                    $('.pvtTable tbody tr:eq(' + i + ') td:eq(0)').replaceWith('<td style="background-color:#e6EEEE;"><a class="tblLinkBS" href="#" data-id="' + Acnt + '"> ' + Amnt + '</a> </td>');
                }
            }
        }
    })
}

$.fn.ConvertHyperlinkMonth = function () {
    var $this = this,
        $tr = $this.find('tr');

    $tr.each(function (i, ele) {
        var $ele = $(ele),
            $td = $ele.find('td');
        if (i < $tr.length) {
            $td.each(function (j, jElem) {
                if (j < $td.length) {
                    if ($('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')')[0].innerText !== "") {
                        var Amnt = $('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')')[0].innerText;
                        var Acnt = $('.pvtTable tbody tr:eq(' + (i - 1) + ') th:eq(0)')[0].innerText;
                        var mnth = $('.pvtTable thead tr:eq(0) th:eq(' + (j + 2) + ')')[0].innerText;
                        $('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')').replaceWith('<td><a class="tblLinkMonth" href="#" data-id="' + Acnt + ',' + mnth + '"> ' + Amnt + '</a> </td>');
                    }
                }
            });
        }
    })
}

$.fn.ConvertHyperlinkProject = function () {
    var $this = this,
        $tr = $this.find('tr');

    $tr.each(function (i, ele) {
        var $ele = $(ele),
            $td = $ele.find('td');
        if (i < $tr.length) {
            $td.each(function (j, jElem) {
                if (j < $td.length) {
                    if ($('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')')[0].innerText !== "") {
                        var Amnt = $('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')')[0].innerText;
                        var Acnt = $('.pvtTable tbody tr:eq(' + (i - 1) + ') th:eq(0)')[0].innerText;
                        var prj = $('.pvtTable thead tr:eq(0) th:eq(' + (j + 2) + ')')[0].innerText;
                        $('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')').replaceWith('<td><a class="tblLinkProject" href="#" data-id="' + Acnt + ',' + prj + '"> ' + Amnt + '</a> </td>');
                    }
                }
            });
        }
    })
}

$.fn.ConvertHyperlinkVES = function () {
    var $this = this,
        $tr = $this.find('tr');

    $tr.each(function (i, ele) {
        var $ele = $(ele);
        if (i < $tr.length - 1) {
            //  if ($('.pvtTable tbody tr:eq(' + i + ') th:eq(0)')[0].innerText !== 'null') {
            if ($('.pvtTable tbody tr:eq(' + i + ') td:eq(0)')[0].innerText !== "") {
                var Amnt = $('.pvtTable tbody tr:eq(' + i + ') td:eq(0)')[0].innerText;
                var Vend = '';
                if ($('.pvtTable tbody tr:eq(' + i + ') th:eq(0)')[0].innerText === '') {
                    Vend = 'blank';
                }
                else {
                    Vend = $('.pvtTable tbody tr:eq(' + i + ') th:eq(0)')[0].innerText;
                }

                $('.pvtTable tbody tr:eq(' + i + ') td:eq(0)').replaceWith('<td><a class="tblLinkVES" href="#" data-id="' + Vend + '"> ' + Amnt + '</a> </td>');
            }
        }
    })
}

$.fn.ConvertHyperlinkVESMonth = function () {
    var $this = this,
        $tr = $this.find('tr');

    $tr.each(function (i, ele) {
        var $ele = $(ele),
            $td = $ele.find('td');
        if (i < $tr.length) {
            $td.each(function (j, jElem) {
                if (j < $td.length) {
                    if ($('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')')[0].innerText !== "") {
                        var Amnt = $('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')')[0].innerText;
                        var mnth = $('.pvtTable thead tr:eq(0) th:eq(' + (j + 1) + ')')[0].innerText;
                        var Vend = '';
                        if ($('.pvtTable tbody tr:eq(' + (i - 1) + ') th:eq(0)')[0].innerText === '') {
                            Vend = 'blank';
                        }
                        else {
                            Vend = $('.pvtTable tbody tr:eq(' + (i - 1) + ') th:eq(0)')[0].innerText;
                        }
                        $('.pvtTable tbody tr:eq(' + (i - 1) + ') td:eq(' + j + ')').replaceWith('<td><a class="tblLinkVESMonth" href="#" data-id="' + Vend + ':' + mnth + '"> ' + Amnt + '</a> </td>');
                    }
                }
            });
        }
    })
}

$.fn.ConvertHyperlinkASV = function () {
    var tbl = document.getElementById('newTable');
    var rows = tbl.rows.length;
    var Accnt = '';
    for (var line = 1; line < rows; line++) {
        if (tbl.rows[line].cells[0].textContent !== '') {
            /////Account in cell 2
            tbl.rows[line].cells[3].innerHTML = '<a class="tblLinkASV" href="#" data-id="Account:' + tbl.rows[line].cells[0].textContent +
                '"> ' + tbl.rows[line].cells[3].textContent + '</a>';
            Accnt = tbl.rows[line].cells[0].textContent;
        }
        else if (tbl.rows[line].cells[2].textContent !== '') {
            tbl.rows[line].cells[3].innerHTML = '<a class="tblLinkASV" href="#" data-id="Account:' + Accnt + '~Vendor:' + tbl.rows[line].cells[2].textContent +
                '"> ' + tbl.rows[line].cells[3].textContent + '</a>';
            /////Vendor in cell 2
        }
        else if (tbl.rows[line].cells[0].textContent.trim() === '' && tbl.rows[line].cells[2].textContent.trim() === '') {
            tbl.rows[line].cells[3].innerHTML = '<a class="tblLinkASV" href="#" data-id="Account:' + Accnt + '~Vendor:blank' +
                '"> ' + tbl.rows[line].cells[3].textContent + '</a>';
        }
    }
}

$.fn.ConvertHyperlinkASVMonth = function () {
    var tbl = document.getElementById('newTable');
    var rows = tbl.rows.length;
    var Accnt = '';
    for (var line = 1; line < rows; line++) {
        for (let col = 3; col < tbl.rows[0].cells.length; col++) {
            if (tbl.rows[line].cells[0].textContent !== '') {
                /////Account in cell 2
                tbl.rows[line].cells[col].innerHTML = '<a style="font-weight:bolder" class="tblLinkASVMonth" href="#" data-id="Account:' + tbl.rows[line].cells[0].textContent +
                    '~' + tbl.rows[0].cells[col].textContent + '"> ' + tbl.rows[line].cells[col].textContent + '</a>';
                Accnt = tbl.rows[line].cells[0].textContent;
            }
            else if (tbl.rows[line].cells[2].textContent !== '') {
                tbl.rows[line].cells[col].innerHTML = '<a class="tblLinkASVMonth" href="#" data-id="Account:' + Accnt + '~Vendor:' + tbl.rows[line].cells[2].textContent +
                    '~' + tbl.rows[0].cells[col].textContent + '"> ' + tbl.rows[line].cells[col].textContent + '</a>';
                /////Vendor in cell 2
            }
            else if (tbl.rows[line].cells[0].textContent.trim() === '' && tbl.rows[line].cells[1].textContent.trim() === '') {
                tbl.rows[line].cells[col].innerHTML = '<a class="tblLinkASVMonth" href="#" data-id="Account:' + Accnt + '~Vendor:blank' +
                    '~' + tbl.rows[0].cells[col].textContent + '"> ' + tbl.rows[line].cells[col].textContent + '</a>';
            }
        }
    }
}

$.fn.switchColumns = function (col1, col2) {
    var $this = this,
        $tr = $this.find('tr');

    $tr.each(function (i, ele) {
        if (i === 0) {
            var $ele = $(ele),
                $th = $ele.find('th'),
                $tht;

            $tht = $th.eq(col1 + 2).clone();
            $th.eq(col1 + 2).html($th.eq(col2 + 2).html());
            $th.eq(col2 + 2).html($tht.html());
        }
        else {
            var $ele = $(ele),
                $td = $ele.find('td'),
                $tdt;

            $tdt = $td.eq(col1).clone();
            $td.eq(col1).html($td.eq(col2).html());
            $td.eq(col2).html($tdt.html());
        }
    });
};

$.fn.numberWithParanthesis = function () {
    var $this = this;
    var Rows = $this.rows.length;
    for (var i = 0; i < Rows; i++) {
        var Cols = $this.rows[i].cells.length;
        for (var j = 0; j < Cols; j++) {
            if ($this.rows[i].cells[j].textContent === '-0') {
                $this.rows[i].cells[j].textContent == 0;
            }
            else if ($this.rows[i].cells[j].textContent.indexOf('-') > 0 && $this.rows[i].cells[j].textContent !== '-') {
                var val = $this.rows[i].cells[j].textContent;
                $this.rows[i].cells[j].textContent = val.substring(val.lastIndexOf(":") + 1);
            }
        }
    }
}

$(document).on('click', '#btnExportexcel', function () {
    var innerHtm = $(".pvtTable caption").html();
    var attrs = $(".pvtTable caption").attrib();
    $(".pvtTable caption").remove();


    var crit = "";
    if ($('#ddlReport').val() === "PL" && $("input[name='colorRadio']:checked").val() === "Company") {
        crit += "<caption>";
        crit += "<table>";
        crit += "<tbody>";
        crit += "<tr>";
        crit += "<td>Report:</td>";
        crit += "<td>Profit and Loss - Company</td>";
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Company:</td>";
        if ($('#ddlCompany option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlCompany').val().length > 1) {
            crit += "<td>" + $('#ddlCompany').val().length + " selected </td>";
        }
        else {
            var company = $('#ddlCompany').val();
            crit += "<td>" + company[0] + " </td>";
        }
        //crit += "<td>" + $('#ddlCompany').val() + " </td>";
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Vendor:</td>";
        if ($('#ddlVendor option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlVendor').val().length > 1) {
            var vend = $('#ddlVendor').val().length
            crit += "<td>" + $('#ddlVendor').val().length + " selected </td>";
        }
        else {
            var vend = $('#ddlVendor').val()
            crit += "<td>" + vend[0] + " </td>";
        }
        //crit += "<td>" + $('#ddlVendor').val() + " </td>";
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Show as:</td>";
        crit += "<td>" + $('#ddlOutput').val() + " </td>";
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Date from:</td>";
        if ($('#datepickerFrom').val() === "Inception") {
            crit += "<td>" + minDate(globalData) + " </td>";
        }
        else {
            crit += "<td>" + $('#datepickerFrom').val() + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Date to:</td>";
        crit += "<td>" + $('#datepickerTo').val() + " </td>";
        crit += "</tr>";
        crit += "</tbody>";
        crit += "</table>";
        crit += "</caption>";

    }
    else if ($('#ddlReport').val() === "PL" && $("input[name='colorRadio']:checked").val() === "Project") {
        crit += "<caption>";
        crit += "<table>";
        crit += "<tbody>";
        crit += "<tr>";
        crit += "<td>Report:</td>";
        crit += "<td>Profit and Loss - Project</td>";
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Company:</td>";
        if ($('#ddlCompany option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlCompany').val().length > 1) {
            crit += "<td>" + $('#ddlCompany').val().length + " selected </td>";
        }
        else {
            var company = $('#ddlCompany').val();
            crit += "<td>" + company[0] + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Project:</td>";
        if ($('#ddlProj option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlProj').val().length > 1) {
            crit += "<td>" + $('#ddlProj').val().length + " selected </td>";
        }
        else {
            var proj = $('#ddlProj').val();
            crit += "<td>" + proj[0] + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Vendor:</td>";
        if ($('#ddlVendor option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlVendor').val().length === 1) {
            crit += "<td>" + $('#ddlVendor').val().length + " selected </td>";
        }
        else {
            var vendor = $('#ddlVendor').val();
            crit += "<td>" + vendor[0] + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Show as:</td>";
        crit += "<td>" + $('#ddlOutput').val() + " </td>";
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Date from:</td>";
        if ($('#datepickerFrom').val() === "Inception") {
            crit += "<td>" + minDate(globalData) + " </td>";
        }
        else {
            crit += "<td>" + $('#datepickerFrom').val() + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Date to:</td>";
        crit += "<td>" + $('#datepickerTo').val() + " </td>";
        crit += "</tr>";
        crit += "</tbody>";
        crit += "</table>";
        crit += "</caption>";

    }
    else if ($('#ddlReport').val() === "BS") {
        crit += "<caption>";
        crit += "<table>";
        crit += "<tbody>";
        crit += "<tr>";
        crit += "<td>Report:</td>";
        crit += "<td>Balance Sheet</td></tr>";
        crit += "<tr>";
        crit += "<td>Company:</td>";
        if ($('#ddlCompany option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlCompany').val().length > 1) {
            crit += "<td>" + $('#ddlCompany').val().length + " selected </td>";
        }
        else {
            var company = $('#ddlCompany').val();
            crit += "<td>" + company[0] + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Date:</td>";
        crit += "<td>" + $('#datepicker').val() + " </td>";
        crit += "</tr>";
        crit += "</tbody>";
        crit += "</table>";
        crit += "</caption>";
    }
    else if ($('#ddlReport').val() === "VES") {
        crit += "<caption>" +
            "<table>" +
            "<tbody>" +
            "<tr>" +
            "<td>Report:</td>" +
            "<td>Vendor Expense Summary</td></tr>" +
            "<tr>" +
            "<td>Company:</td>";
        if ($('#ddlCompany option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlCompany').val().length > 1) {
            crit += "<td>" + $('#ddlCompany').val().length + " selected </td>";
        }
        else {
            var company = $('#ddlCompany').val();
            crit += "<td>" + company[0] + " </td>";
        }
        crit += "</tr>" +
            "<tr>" +
            "<td>Project:</td>";
        if ($('#ddlProj option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlProj').val().length > 1) {
            crit += "<td>" + $('#ddlProj').val().length + " selected </td>";
        }
        else {
            var proj = $('#ddlProj').val();
            crit += "<td>" + proj[0] + " </td>";
        }
        crit += "</tr>" +
            "<tr>" +
            "<td>Vendor:</td>";
        if ($('#ddlVendor option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlVendor').val().length > 1) {
            crit += "<td>" + $('#ddlVendor').val().length + " selected </td>";
        }
        else {
            var vendor = $('#ddlVendor').val();
            crit += "<td>" + vendor[0] + " </td>";
        }
        crit += "</tr>" +
            "<tr>" +
            "<td>Show as:</td>" +
            "<td>" + $('#ddlOutput').val() + " </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Date from:</td>";
        if ($('#datepickerFrom').val() === "Inception") {
            crit += "<td>" + minDate(globalData) + " </td>";
        }
        else {
            crit += "<td>" + $('#datepickerFrom').val() + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Date to:</td>" +
            "<td>" + $('#datepickerTo').val() + " </td>" +
            "</tr>" +
            "</tbody>" +
            "</table>" +
            "</caption>";
    }
    else if ($('#ddlReport').val() === "ASV") {
        crit += "<caption>" +
            "<table>" +
            "<tbody>" +
            "<tr>" +
            "<td>Report:</td>" +
            "<td>Account summary by vendor</td></tr>" +
            "<tr>" +
            "<td>Company:</td>";
        if ($('#ddlCompany option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlCompany').val().length > 1) {
            crit += "<td>" + $('#ddlCompany').val().length + " selected </td>";
        }
        else {
            var company = $('#ddlCompany').val();
            crit += "<td>" + company[0] + " </td>";
        }
        //        crit += "<td>" + $('#ddlCompany').val() + " </td>" +
        crit += "</tr>" +
            "<tr>" +
            "<td>Project:</td>";
        if ($('#ddlProj option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlProj').val().length > 1) {
            crit += "<td>" + $('#ddlProj').val().length + " selected </td>";
        }
        else {
            var proj = $('#ddlProj').val();
            crit += "<td>" + proj[0] + " </td>";
        }
        crit += "</tr>" +
            "<tr>" +
            "<td>Vendor:</td>";
        if ($('#ddlVendor option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlVendor').val().length > 1) {
            crit += "<td>" + $('#ddlVendor').val().length + " selected </td>";
        }
        else {
            var vendor = $('#ddlVendor').val();
            crit += "<td>" + vendor[0] + " </td>";
        }
        //            "<td>" + $('#ddlVendor').val() + "</td>" +
        crit += "</tr>" +
            "<tr>" +
            "<td>Account:</td>"
        if ($('#ddlAccount option:not(:selected)').length == 0) {
            crit += "<td>All selected </td>";
        }
        else if ($('#ddlAccount').val().length > 1) {
            crit += "<td>" + $('#ddlAccount').val().length + " selected </td>";
        }
        else {
            var account = $('#ddlAccount').val();
            crit += "<td>" + account[0] + " </td>";
        }

        crit += "</tr>" +
            "<tr>" +
            "<td>Show as:</td>" +
            "<td>" + $('#ddlOutput').val() + " </td>" +
            "</tr>" +
            "<tr>" +
            "<td>Date from:</td>";
        if ($('#datepickerFrom').val() === "Inception") {
            crit += "<td>" + minDate(globalData) + " </td>";
        }
        else {
            crit += "<td>" + $('#datepickerFrom').val() + " </td>";
        }
        crit += "</tr>";
        crit += "<tr>";
        crit += "<td>Date to:</td>" +
            "<td>" + $('#datepickerTo').val() + " </td>" +
            "</tr>" +
            "</tbody>" +
            "</table>" +
            "</caption>";
    }
    $(crit).insertBefore($(".pvtTable thead"));
    var pvt = $(".pvtTable").html();
    console.log('<table>' + pvt + '</table>');
    $.ajax({
        url: 'https://DynamicsExport.friedmanllp.com/Home/ExportExcel',
        // headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" 
        // },
        data: { table: '<table>' + pvt + '</table>' },
        crossDomain: true,
        type: "POST",
        method: "POST",
        //        dataType: 'jsonp',
        success: function (result) {
            window.open('https://DynamicsExport.friedmanllp.com' + result, '_blank');
        }
    });





    setTimeout(() => {
        $(".pvtTable caption").remove();
        var inhtm = "<caption ";
        for (var key in attrs) {
            inhtm += key + "='" + attrs[key] + "' ";
        }

        inhtm += '>' + innerHtm + '</caption>';
        $(inhtm).insertBefore($(".pvtTable thead"));
        $('.pvtTable caption').css('text-align', 'left');
    }, 500);

});


function minDate(array) {
    var min = null;
    for (var i = 0; i < array.length; i++) {
        var current = array[i];

        if (min === null || current.Posting_Date < min.Posting_Date) {
            min = current;
        }
    }
    var str = min.Posting_Date;
    var year = str.substring(0, 4);
    var month = str.substring(5, 7);
    var date = str.substring(8, str.length);
    return month + '/' + date + '/' + year;
}

$(document).on('click', '#back', function () {
    $('#back').hide();
    $('#divDetail').hide();
    $('#pivot').show();
});

$(document).on('click', '.tblLinkBS', function () {
    var finals = globalData;
    var recordToView = $(this).attr("data-id");
    if (recordToView === 'Total Bank Accounts') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 10000 && n.G_L_Account_No < 11000;
        });
    }
    else if (recordToView === 'Total Other Current Assets') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 11000 && n.G_L_Account_No < 20000;
        });
    }
    else if (recordToView === 'Total Current Assets') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 10000 && n.G_L_Account_No < 20000;
        });
    }
    else if (recordToView === 'TOTAL ASSETS') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 10000 && n.G_L_Account_No < 20000;
        });
    }
    else if (recordToView === 'Total Accounts Payable') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 20000 && n.G_L_Account_No < 21000;
        });
    }
    else if (recordToView === 'Total Other Current Liabilities') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 21000 && n.G_L_Account_No < 30000;
        });
    }
    else if (recordToView === 'Total Current Liabilities') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 20000 && n.G_L_Account_No < 30000;
        });
    }
    else if (recordToView === 'Total Liabilities') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 20000 && n.G_L_Account_No < 30000;
        });
    }
    else if (recordToView === 'Net Income') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 50000 && n.G_L_Account_No < 90000;
        });
    }
    else if (recordToView === 'Total Equity') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 30000 && n.G_L_Account_No < 90000;
        });
    }
    else if (recordToView === 'TOTAL LIABILITIES AND EQUITY') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 20000 && n.G_L_Account_No < 90000;
        });
    }
    else {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == recordToView;
        });
    }
    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px; width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');

});

$(document).on('click', '.tblLink', function () {
    var finals = globalData;
    var recordToView = $(this).attr("data-id");
    var filter = '';
    if (recordToView === 'Totals') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 50000;
        });
    }
    else {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == recordToView;
        });
    }
    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px; width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');
});

$(document).on('click', '.tblLinkMonth', function () {
    var Months = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    };

    var finals = globalData;
    var recordToView = $(this).attr("data-id").split(",");
    var filter = '';
    if (recordToView[0] === 'Totals' && recordToView[1] === 'Totals') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 50000;
        });
    }
    else if (recordToView[0] === 'Totals' && recordToView[1] !== 'Totals') {
        var monthYear = recordToView[1].split(' ');
        var mnth = monthYear[1] + " " + Months[monthYear[0]];

        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 50000 && n.MonthYear == mnth;
        });
    }
    else if (recordToView[0] !== 'Totals' && recordToView[1] === 'Totals') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == recordToView[0];
        });
    }
    else if (recordToView[0] !== 'Totals' && recordToView[1] !== 'Totals') {
        var monthYear = recordToView[1].split(' ');
        var mnth = monthYear[1] + " " + Months[monthYear[0]];

        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == recordToView[0] && n.MonthYear == mnth;
        });
    }
    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px;width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');
});

$(document).on('click', '.tblLinkProject', function () {
    var finals = globalData;
    var recordToView = $(this).attr("data-id").split(",");

    var filter = '';
    if (recordToView[0] === 'Totals' && recordToView[1] === 'Totals') {
        //filter = $.grep(finals, function (n, i) {
        //    n.G_L_Account_No >= 50000;
        //});
        filter = finals;
    }
    else if (recordToView[0] === 'Totals' && recordToView[1] !== 'Totals') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No >= 50000 && n.Global_Dimension_1_Code == recordToView[1];
        });
    }
    else if (recordToView[0] !== 'Totals' && recordToView[1] === 'Totals') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == recordToView[0];
        });
    }
    else if (recordToView[1] !== 'Totals' && recordToView[1] !== 'Totals') {
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == recordToView[0] && n.Global_Dimension_1_Code == recordToView[1];
        });
    }

    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px;width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');
});

$(document).on('click', '.tblLinkVES', function () {
    var finals = globalData;
    var recordToView = $(this).attr("data-id");
    var filter = '';
    if (recordToView === 'Totals') {
        filter = finals;
    }
    else if (recordToView === 'blank') {
        filter = $.grep(finals, function (n, i) {
            return n.Vendor_Name === '';
        });
    }
    else {
        filter = $.grep(finals, function (n, i) {
            return n.Vendor_Name == recordToView;
        });
    }
    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px; width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');
});

$(document).on('click', '.tblLinkVESMonth', function () {
    var Months = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    };
    var finals = globalData;
    var recordToView = $(this).attr("data-id").split(":");
    var filter = '';
    if (recordToView[0] === 'Totals' && recordToView[1] === 'Totals') {
        filter = finals;
    }
    else if (recordToView[0] === 'Totals' && recordToView[1] !== 'Totals') {
        var monthYear = recordToView[1].split(' ');
        var mnth = monthYear[1] + " " + Months[monthYear[0]];

        filter = $.grep(finals, function (n, i) {
            return n.MonthYear == mnth;
        });
    }
    else if (recordToView[0] !== 'Totals' && recordToView[1] === 'Totals') {
        if (recordToView[0] === 'blank') {
            filter = $.grep(finals, function (n, i) {
                return n.Vendor_Name == '';
            });
        }
        else {
            filter = $.grep(finals, function (n, i) {
                return n.Vendor_Name == recordToView[0];
            });
        }
    }
    else if (recordToView[0] !== 'Totals' && recordToView[1] !== 'Totals') {
        var monthYear = recordToView[1].split(' ');
        var mnth = monthYear[1] + " " + Months[monthYear[0]];
        if (recordToView[0] === 'blank') {
            filter = $.grep(finals, function (n, i) {
                return n.Vendor_Name == '' && n.MonthYear == mnth;
            });
        } else {

            filter = $.grep(finals, function (n, i) {
                return n.Vendor_Name == recordToView[0] && n.MonthYear == mnth;
            });
        }
    }

    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px; width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');
});

$(document).on('click', '.tblLinkASV', function () {
    var finals = globalData;
    var dtID = $(this).attr("data-id");
    var filter = '';
    if (dtID.indexOf('Totals') !== -1) {
        filter = finals;
    }
    else if (dtID.indexOf('~Vendor:blank') !== -1) {
        var AccntVend = dtID.split('~');
        var Accnt = AccntVend[0].split(':')[1];
        //var Vend = AccntVend[1].split(':')[1];
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == Accnt && n.Vendor_Name == '';
        });
    }
    else if (dtID.indexOf('Vendor') !== -1) {
        var AccntVend = dtID.split('~');
        var Accnt = AccntVend[0].split(':')[1];
        var Vend = AccntVend[1].split(':')[1];
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == Accnt && n.Vendor_Name == Vend;
        });
    }

    else {
        var Accnt = dtID.split(':')[1];
        filter = $.grep(finals, function (n, i) {
            return n.G_L_Account_No == Accnt;
        });
    }

    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px; width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');
});

$(document).on('click', '.tblLinkASVMonth', function () {
    var Months = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    };

    var finals = globalData;
    var dtID = $(this).attr("data-id");
    var filter = '';

    if (dtID.indexOf('Totals~Totals') !== -1) {
        console.log('totals   totals')
        filter = finals;
    }
    else if (dtID.indexOf('Account:Totals') !== -1) {
        console.log("account totals")
        var monthYear = dtID.split('~')[1].split(' ');
        var mnth = monthYear[1] + " " + Months[monthYear[0]];

        filter = $.grep(finals, function (n, i) {
            return n.MonthYear == mnth;
        });
    }
    else if (dtID.indexOf('~Totals') !== -1) {
        console.log('totals')
        if (dtID.indexOf('~Vendor:blank') !== -1) {
            var AccntVend = dtID.split('~');
            var Accnt = AccntVend[0].split(':')[1];
            //var Vend = AccntVend[1].split(':')[1];
            filter = $.grep(finals, function (n, i) {
                return n.G_L_Account_No == Accnt && n.Vendor_Name == '';
            });
        }
        else if (dtID.indexOf('Vendor') !== -1) {
            var AccntVend = dtID.split('~');
            var Accnt = AccntVend[0].split(':')[1];
            var Vend = AccntVend[1].split(':')[1];
            filter = $.grep(finals, function (n, i) {
                return n.G_L_Account_No == Accnt && n.Vendor_Name == Vend;
            });
        }

        else {
            var AccntTotal = dtID.split('~');
            var Accnt = AccntTotal[0].split(':')[1];

            filter = $.grep(finals, function (n, i) {
                return n.G_L_Account_No == Accnt;
            });
        }
    }
    else {
        console.log('no toyals');
        if (dtID.indexOf('~Vendor:blank') !== -1) {
            var AccntVend = dtID.split('~');
            var Accnt = AccntVend[0].split(':')[1];
            //var Vend = AccntVend[1].split(':')[1];
            var monthYear = AccntVend[2].split(' ');
            var mnth = monthYear[1] + " " + Months[monthYear[0]];


            filter = $.grep(finals, function (n, i) {
                return n.G_L_Account_No == Accnt && n.Vendor_Name == '' && n.MonthYear == mnth;
            });
        }
        else if (dtID.indexOf('Vendor') !== -1) {
            var AccntVend = dtID.split('~');
            var Accnt = AccntVend[0].split(':')[1];
            var Vend = AccntVend[1].split(':')[1];
            var monthYear = AccntVend[2].split(' ');
            var mnth = monthYear[1] + " " + Months[monthYear[0]];


            filter = $.grep(finals, function (n, i) {
                return n.G_L_Account_No == Accnt && n.Vendor_Name == Vend && n.MonthYear == mnth;
            });
        }
        else {
            var AccntTotal = dtID.split('~');
            var Accnt = AccntTotal[0].split(':')[1];
            var monthYear = AccntTotal[1].split(' ');
            var mnth = monthYear[1] + " " + Months[monthYear[0]];

            filter = $.grep(finals, function (n, i) {
                return n.G_L_Account_No == Accnt && n.MonthYear == mnth;;
            });
        }
    }





    var str = "<table id='tblDrillDown' style='font-size: 10pt;text-align: left;border-collapse: collapse;width:100%'>";
    str += "<thead>";
    str += "<tr>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold; font-size: 10pt; padding: 5px; width:70px !important;'>Account Number</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:150px !important;'>Account Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:80px !important;'>Amount</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Posting Date</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document Type</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:120px !important;'>External Document_No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Document No</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:250px !important;'>Description</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Project</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Department</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:70px !important;'>Company</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Vendor Name</td>";
    str += "<td style='background-color: #e6EEEE;border: 1px solid #CDCDCD; font-weight:bold;font-size: 10pt; padding: 5px;width:140px !important;'>Translator Company</td>";
    str += "</tr>";
    str += "</thead>";

    $.each(filter, function (i, item) {
        str += "<tr>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_No + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.G_L_Account_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "text-align: right;'>" + numberWithCommas(item.Amount) + "</td>";
        var year = item.Posting_Date.substring(0, 4);
        var month = item.Posting_Date.substring(5, 7);
        var day = item.Posting_Date.substring(8, 10);

        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + month + '/' + day + '/' + year + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Document_Type + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.External_Document_No + "</td>";
        if (item.Translator.indexOf('&') !== -1) {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator.replace('&', '%26') + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27'>" + item.Document_No + "</a></td>";
        } else {
            str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
                ";'><a  target='_blank' href='https://businesscentral.dynamics.com/1a9533fb-c524-4eb7-96c8-fbdc362ac6a0/PRODUCTION?company=" + item.Translator + "&page=20&filter=%27G%2fL%20Entry%27.%27Document%20No.%27%20IS%20%27" + item.Document_No + "%27%20AND%20%27G%2fL%20Entry%27.%27Posting%20Date%27%20IS%20%27" + month + '%2f' + day + '%2f' + year + "%27' >" + item.Document_No + "</a></td>";
        }
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Description + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_1_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Global_Dimension_2_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.VLC_Shortcut_Dimension_3_Code + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Vendor_Name + "</td>";
        str += "<td style='color: #3D3D3D;padding: 5px;background-color: #FFF;border: 1px solid #CDCDCD;vertical-align: top;" +
            "'>" + item.Translator + "</td>";
        str += "</tr>";
    });
    str += '</table>';
    $('#pivot').hide();
    $('#back').show();
    $('#divDetail').show();
    $('#divDetail').html(str);
    $('#tblDrillDown').DataTable({
        "pageLength": 50
    });
    $('#tblDrillDown_wrapper').css('width', '50%');
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(document).on('click', '.toggle1', function () {
    //Gets all <tr>'s  of greater depth
    //below element in the table
    var findChildren = function (tr) {
        var depth = tr.data('depth');
        return tr.nextUntil($('tr').filter(function () {
            return $(this).data('depth') <= depth;
        }));
    };

    var el = $(this);
    var tr = el.closest('tr'); //Get <tr> parent of toggle button
    var children = findChildren(tr);

    //Remove already collapsed nodes from children so that we don't
    //make them visible. 
    //(Confused? Remove this code and close Item 2, close Item 1 
    //then open Item 1 again, then you will understand)
    var subnodes = children.filter('.expand1');
    subnodes.each(function () {
        var subnode = $(this);
        var subnodeChildren = findChildren(subnode);
        children = children.not(subnodeChildren);
    });

    //Change icon and hide/show children
    if (tr.hasClass('collapse1')) {
        tr.removeClass('collapse1').addClass('expand1');
        children.hide();
    } else {
        tr.removeClass('expand1').addClass('collapse1');
        children.show();
    }
    return children;
});