var data = {};
var setting = {
    view: {
        selectedMulti: false,
        dblClickExpand: dblClickExpand
    },
    edit: {
        drag: {
            autoExpandTrigger: true,
            prev: dropPrev,
            inner: dropInner,
            next: dropNext
        },
        enable: true,
        showRemoveBtn: false,
        showRenameBtn: false
    },
    data: {
        keep: {
            parent: true,
            leaf: true
        },
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeDrag: beforeDrag,
        beforeRemove: beforeRemove,
        beforeRename: beforeRename,
        onRemove: onRemove,
        beforeDrop: beforeDrop,
        beforeDragOpen: beforeDragOpen,
        onDrag: onDrag,
        onDrop: onDrop,
        onExpand: onExpand,
        onClick: onClick,
        onRightClick: OnRightClick,
        beforeClick: beforeClickSave
    }
};

var zNodes1 = [
    {
        "id":1,
        "pId":null,
        "name":"纸张与文档",
        "ename":"Page",
        "open":true,
        "pageSize":"A4",
        "pageRotate":"vertical",
        "marginRight":"16",
        "marginLeft":"16",
        "marginTop":"16",
        "marginBottom":"16",
        "level":0,
        "children":[
            {
                "id":11,
                "pId":1,
                "name":"表格",
                "level":1,
                "ename":"Table",
                "open":true,
                "colsRadioArr":[
                    1
                ],
                "numCols":1,
                "widthRadio":100,
                "children":[
                    {
                        "id":111,
                        "pId":11,
                        "name":"单元格",
                        "ename":"Cell",
                        "open":true,
                        "colSpan":1,
                        "rowSpan":1,
                        "level":2,
                        "rotation":0,
                        "paddingLeft":0,
                        "paddingTop":0,
                        "paddingRight":0,
                        "paddingBottom":0,
                        "borderWidthLeft":1,
                        "borderWidthRight":1,
                        "borderWidthTop":1,
                        "borderWidthBottom":1,
                        "horizontalAlignment":"1",
                        "verticalAlignment":"5",
                        "children":[
                            {
                                "id":1111,
                                "pId":111,
                                "name":"段落",
                                "ename":"Paragraph",
                                "level":3,
                                "isParent":true,
                                "open":true,
                                "children":[
                                    {
                                        "id":11111,
                                        "pId":1111,
                                        "name":"块",
                                        "level":4,
                                        "text":"I AM HEAR",
                                        "ename":"Chunk",
                                        "isParent":false,
                                        "tId":"treeDemo_5",
                                        "parentTId":"treeDemo_4",
                                        "open":false,
                                        "zAsync":true,
                                        "isFirstNode":true,
                                        "isLastNode":true,
                                        "isAjaxing":false,
                                        "checked":false,
                                        "checkedOld":false,
                                        "nocheck":false,
                                        "chkDisabled":false,
                                        "halfCheck":false,
                                        "check_Child_State":-1,
                                        "check_Focus":false,
                                        "isHover":false,
                                        "editNameFlag":false,
                                        "parameter":"{}",
                                        "fontBase":"",
                                        "fontSize":9,
                                        "fontStyle":0
                                    }
                                ],
                                "tId":"treeDemo_4",
                                "parentTId":"treeDemo_3",
                                "zAsync":true,
                                "isFirstNode":true,
                                "isLastNode":true,
                                "isAjaxing":false,
                                "checked":false,
                                "checkedOld":false,
                                "nocheck":false,
                                "chkDisabled":false,
                                "halfCheck":false,
                                "check_Child_State":0,
                                "check_Focus":false,
                                "isHover":false,
                                "editNameFlag":false
                            }
                        ],
                        "tId":"treeDemo_3",
                        "parentTId":"treeDemo_2",
                        "isParent":true,
                        "zAsync":true,
                        "isFirstNode":true,
                        "isLastNode":true,
                        "isAjaxing":false,
                        "checked":false,
                        "checkedOld":false,
                        "nocheck":false,
                        "chkDisabled":false,
                        "halfCheck":false,
                        "check_Child_State":0,
                        "check_Focus":false,
                        "isHover":true,
                        "editNameFlag":false,
                        "cellHeight":15,
                        "fontSize":null,
                        "fontStyle":null
                    }
                ],
                "tId":"treeDemo_2",
                "parentTId":"treeDemo_1",
                "isParent":true,
                "zAsync":true,
                "isFirstNode":true,
                "isLastNode":true,
                "isAjaxing":false,
                "checked":false,
                "checkedOld":false,
                "nocheck":false,
                "chkDisabled":false,
                "halfCheck":false,
                "check_Child_State":0,
                "check_Focus":false,
                "isHover":false,
                "editNameFlag":false,
                "colSpan":null,
                "rowSpan":null,
                "rotation":null,
                "cellHeight":null,
                "paddingLeft":null,
                "paddingRight":null,
                "paddingTop":null,
                "paddingBottom":null,
                "borderWidthLeft":null,
                "borderWidthRight":null,
                "borderWidthTop":null,
                "borderWidthBottom":null,
                "fontSize":null,
                "fontStyle":null
            }
        ],
        "tId":"treeDemo_1",
        "parentTId":null,
        "isParent":true,
        "zAsync":true,
        "isFirstNode":true,
        "isLastNode":true,
        "isAjaxing":false,
        "checked":false,
        "checkedOld":false,
        "nocheck":false,
        "chkDisabled":false,
        "halfCheck":false,
        "check_Child_State":0,
        "check_Focus":false,
        "isHover":false,
        "editNameFlag":false,
        "numCols":null,
        "colsRadioArr":Array[0],
        "widthRadio":null,
        "colSpan":null,
        "rowSpan":null,
        "rotation":null,
        "cellHeight":null,
        "paddingLeft":null,
        "paddingRight":null,
        "paddingTop":null,
        "paddingBottom":null,
        "borderWidthLeft":null,
        "borderWidthRight":null,
        "borderWidthTop":null,
        "borderWidthBottom":null,
        "fontSize":null,
        "fontStyle":null
    }];
