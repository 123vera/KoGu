import ExportJsonExcel from 'js-export-excel'
import React, { useEffect } from 'react'

function ExportExcel() {

    const download = () => {
        var option = {};
        option.fileName = "excel";
        option.datas = [
            {
                sheetData: [
                    { one: "一行一列", two: "一行二列" },
                    { one: "二行一列", two: "二行二列" },
                ],
                sheetName: "sheet",
                sheetFilter: ["two", "one"],
                sheetHeader: ["第一列", "第二列"],
                columnWidths: [20, 20],
            },
            {
                sheetData: [
                    { one: "一行一列", two: "一行二列" },
                    { one: "二行一列", two: "二行二列" },
                ],
            },
        ];

        var toExcel = new ExportJsonExcel(option); //new
        toExcel.saveExcel()
    }


    return (
        <div onClick={ download }> 导出excel文件</div>
    )
}

export default ExportExcel