var zNodes3 = [
    {
        id: 1,
        pId: 0,
        name: "纸张与文档",
        ename: "Page",
        open: true,
        pageSize: "A4",
        pageRotate: "vertical",
        marginRight: "16",
        marginLeft: "16",
        marginTop: "16",
        marginBottom: "16",
        level: 0,
        children: [{
            id: 11,
            pId: 10,
            name: "表格",
            level: 1,
            ename: "Table",
            open: true,
            colsRadioArr: [1],
            numCols: 1,
            widthRadio: 100,
            children: [{
                id: 111,
                pId: 110,
                name: "单元格",
                ename: "Cell",
                open: true,
                colSpan: 1,
                rowSpan: 1,
                level: 2,
                rotation: 0,
                paddingLeft: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                borderWidthLeft: 0,
                borderWidthRight: 0,
                borderWidthTop: 0,
                borderWidthBottom: 0,
                horizontalAlignment: 0,
                verticalAlignment: 0,
                children: [{
                    id: 1111,
                    pId: 1110,
                    name: "段落",
                    ename: "Paragraph",
                    level: 4,
                    isParent: true,
                    open: true,
                    children: [{
                        id: 11111,
                        pId: 11110,
                        name: "块",
                        level: 5,
                        text: "I AM HEAR",
                        ename: "Chunk",
                        isParent: false
                    }]
                }]
            }]
        },]
    }

];

var zNodes = zNodes1;
var zNodesTemp = zNodes1;
var log, className = "dark";

/**
 * 双击展开
 * @param treeId
 * @param treeNode
 * @returns {boolean}
 */
function dblClickExpand(treeId, treeNode) {
    return treeNode.level > 0;
}

function beforeDrag(treeId, treeNodes) {
    return false;
}

/**
 * 删除前
 * @param treeId
 * @param treeNode
 * @returns {boolean}
 */
function beforeRemove(treeId, treeNode) {
    className = (className === "dark" ? "" : "dark");
    showLog("[ " + getTime() + " beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
    return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
}

/**
 * 删除时
 * @param e
 * @param treeId
 * @param treeNode
 */
function onRemove(e, treeId, treeNode) {
    showLog("[ " + getTime() + " onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
}

/**
 * 重命名前
 * @param treeId
 * @param treeNode
 * @param newName
 * @returns {boolean}
 */
function beforeRename(treeId, treeNode, newName) {
    if (newName.length == 0) {
        alert("节点名称不能为空.");
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        setTimeout(function () {
            zTree.editName(treeNode)
        }, 10);
        return false;
    }
    return true;
}

function OnRightClick(event, treeId, treeNode) {
    if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
        zTree.cancelSelectedNode();
        showRMenu("root", event.clientX, event.clientY);
    } else if (treeNode && !treeNode.noR) {
        zTree.selectNode(treeNode);
        showRMenu("node", event.clientX, event.clientY);
    }
}

function showRMenu(type, x, y) {
    $("#rMenu ul").show();
    if (type == "root") {
        $("#m_del").hide();
        $("#m_check").hide();
        $("#m_unCheck").hide();
    } else {
        $("#m_del").show();
        $("#m_check").show();
        $("#m_unCheck").show();
    }

    y += document.body.scrollTop;
    x += document.body.scrollLeft;
    rMenu.css({"top": y + "px", "left": x + "px", "visibility": "visible"});

    $("body").bind("mousedown", onBodyMouseDown);
}

function hideRMenu() {
    if (rMenu) rMenu.css({"visibility": "hidden"});
    $("body").unbind("mousedown", onBodyMouseDown);
}

function showLog(str) {
    if (!log) log = $("#log");
    log.append("<li class='" + className + "'>" + str + "</li>");
    if (log.children("li").length > 8) {
        log.get(0).removeChild(log.children("li")[0]);
    }
}

function onBodyMouseDown(event) {
    if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length > 0)) {
        rMenu.css({"visibility": "hidden"});
    }
}

function getTime() {
    var now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds(),
        ms = now.getMilliseconds();
    return (h + ":" + m + ":" + s + " " + ms);
}

var newCount = 1;

function add(e) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        isParent = e.data.isParent,
        name = e.data.name,
        ename = e.data.ename,
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (treeNode) {
        treeNode = zTree.addNodes(treeNode, {
            id: (100 + newCount),
            pId: treeNode.id,
            isParent: isParent,
            name: name,
            ename: ename
        });
    } else {
        treeNode = zTree.addNodes(null, {id: (100 + newCount), pId: 0, isParent: isParent, name: name});
    }
    if (treeNode) {
        zTree.editName(treeNode[0]);
    } else {
        alert("叶子节点被锁定，无法增加子节点");
    }
    zNodes = zTree.transformToArray(zTree.getNodes());
};

function edit() {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0) {
        alert("请先选择一个节点");
        return;
    }
    zTree.editName(treeNode);
};

function remove(e) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0) {
        alert("请先选择一个节点");
        return;
    }
    var callbackFlag = $("#callbackTrigger").attr("checked");
    zTree.removeNode(treeNode, callbackFlag);
};

function clearChildren(e) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        treeNode = nodes[0];
    if (nodes.length == 0 || !nodes[0].isParent) {
        alert("请先选择一个父节点");
        return;
    }
    zTree.removeChildNodes(treeNode);
};

function dropPrev(treeId, nodes, targetNode) {
    var pNode = targetNode.getParentNode();
    if (pNode && pNode.dropInner === false) {
        return false;
    } else {
        for (var i = 0, l = curDragNodes.length; i < l; i++) {
            var curPNode = curDragNodes[i].getParentNode();
            if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                return false;
            }
        }
    }
    return true;
}

function dropInner(treeId, nodes, targetNode) {
    if (targetNode && targetNode.dropInner === false) {
        return false;
    } else {
        for (var i = 0, l = curDragNodes.length; i < l; i++) {
            if (!targetNode && curDragNodes[i].dropRoot === false) {
                return false;
            } else if (curDragNodes[i].parentTId && curDragNodes[i].getParentNode() !== targetNode && curDragNodes[i].getParentNode().childOuter === false) {
                return false;
            }
        }
    }
    return true;
}

function dropNext(treeId, nodes, targetNode) {
    var pNode = targetNode.getParentNode();
    if (pNode && pNode.dropInner === false) {
        return false;
    } else {
        for (var i = 0, l = curDragNodes.length; i < l; i++) {
            var curPNode = curDragNodes[i].getParentNode();
            if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
                return false;
            }
        }
    }
    return true;
}

var log, className = "dark", curDragNodes, autoExpandNode;

function beforeDrag(treeId, treeNodes) {
    className = (className === "dark" ? "" : "dark");
    showLog("[ " + getTime() + " beforeDrag ]&nbsp;&nbsp;&nbsp;&nbsp; drag: " + treeNodes.length + " nodes.");
    for (var i = 0, l = treeNodes.length; i < l; i++) {
        if (treeNodes[i].drag === false) {
            curDragNodes = null;
            return false;
        } else if (treeNodes[i].parentTId && treeNodes[i].getParentNode().childDrag === false) {
            curDragNodes = null;
            return false;
        }
    }
    curDragNodes = treeNodes;
    return true;
}

function beforeDragOpen(treeId, treeNode) {
    autoExpandNode = treeNode;
    return true;
}

function beforeDrop(treeId, treeNodes, targetNode, moveType, isCopy) {
    className = (className === "dark" ? "" : "dark");
    showLog("[ " + getTime() + " beforeDrop ]&nbsp;&nbsp;&nbsp;&nbsp; moveType:" + moveType);
    showLog("target: " + (targetNode ? targetNode.name : "root") + "  -- is " + (isCopy == null ? "cancel" : isCopy ? "copy" : "move"));
    return true;
}

function onDrag(event, treeId, treeNodes) {
    className = (className === "dark" ? "" : "dark");
    showLog("[ " + getTime() + " onDrag ]&nbsp;&nbsp;&nbsp;&nbsp; drag: " + treeNodes.length + " nodes.");
}

function onDrop(event, treeId, treeNodes, targetNode, moveType, isCopy) {
    className = (className === "dark" ? "" : "dark");
    showLog("[ " + getTime() + " onDrop ]&nbsp;&nbsp;&nbsp;&nbsp; moveType:" + moveType);
    showLog("target: " + (targetNode ? targetNode.name : "root") + "  -- is " + (isCopy == null ? "cancel" : isCopy ? "copy" : "move"))
}

function onExpand(event, treeId, treeNode) {
    if (treeNode === autoExpandNode) {
        className = (className === "dark" ? "" : "dark");
        showLog("[ " + getTime() + " onExpand ]&nbsp;&nbsp;&nbsp;&nbsp;" + treeNode.name);
    }
}

function showProperties(ename, tNode) {
    var pageSettings;
    pageSettings = getSettingHtml(ename, tNode)
    $("#properties").html(pageSettings);
    switch (ename) {
        case "Table":
            tableAction(tNode);
            break;
        case "Cell":
            cellAction(tNode);
            break;
        case "Image":
            break;
        case "Paragraph":
            break;
        case "Page":
            pageAction(tNode);
            break;
        case "Chunk":
            chunkAction(tNode);
            break;
        case "List":
            listAction(tNode);
            break;
        case "Column":
            columnAction(tNode);
            break;
        default:

    }
}

/**
 * 列数据赋值
 * @param tNode
 */
function columnAction(tNode) {
    var paddingLeft = parseInt(tNode.paddingLeft);
    var paddingRight = parseInt(tNode.paddingRight);
    var paddingTop = parseInt(tNode.paddingTop);
    var paddingBottom = parseInt(tNode.paddingBottom);
    var horizontalAlignment = tNode.horizontalAlignment;
    var verticalAlignment = tNode.verticalAlignment;
    var text = tNode.text;
    var parameter = tNode.parameter;
    var fontBase = tNode.fontBase;
    var fontSize = parseFloat(tNode.fontSize);
    var fontStyle = parseInt(tNode.fontStyle);
    if (!fontBase)
        fontBase = "";
    if (!fontSize)
        fontSize = "9";
    if (!fontStyle)
        fontStyle = "0";
    if (!text)
        text = "";
    if (!parameter)
        parameter = "{}";
    if (!paddingBottom)
        paddingBottom = 0;
    if (!paddingLeft)
        paddingLeft = 0;
    if (!paddingTop)
        paddingTop = 0;
    if (!paddingRight)
        paddingRight = 0;
    if (!horizontalAlignment)
        horizontalAlignment = "hMiddle";
    if (!verticalAlignment)
        verticalAlignment = "vMiddle";
    $('#text').val(text);
    $('#parameter').val(parameter);
    $('#paddingLeft').val(paddingLeft);
    $('#paddingRight').val(paddingRight);
    $('#paddingTop').val(paddingTop);
    $('#paddingBottom').val(paddingBottom);
    $('#fontBase').val(fontBase);
    $('#fontSize').val(fontSize);
    $('#fontStyle').val(fontStyle);
    $("input:radio[value='" + verticalAlignment + "']").prop('checked', 'true');
    $("input:radio[value='" + horizontalAlignment + "']").prop('checked', 'true');
}

/**
 * 加载外List后的活动赋值
 */
function listAction(tNode) {
    var numCols = tNode.numCols;
    var colsArr = tNode.colsRadioArr;
    var numRows = tNode.numRows;
    var repeat = tNode.repeat;
    if (!numCols) {
        numCols = 0;
    }
    if (!numRows) {
        numRows = 0;
    }
    if (!repeat) {
        repeat = 0;
    }
    if (!colsArr) {
        colsArr = [];
    }
    $("#numCols").val(numCols);
    $("#numRows").val(numRows);
    $("#repeat").val(repeat);
    addCol();
    for (var i = 0; i < numCols; i++) {
        $("#col" + (i + 1)).val(colsArr[i]);
    }
}

/**
 * 加载完Chunk后的活动比如赋值
 * @param tNode
 */
function chunkAction(tNode) {
    var text = tNode.text;
    var parameter = tNode.parameter;
    var fontBase = tNode.fontBase;
    var fontSize = parseFloat(tNode.fontSize);
    var fontStyle = parseInt(tNode.fontStyle);
    if (!text)
        text = "";
    if (!parameter)
        parameter = "{}";
    if (!fontBase)
        fontBase = "";
    if (!fontSize)
        fontSize = "9";
    if (!fontStyle)
        fontStyle = "0";
    $('#text').val(text);
    $('#parameter').val(parameter);
    $('#fontBase').val(fontBase);
    $('#fontSize').val(fontSize);
    $('#fontStyle').val(fontStyle);
}

/**
 * 加载完Cell后的活动比如赋值
 * @param tNode
 */
function cellAction(tNode) {
    var colSpan = parseInt(tNode.colSpan);
    var rowSpan = parseInt(tNode.rowSpan);
    var rotation = parseInt(tNode.rotation);
    var cellHeight = parseInt(tNode.cellHeight);
    var paddingLeft = parseInt(tNode.paddingLeft);
    var paddingRight = parseInt(tNode.paddingRight);
    var paddingTop = parseInt(tNode.paddingTop);
    var paddingBottom = parseInt(tNode.paddingBottom);
    var borderWidthLeft = parseFloat(tNode.borderWidthLeft);
    var borderWidthRight = parseFloat(tNode.borderWidthRight);
    var borderWidthTop = parseFloat(tNode.borderWidthTop);
    var borderWidthBottom = parseFloat(tNode.borderWidthBottom);
    var horizontalAlignment = tNode.horizontalAlignment;
    var verticalAlignment = tNode.verticalAlignment;
    if (!colSpan)
        colSpan = 1;
    if (!rowSpan)
        rowSpan = 1;
    if (!rotation)
        rotation = 0;
    if (!cellHeight)
        cellHeight = 0;
    if (!paddingBottom)
        paddingBottom = 0;
    if (!paddingLeft)
        paddingLeft = 0;
    if (!paddingTop)
        paddingTop = 0;
    if (!paddingRight)
        paddingRight = 0;
    if (!borderWidthLeft)
        borderWidthLeft = 0;
    if (!borderWidthRight)
        borderWidthRight = 0;
    if (!borderWidthTop)
        borderWidthTop = 0;
    if (!borderWidthBottom)
        borderWidthBottom = 0;
    if (!horizontalAlignment)
        horizontalAlignment = "hMiddle";
    if (!verticalAlignment)
        verticalAlignment = "vMiddle";
    $('#colSpan').val(colSpan);
    $('#rowSpan').val(rowSpan);
    $('#rotation').val(rotation);
    $('#cellHeight').val(cellHeight);
    $('#paddingLeft').val(paddingLeft);
    $('#paddingRight').val(paddingRight);
    $('#paddingTop').val(paddingTop);
    $('#paddingBottom').val(paddingBottom);
    $('#borderWidthLeft').val(borderWidthLeft);
    $('#borderWidthRight').val(borderWidthRight);
    $('#borderWidthTop').val(borderWidthTop);
    $('#borderWidthBottom').val(borderWidthBottom);
    $("input:radio[value='" + verticalAlignment + "']").prop('checked', 'true');
    $("input:radio[value='" + horizontalAlignment + "']").prop('checked', 'true');
}

/**
 * 加载完table后的活动比如赋值
 * @param tNode
 */
function tableAction(tNode) {
    var numCols = tNode.numCols;
    var colsArr = tNode.colsRadioArr;
    var widthRadio = tNode.widthRadio;
    if (!numCols) {
        numCols = 0;
    }
    if (!colsArr) {
        colsArr = [];
    }
    if (!widthRadio && widthRadio != "0") {
        widthRadio = "100";
    }
    $("#widthRadio").val(widthRadio);
    $("#numCols").val(numCols);

    addCol();
    for (var i = 0; i < numCols; i++) {
        $("#col" + (i + 1)).val(colsArr[i]);
    }

}

/**
 * 加载完page后的活动比如赋值
 * @constructor
 */
function pageAction(tNode) {
    var pageSize = tNode.pageSize;
    var pageRotate = tNode.pageRotate;
    var marginLeft = tNode.marginLeft;
    var marginRight = tNode.marginRight;
    var marginTop = tNode.marginTop;
    var marginBottom = tNode.marginBottom;
    if (!pageSize) {
        pageSize = "A4";
    }
    if (!marginLeft) {
        marginLeft = "16";
    }
    if (!marginRight) {
        marginRight = "16";
    }
    if (!marginTop) {
        marginTop = "16";
    }
    if (!marginBottom) {
        marginBottom = "16";
    }
    if (pageRotate != "horizontal" && pageRotate != "vertical") {
        pageRotate = "vertical";
    }
    $("input:radio[value='" + pageRotate + "']").prop('checked', 'true');
    $("#selectPageSize").val(pageSize)
    $("#marginLeft").val(marginLeft);
    $("#marginRight").val(marginRight);
    $("#marginTop").val(marginTop);
    $("#marginBottom").val(marginBottom);
}

function getSettingHtml(nodeName, tNode) {
    var html;
    var tId = tNode.tId;
    switch (nodeName) {
        case "Table":
            html = getTableHtml(tId);
            break;
        case "Cell":
            html = getCellHtml(tId);
            break;
        case "Image":
            $("#properties").text('Image');
            break;
        case "Paragraph":
            html = getParagraphHtml(tId);
            break;
        case "Page":
            html = getPageHtml(tId);
            break;
        case "Chunk":
            html = getChunkHtml(tId);
            break;
        case "List":
            html = getListHtml(tId);
            break;
        case "Column":
            html = getColumnHtml(tId);
            break;
        default:
    }

    function getListHtml(tId) {
        var result = '<div id="pageProperties" class="row">\n' +
            '                <div class="col-md-12">\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>列表设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="input-group">\n' +
            '                                <span class="input-group-addon">行数</span>\n' +
            '                                <input id = "numRows"  class="form-control">\n' +
            '                            </div>\n' +
            '                            <div class="input-group">\n' +
            '                                <span class="input-group-addon">重复次数</span>\n' +
            '                                <input id = "repeat"  class="form-control">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group ">\n' +
            '                                <span class="input-group-addon">列数</span>\n' +
            '                                <input id="numCols" class="form-control" oninput="addCol()">\n' +
            '                                <span class="input-group-addon">列</span>\n' +
            '                            </div>\n' +
            '                            <table class="table" id="cols">\n' +
            '                                <thead>\n' +
            // '                                <tr>\n' +
            // '                                    <th><b>每列相对宽度</b></th>\n' +
            // '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody>\n' +
            // '                                   <div class="input-group">\n' +
            // '                                           <label for="spinnerCol00" class="input-group-addon">第1列</label>\n' +
            // '                                           <input id="spinnerCol00" class="form-control"> \n' +
            // '                                   </div>' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '        </div>';

        return result;
    }
    function getChunkHtml(tId) {
        var result = '<div id="pageProperties" class="row">\n' +
            '            <div class="col-md-12 ">\n' +
            '                <div class="col-md-12">\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>块设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">文本内容</span>\n' +
            '                                <input id="text" class="form-control" value="">\n' +
            '<!--                                <span class="input-group-addon">列</span>-->\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">参数内容</span>\n' +
            '                                <input id="parameter" class="form-control" value="">\n' +
            '<!--                                <span class="input-group-addon">行</span>-->\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>字体设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">字体</span>\n' +
            '                                <input id="fontBase" class="form-control" value="">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">字号</span>\n' +
            '                                <input id="fontSize" class="form-control" value="">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">加粗，斜体</span>\n' +
            '                                <input id="fontStyle" class="form-control" value="">\n' +
            '                                <!--                                <span class="input-group-addon">列</span>-->\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>';
        return result;
    }

    function getPageHtml(tId) {
        var result = '<div id="pageProperties" class="row">\n' +
            '                <div class="col-md-12">\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>纸张设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="col-md-12">\n' +
            '                                <fieldset >\n' +
            '                                    <div class="form-group">\n' +
            '                                        <label for="selectPageSize" class="ui-controlgroup-label">纸张尺寸</label>\n' +
            '                                        <select id="selectPageSize" class="ui-selectable" ' +
            // 'placeholder="Disabled" ' +
            '>\n' +
            '                                            <option>A4</option>\n' +
            '                                            <option>A3</option>\n' +
            '                                            <option>3</option>\n' +
            '                                            <option>4</option>\n' +
            '                                            <option>5</option>\n' +
            '                                        </select>\n' +
            '                                    </div>\n' +
            '                                </fieldset>\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12">\n' +
            '                                <div class="col-md-6">\n' +
            '                                    <div class="radio">\n' +
            '                                        <label>\n' +
            '                                            <input type="radio" name="vOrh" id="optionsRadios1"\n' +
            '                                                   value="horizontal" checked>\n' +
            '                                            横向\n' +
            '                                        </label>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                                <div class="col-md-6">\n' +
            '                                    <div class="radio">\n' +
            '                                        <label>\n' +
            '                                            <input type="radio" name="vOrh" id="optionsRadios2"\n' +
            '                                                   value="vertical">\n' +
            '                                            竖向\n' +
            '                                        </label>\n' +
            '                                    </div>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="col-md-12">\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>文档设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="col-md-12  input-group">\n' +
            '                                <label for="marginRight" class="input-group-addon">右边距</label>\n' +
            '                                <input id="marginRight" class="form-control">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12  input-group">\n' +
            '                                <label for="marginLeft" class="input-group-addon">左边距</label>\n' +
            '                                <input id="marginLeft" class="form-control">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12  input-group">\n' +
            '                                <label for="marginTop" class="input-group-addon">上边距</label>\n' +
            '                                <input id="marginTop" class="form-control">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12  input-group">\n' +
            '                                <label for="marginBottom" class="input-group-addon">下边距</label>\n' +
            '                                <input id="marginBottom" class="form-control">\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '                </div>\n' +
            '\n' +
            '        </div>'
        return result;
    }

    /**
     * 获取单元格html
     * @param tId
     * @returns {string}
     */
    function getCellHtml(tId) {
        var result = '<div id="pageProperties" class="row">\n' +
            '            <div class="col-md-12">\n' +
            '                <div class="col-md-12">\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>单元格设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">横向跨度</span>\n' +
            '                                <input id="colSpan" class="form-control" value="1">\n' +
            '                                <span class="input-group-addon">列</span>\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">竖向跨度</span>\n' +
            '                                <input id="rowSpan" class="form-control" value="1">\n' +
            '                                <span class="input-group-addon">行</span>\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">逆时针旋转角度</span>\n' +
            '                                <input id="rotation" class="form-control" value="0">\n' +
            '                                <span class="input-group-addon">°</span>\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">单元格高度</span>\n' +
            '                                <input id="cellHeight" class="form-control" value="0">\n' +
            '                            </div>\n' +
            '                            <table class="table" id="borders">\n' +
            '                                <thead>\n' +
            '                                <tr>\n' +
            '                                    <th><b>边框粗细</b></th>\n' +
            '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="borderWidthLeft" class="ui-controlgroup-label">左边框</label>\n' +
            '                                        <input id="borderWidthLeft" value="0">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="borderWidthRight" class="ui-controlgroup-label">右边框</label>\n' +
            '                                        <input id="borderWidthRight" value="0">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="borderWidthTop" class="ui-controlgroup-label">上边框</label>\n' +
            '                                        <input id="borderWidthTop" value="0">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="borderWidthBottom" class="ui-controlgroup-label">下边框</label>\n' +
            '                                        <input id="borderWidthBottom" value="0">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '                            <table class="table" id="paddings">\n' +
            '                                <thead>\n' +
            '                                <tr>\n' +
            '                                    <th><b>内边距</b></th>\n' +
            '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingLeft" class="ui-controlgroup-label">左边距</label>\n' +
            '                                        <input id="paddingLeft" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingRight" class="ui-controlgroup-label">右边距</label>\n' +
            '                                        <input id="paddingRight" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingTop" class="ui-controlgroup-label">上边距</label>\n' +
            '                                        <input id="paddingTop" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingBottom" class="ui-controlgroup-label">下边距</label>\n' +
            '                                        <input id="paddingBottom" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '                            <table class="table" id="alignment">\n' +
            '                                <thead>\n' +
            '                                <tr>\n' +
            '                                    <th><b>对齐方式</b></th>\n' +
            '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <div class="col-md-12">\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio ">\n' +
            '                                                    <label>\n' +
            '                                                        <input type="radio"\n' +
            '                                                               name="optionsRadioHori"\n' +
            '                                                               id="alignLeft"\n' +
            '                                                               value="0"\n' +
            '                                                               checked>\n' +
            '                                                        左\n' +
            '                                                    </label>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioHori"\n' +
            '                                                                   id="alignRight"\n' +
            '                                                                   value="1"\n' +
            '                                                                   >\n' +
            '                                                            中\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioHori"\n' +
            '                                                                   id="alignRight"\n' +
            '                                                                   value="2"\n' +
            '                                                                   >\n' +
            '                                                            右\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <div class="col-md-12">\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio ">\n' +
            '                                                    <label>\n' +
            '                                                        <input type="radio"\n' +
            '                                                               name="optionsRadioVer"\n' +
            '                                                               id="alignTop"\n' +
            '                                                               value="4"\n' +
            '                                                               checked>\n' +
            '                                                        上\n' +
            '                                                    </label>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioVer"\n' +
            '                                                                   id="alignmiddle"\n' +
            '                                                                   value="5"\n' +
            '                                                                   checked>\n' +
            '                                                            中\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioVer"\n' +
            '                                                                   id="alignBottom"\n' +
            '                                                                   value="6"\n' +
            '                                                                   checked>\n' +
            '                                                            下\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>';
        return result;
    }


    /**
     * 获取列html
     * @param tId
     * @returns {string}
     */
    function getColumnHtml(tId) {
        var result = '<div id="pageProperties" class="row">\n' +
            '            <div class="col-md-12">\n' +
            '                <div class="col-md-12">\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>列设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">文本内容</span>\n' +
            '                                <input id="text" class="form-control" value="">\n' +
            '<!--                                <span class="input-group-addon">列</span>-->\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">参数内容</span>\n' +
            '                                <input id="parameter" class="form-control" value="">\n' +
            '<!--                                <span class="input-group-addon">行</span>-->\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">字体</span>\n' +
            '                                <input id="fontBase" class="form-control" value="">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">字号</span>\n' +
            '                                <input id="fontSize" class="form-control" value="">\n' +
            '                            </div>\n' +
            '                            <div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">加粗，斜体</span>\n' +
            '                                <input id="fontStyle" class="form-control" value="">\n' +
            '                                <!--                                <span class="input-group-addon">列</span>-->\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <table class="table" id="paddings">\n' +
            '                                <thead>\n' +
            '                                <tr>\n' +
            '                                    <th><b>内边距</b></th>\n' +
            '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingLeft" class="ui-controlgroup-label">左边距</label>\n' +
            '                                        <input id="paddingLeft" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingRight" class="ui-controlgroup-label">右边距</label>\n' +
            '                                        <input id="paddingRight" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingTop" class="ui-controlgroup-label">上边距</label>\n' +
            '                                        <input id="paddingTop" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <label for="paddingBottom" class="ui-controlgroup-label">下边距</label>\n' +
            '                                        <input id="paddingBottom" value="16">\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '                            <table class="table" id="alignment">\n' +
            '                                <thead>\n' +
            '                                <tr>\n' +
            '                                    <th><b>对齐方式</b></th>\n' +
            '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <div class="col-md-12">\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio ">\n' +
            '                                                    <label>\n' +
            '                                                        <input type="radio"\n' +
            '                                                               name="optionsRadioHori"\n' +
            '                                                               id="alignLeft"\n' +
            '                                                               value="0"\n' +
            '                                                               checked>\n' +
            '                                                        左\n' +
            '                                                    </label>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioHori"\n' +
            '                                                                   id="alignRight"\n' +
            '                                                                   value="1"\n' +
            '                                                                   >\n' +
            '                                                            中\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioHori"\n' +
            '                                                                   id="alignRight"\n' +
            '                                                                   value="2"\n' +
            '                                                                   >\n' +
            '                                                            右\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                <tr>\n' +
            '                                    <td>\n' +
            '                                        <div class="col-md-12">\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio ">\n' +
            '                                                    <label>\n' +
            '                                                        <input type="radio"\n' +
            '                                                               name="optionsRadioVer"\n' +
            '                                                               id="alignTop"\n' +
            '                                                               value="4"\n' +
            '                                                               checked>\n' +
            '                                                        上\n' +
            '                                                    </label>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioVer"\n' +
            '                                                                   id="alignmiddle"\n' +
            '                                                                   value="5"\n' +
            '                                                                   checked>\n' +
            '                                                            中\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                            <div class="col-md-4">\n' +
            '                                                <div class="radio">\n' +
            '                                                    <div>\n' +
            '\n' +
            '                                                        <label>\n' +
            '                                                            <input type="radio"\n' +
            '                                                                   name="optionsRadioVer"\n' +
            '                                                                   id="alignBottom"\n' +
            '                                                                   value="6"\n' +
            '                                                                   checked>\n' +
            '                                                            下\n' +
            '                                                        </label>\n' +
            '                                                    </div>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>\n' +
            '                                    </td>\n' +
            '                                </tr>\n' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>';
        return result;
    }
    function getParagraphHtml(tId) {
        var result = 'Paragraph';
        return result;
    }

    function getTableHtml(tId) {
        var result = '<div id="pageProperties" class="row">\n' +
            '                <div class="col-md-12">\n' +
            '                    <div class="panel panel-default">\n' +
            '                        <div class="panel-heading"><b>表格设置</b></div>\n' +
            '                        <div class="panel-body">\n' +
            '                            <div class="col-md-12 input-group ">\n' +
            '                                <span class="input-group-addon">列数</span>\n' +
            '                                <!--                                <label for="spinnerNumCols" class="ui-controlgroup-label">列数</label>-->\n' +
            '                                <input id="numCols" class="form-control" oninput="addCol()">\n' +
            '                                <span class="input-group-addon">列</span>\n' +
            '                            </div>\n' +
            '                            <div class="input-group">\n' +
            '                                <span class="input-group-addon">宽占比</span>\n' +
            '                                <input id = "widthRadio" type="text" class="form-control">\n' +
            '                                <span class="input-group-addon">%</span>\n' +
            '                            </div>\n' +
            '                            <table class="table" id="cols">\n' +
            '                                <thead>\n' +
            // '                                <tr>\n' +
            // '                                    <th><b>每列相对宽度</b></th>\n' +
            // '                                </tr>\n' +
            '                                </thead>\n' +
            '                                <tbody>\n' +
            // '                                   <div class="input-group">\n' +
            // '                                           <label for="spinnerCol00" class="input-group-addon">第1列</label>\n' +
            // '                                           <input id="spinnerCol00" class="form-control"> \n' +
            // '                                   </div>' +
            '                                </tbody>\n' +
            '                            </table>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '        </div>';

        return result;
    }


    return html;
}

function addCol() {
    var numCols = $("#numCols").val();
    $("#cols>tbody").html('');
    $("#cols>thead").html('');
    if (numCols > 0) {
        $("#cols>thead").html('<tr>\n' +
            '                                    <th><b>每列相对宽度</b></th>\n' +
            '                                </tr>');
    }
    for (var i = 0; i < numCols; i++) {
        $("#cols>tbody").append('<div class="col-md-12 input-group">\n' +
            '                                <span class="input-group-addon">第' + i + '列</span>\n' +
            '                                <input id="col' + (i + 1) + '" class="form-control">\n' +
            // '                                <span class="input-group-addon">列</span>\n' +
            '                            </div>')
        $("#spinnerCol" + i).spinner();
    }
}

var clickNodeTId = "";

function onClick(event, treeId, treeNode) {
    var treeNodeEname = treeNode.ename;
    clickNodeTId = treeNode.tId;
    showProperties(treeNodeEname, treeNode);
    // $("#properties").html('Table');

}

var addCount = 1;

function addTreeNode() {
    hideRMenu();
    var newNode = {name: "增加" + (addCount++)};
    if (zTree.getSelectedNodes()[0]) {
        newNode.checked = zTree.getSelectedNodes()[0].checked;
        zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
    } else {
        zTree.addNodes(null, newNode);
    }
}

function addTreeElement(element) {
    hideRMenu();
    var e = {};
    switch (element) {
        case "Table":
            e = {data: {isParent: true, name: "表格", ename: "Table"}};
            break;
        case "Paragraph" :
            e = {data: {isParent: true, name: "段落", ename: "Paragraph"}};
            break;
        case "Chunk":
            e = {data: {isParent: false, name: "块", ename: "Chunk"}};
            break;
        case "Image":
            e = {data: {isParent: false, name: "图片", ename: "Image"}};
            break;
        case "Cell":
            e = {data: {isParent: true, name: "单元格", ename: "Cell"}};
            break;
        case "Loop":
            e = {data: {isParent: true, name: "循环体", ename: "Loop"}};
            break;
        case "List":
            e = {data: {isParent: true, name: "列表", ename: "List"}};
            break;
        case "Column":
            e = {data: {isParent: false, name: "列", ename: "Column"}};
            break;
    }
    add(e);
}

function addTreeTable() {
    hideRMenu();
    var e = {data: {isParent: true, name: "表格", ename: "Table"}};
    add(e);
}

function addTreeParagraph() {
    hideRMenu();
    var e = {data: {isParent: true, name: "段落", ename: "Paragraph"}};
    add(e);
}

function addTreeChunk() {
    hideRMenu();
    var e = {data: {isParent: false, name: "块", ename: "Chunk"}};
    add(e);
}

function addTreeImage() {
    hideRMenu();
    var e = {data: {isParent: false, name: "图片", ename: "Image"}};
    add(e);
}

function addTreeCell() {
    hideRMenu();
    var e = {data: {isParent: true, name: "单元格", ename: "Cell"}};
    add(e);
}

function removeTreeNode() {
    hideRMenu();
    var nodes = zTree.getSelectedNodes();
    if (nodes && nodes.length > 0) {
        if (nodes[0].children && nodes[0].children.length > 0) {
            var msg = "要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！";
            if (confirm(msg) == true) {
                zTree.removeNode(nodes[0]);
            }
        } else {
            zTree.removeNode(nodes[0]);
        }
    }
}

function checkTreeNode(checked) {
    var nodes = zTree.getSelectedNodes();
    if (nodes && nodes.length > 0) {
        zTree.checkNode(nodes[0], checked, true);
    }
    hideRMenu();
}

/**
 * 给Page赋值设置属性
 * @param node
 */
function savePropertiesOfPage(node) {
    node.pageSize = $("#selectPageSize option:selected").val();
    node.pageRotate = $('input[name="vOrh"]:checked').val();
    node.marginRight = $('#marginRight').val();
    node.marginLeft = $('#marginLeft').val();
    node.marginTop = $('#marginTop').val();
    node.marginBottom = $('#marginBottom').val();
}

/**
 * 给table赋值设置属性
 * @param node
 */
function savePropertiesOfTable(node) {
    node.numCols = parseInt($('#numCols').val());
    var colsArr = $("#cols>tbody input");
    var cols = [];
    for (var i = 0; i < colsArr.length; i++) {
        cols[cols.length] = parseInt(colsArr[i].value);
    }
    node.colsRadioArr = cols;
    node.widthRadio = parseInt($('#widthRadio').val());
}

/**
 * 给Chunk赋值
 * @param node
 */
function savePropertiesOfChunk(node) {
    node.text = $('#text').val();
    node.parameter = $('#parameter').val();
    node.fontBase = $('#fontBase').val();
    node.fontSize = parseFloat($('#fontSize').val());
    node.fontStyle = parseInt($('#fontStyle').val());
}

/**
 * 给table赋值设置属性
 * @param node
 */
function savePropertiesOfCell(node) {
    node.colSpan = parseInt($('#colSpan').val());
    node.rowSpan = parseInt($('#rowSpan').val());
    node.rotation = parseInt($('#rotation').val());
    node.cellHeight = parseInt($('#cellHeight').val());
    node.paddingLeft = parseInt($('#paddingLeft').val());
    node.paddingRight = parseInt($('#paddingRight').val());
    node.paddingTop = parseInt($('#paddingTop').val());
    node.paddingBottom = parseInt($('#paddingBottom').val());
    node.borderWidthLeft = parseFloat($('#borderWidthLeft').val());
    node.borderWidthRight = parseFloat($('#borderWidthRight').val());
    node.borderWidthTop = parseFloat($('#borderWidthTop').val());
    node.borderWidthBottom = parseFloat($('#borderWidthBottom').val());
    node.parameter = $('#parameter').val();
    node.horizontalAlignment = $('input[name="optionsRadioHori"]:checked').val();
    node.verticalAlignment = $('input[name="optionsRadioVer"]:checked').val();
}

/**
 * 给table赋值设置属性
 * @param node
 */
function savePropertiesOfColumn(node) {
    node.paddingLeft = parseInt($('#paddingLeft').val());
    node.paddingRight = parseInt($('#paddingRight').val());
    node.paddingTop = parseInt($('#paddingTop').val());
    node.paddingBottom = parseInt($('#paddingBottom').val());
    node.fontBase = $('#fontBase').val();
    node.fontSize = parseInt($('#fontSize').val());
    node.fontStyle = parseInt($('#fontStyle').val());
    node.parameter = $('#parameter').val();
    node.text = $('#text').val();
    node.horizontalAlignment = $('input[name="optionsRadioHori"]:checked').val();
    node.verticalAlignment = $('input[name="optionsRadioVer"]:checked').val();
}
/**
 * 给table赋值设置属性
 * @param node
 */
function savePropertiesOfList(node) {
    node.numCols = parseInt($('#numCols').val());
    node.numRows = parseInt($('#numRows').val());
    node.repeat = parseInt($('#repeat').val());
    var colsArr = $("#cols>tbody input");
    var cols = [];
    for (var i = 0; i < colsArr.length; i++) {
        cols[cols.length] = parseInt(colsArr[i].value);
    }
    node.colsRadioArr = cols;
}

/**
 * 点击打印前
 * @param treeId
 * @param treeNode
 * @param clickFlag
 */
function beforeClickSave(treeId, treeNode, clickFlag) {
    saveLastOperate(clickNodeTId);
}

function beforeClick(treeId, treeNode) {

}

/**
 * 保存上一步操作
 * @param clickNodeTId
 */
function saveLastOperate(clickNodeTId) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo")
    var node = zTree.getNodeByTId(clickNodeTId);
    if ("" != clickNodeTId && node != null) {
        var nodeEname = zTree.getNodeByTId(clickNodeTId).ename;
        switch (nodeEname) {
            case "Page":
                savePropertiesOfPage(node);
                break;
            case "Table":
                savePropertiesOfTable(node);
                break;
            case "Cell":
                savePropertiesOfCell(node);
                break;
            case "Chunk":
                savePropertiesOfChunk(node);
                break;
            case "List":
                savePropertiesOfList(node);
                break;
            case "Column":
                savePropertiesOfColumn(node);
                break;
            default:
        }
    }
}

function resetTree() {
    hideRMenu();
    zNodes = zNodesTemp;
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
}

var zTree, rMenu;
// $(document).ready(function(){
//     $.fn.zTree.init($("#treeDemo"), setting, zNodes);
//     zTree = $.fn.zTree.getZTreeObj("treeDemo");
//     rMenu = $("#rMenu");
// });

function setTrigger() {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    zTree.setting.edit.drag.autoExpandTrigger = $("#callbackTrigger").attr("checked");
}

/**
 * 输出node信息
 */
function printNode() {
    saveLastOperate(clickNodeTId);
    $("#htmlPrint").html(JSON.stringify(zNodes[0]));
}

/**
 * 格式化JSON
 * @param msg
 * @returns {string}
 */
function formatJson(msg) {
    var rep = "~";
    var jsonStr = JSON.stringify(msg, null, rep)
    var str = "";
    for (var i = 0; i < jsonStr.length; i++) {
        var text2 = jsonStr.charAt(i)
        if (i > 1) {
            var text = jsonStr.charAt(i - 1)
            if (rep != text && rep == text2) {
                str += "<br/>"
            }
        }
        str += text2;
    }
    jsonStr = "";
    for (var i = 0; i < str.length; i++) {
        var text = str.charAt(i);
        if (rep == text)
            jsonStr += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        else {
            jsonStr += text;
        }
        if (i == str.length - 2)
            jsonStr += "<br/>"
    }
    return jsonStr;
}

/**
 * 复制
 */
function copyNodeInfo() {
    var txt = "["+$("#htmlPrint").text()+"]";
    var copy_obj = document.createElement('textarea');
    document.body.append(copy_obj);
    copy_obj.style.position = 'absolute';
    copy_obj.style.left = '-999999px';
    copy_obj.value = txt;
    copy_obj.select();
    document.execCommand("copy");
    alert('复制成功');
    document.body.removeChild(copy_obj);
}

function fontCss(treeNode) {
    var aObj = $("#" + treeNode.tId + "_a");
    aObj.removeClass("copy").removeClass("cut");
    if (treeNode === curSrcNode) {
        if (curType == "copy") {
            aObj.addClass(curType);
        } else {
            aObj.addClass(curType);
        }
    }
}

var curSrcNode, curType;

function setCurSrcNode(treeNode) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
    if (curSrcNode) {
        delete curSrcNode.isCur;
        var tmpNode = curSrcNode;
        curSrcNode = null;
        fontCss(tmpNode);
    }
    curSrcNode = treeNode;
    if (!treeNode) return;

    curSrcNode.isCur = true;
    zTree.cancelSelectedNode();
    fontCss(curSrcNode);
}

/**
 * 复制
 * @param e
 */
function copyNode(e) {
    hideRMenu();
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes();
    if (nodes.length == 0) {
        alert("请先选择一个节点");
        return;
    }
    curType = "copy";
    setCurSrcNode(nodes[0]);
}

/**
 * 剪切
 * @param e
 */
function cut(e) {
    hideRMenu();
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes();
    if (nodes.length == 0) {
        alert("请先选择一个节点");
        return;
    }
    curType = "cut";
    setCurSrcNode(nodes[0]);
}

/**
 * 粘贴
 * @param e
 */
function pasteNode(e) {
    hideRMenu();
    // if (!curSrcNode) {
    //     alert("请先选择一个节点进行 复制 / 剪切");
    //     return;
    // }
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
        nodes = zTree.getSelectedNodes(),
        targetNode = nodes.length > 0 ? nodes[0] : null;
    if (curSrcNode === targetNode) {
        alert("不能移动，源节点 与 目标节点相同");
        return;
    } else if (curType === "cut" && ((!!targetNode && curSrcNode.parentTId === targetNode.tId) || (!targetNode && !curSrcNode.parentTId))) {
        alert("不能移动，源节点 已经存在于 目标节点中");
        return;
    } else if (curType === "copy") {
        targetNode = zTree.copyNode(targetNode, curSrcNode, "inner");
    } else if (curType === "cut") {
        targetNode = zTree.moveNode(targetNode, curSrcNode, "inner");
        if (!targetNode) {
            alert("剪切失败，源节点是目标节点的父节点");
        }
        targetNode = curSrcNode;
    }
    setCurSrcNode();
    delete targetNode.isCur;
    zTree.selectNode(targetNode);
}

function shoot(element) {
    saveLastOperate(clickNodeTId);
    $("#htmlPrint").html(JSON.stringify(zNodes[0], null, '\t'));
    var zNodeStr = JSON.stringify(zNodes[0]);
    var shootType = element.getAttribute("value");
    console.log(shootType);
    // $.post("http://localhost:8080/testBoot/export/pdf2", {nodeInfo: zNodeStr}, function (result) {
    //     window.open("http://" + result);
    // });
    $.ajax({
        type: "POST",
        url: "http://localhost:8089/testBoot/export/pdf2",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: {nodeInfo: zNodeStr},
        dataType: "text",
        success: function (data) {
            if("preview" == shootType) {
                $("#printFrame").attr('src', "http://localhost:8089" + data)
            }else if ("downLoad" == shootType){
                window.open("http://localhost:8089" + data);
            }
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}
/**
 * 从文件加载初始化数据
 */
function initfromLocalJsonFile(){
    $.ajax({
        url: '../data/demo7.json',
        async: false,
        success: function (data) {
            zNodes = data[0];
        }
    });
}
function loadJson(){
    var dataName = $("#dataName").val();
    var inputJson;
    if(!dataName) {
        inputJson = JSON.parse($("#inputJson").val());
        // var jsonArr = inputJson;
    }else {
        $.ajax({
            url: '../data/'+dataName+'.json',
            async: false,
            success: function (data) {
                inputJson = data;
            }
        });
    }
    zNodes = inputJson;
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    zTree = $.fn.zTree.getZTreeObj("treeDemo");
    zNodes = zTree.transformToArray(zTree.getNodes());
}

/**
 * 初始化
 */
$(document).ready(function () {
    initfromLocalJsonFile();
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    zTree = $.fn.zTree.getZTreeObj("treeDemo");
    // zTree.addNodes(null, {id: "demo", pId: 0, isParent: false, name: "图片",ename:"Image"});
    zNodes = zTree.transformToArray(zTree.getNodes());
    rMenu = $("#rMenu");
    $("#addTable").bind("click", {isParent: true, name: 'Table'}, add);
    $("#addPhrase").bind("click", {isParent: true, name: 'Phrase'}, add);
    $("#addImage").bind("click", {isParent: false, name: 'Image'}, add);
    $("#addCell").bind("click", {isParent: true, name: 'Cell'}, add);
    $("#edit").bind("click", edit);
    $("#remove").bind("click", remove);
    $("#clearChildren").bind("click", clearChildren);
    $("#copy").bind("click", copy);
    $("#cut").bind("click", cut);
    $("#paste").bind("click", paste);

});
//-->