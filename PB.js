(function(window) {

    'use strict';

    function define_PBJS() {

        var PB = {};

        ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>beginning of library Functions<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        //quick reference for items in the DOM
        PB.E = function(elem) {
            return document.getElementById(elem);
        };
        PB.C = function(elem) {
            return document.getElementsByClassName(elem);
        };
        PB.T = function(elem) {
            return document.getElementsByTagName(elem);
        };

        // About
        PB.ver = function() {
            console.log(" Version: 1.0.3\n Authors: \n\n 'Kyler Love'\n Began: '11 March 2016'");
        };

        //greet people cause its nice
        PB.greet = function() {
            console.log("Welcome to PB.js, Peanut Butter JavaScript... or Peanut Butter Jelly Sandwich");
        };


        //Tracey's take on current events in the world
        PB.The_Tracey_Harrison_Manifesto = function() {
            var NothingMatters = "<div style='Font-size: 60px;'> YAY!!! NOTHING MATTERS! <div>";
            var bod = document.querySelectorAll('a, div');

            setInterval(function() {
                for (var variable in bod) {
                    console.log(bod);
                    var doc = bod[variable];
                    doc.innerHTML += NothingMatters;
                }
            }, 6000);
        };

        //quick simple function calculator.  3 parameters to assign to variable, 4 to assign to passed element
        PB.Calc = function(a, b, Operator, OutputElem) {
            //repurpose OutputElem into the object
            OutputElem = PB.E(OutputElem);
            var A = parseFloat(PB.E(a).value);
            var B = parseFloat(PB.E(b).value);
            var C = 0;
            switch (Operator) {
                case "+":
                    C = A + B;
                    break;
                case "-":
                    C = A - B;
                    break;
                case "*":
                    C = A * B;
                    break;
                case "/":
                    C = A / B;
                    break;
                case "%":
                    C = A % B;
                    break;
            }
            if (OutputElem === null) {
                console.log(C);
                return C;
            } else {
                OutputElem.value = C;
                OutputElem.innerHTML = C;
            }
        };

        //turn the innerHTML of any element into a clock
        PB.createClock = function(elem) {
            elem = (PB.E(elem) === null) ? elem : PB.E(elem);
            setInterval(function() { elem.innerHTML = new Date().toLocaleTimeString(); }, 500);
        };

        //bool if the obj is found inside the Element(elem) is in passed array
        PB.Contains = function(elem, obj) {
            elem = (PB.E(elem) === null) ? elem : PB.E(elem);
            var a = elem.innerHTML;
            var i = a.length;
            while (i--) {
                console.log(a[i]);
                if (a[i] === obj) {
                    console.log('true');
                    return true;
                }
            }
            console.log('false');
            return false;
        };

        //will return an array of the window size of the screen you are on
        PB.getWindowSize = function() {
            var myWidth = 0,
                myHeight = 0;

            if (typeof(window.innerWidth) == 'number') {
                //everything outside of IE
                myWidth = window.innerWidth;
                myHeight = window.innerHeight;
            } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                //IE 6+ in 'standards compliant mode'... whatever that means
                myWidth = document.documentElement.clientWidth;
                myHeight = document.documentElement.clientHeight;
            } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
                //IE 4 compatible... blow it up cause you should never use it
                myWidth = document.body.clientWidth;
                myHeight = document.body.clientHeight;
            }
            return [myWidth, myHeight];
        };


        //returns the difference of two dates (in Days) as inputs
        //can pass in dates as an input field or as an input field ID
        PB.DateDifference = function(date1, date2, otpt) {
            date1 = (PB.E(date1) === null) ? date1.value : PB.E(date1).value;
            date2 = (PB.E(date2) === null) ? date2.value : PB.E(date2).value;
            otpt = (PB.E(otpt) === null) ? otpt : PB.E(otpt);

            date1 = Date.parse(date1);
            date2 = Date.parse(date2);
            var timeDiff = Math.abs(date2 - date1);
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (otpt === undefined) {
                console.log(diffDays);
                return diffDays;
            } else {
                otpt.innerHTML = diffDays;
            }
        };

        //object call to build a table object form
        //the tableController js page
        PB.tableController = function() {
            return new Table();
        };

        //Rename all elements of a class by adding numbers to the element name
        PB.AddNumbers = function(classId) {
            $.each($(classId), function(index, id) {
                console.log("inside the each");
                console.log("index: " + index + " id: " + id);
                console.log("attempting to append new index");
                $(this).attr('id', id + index);
            });
        };

        //checks to see if element is blank
        PB.isBlank = function(elem) {
            elem = (PB.E(elem) === null) ? elem.value : PB.E(elem).value;
            for (var i = 0; i < elem.length; i++) {
                var c = elem.charAt(i);
                if ((c != '\n') && (c !== '')) {
                    return false;
                }
            }
            return true;
        };

        //Close Window on a button click
        PB.CloseWindow = function() {
            window.close();
        };

        //Sesson Time out.  To be used on pages that require users to
        //log out for security reasons
        PB.SessionTimeOut = function(wait, redirect) {
            var idleTimer = null;
            var idleState = false;
            var idleWait = wait;
            var destination = redirect;
            $(document).ready(function() {
                $('*').bind('mousemove keydown scroll', function() {
                    clearTimeout(idleTimer);
                    if (idleState === true) {
                        console.log("away");
                    }
                    idleState = false;
                    idleTimer = setTimeout(function() {
                        console.log("away time");
                        // Idle Event
                        idleState = true;
                        window.location = destination;
                    }, idleWait);
                });
            });
            $("body").trigger("mousemove");
        };

        // Add event to an obj
        PB.addEvent = function(obj, type, fn) {
            if (obj) {
                if (obj.attachEvent) {
                    obj['e' + type + fn] = fn;
                    obj[type + fn] = function() {
                        obj['e' + type + fn](window.event);
                    };
                    obj.attachEvent('on' + type, obj[type + fn]);
                } else {
                    obj.addEventListener(type, fn, false);
                }
            }
        };


        // Remove event obj
        PB.removeEvent = function(obj, type, fn) {
            if (obj) {
                if (obj.detachEvent) {
                    obj.detachEvent('on' + type, obj[type + fn]);
                    obj[type + fn] = null;
                } else {
                    obj.removeEventListener(type, fn, false);
                }
            }
        };

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>End of library<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        //call things on load
        return PB;
    }

    if (typeof(PB) === 'undefined') {

        window.PB = define_PBJS();
    }

})(window);

//tableController function
var Table = function() {

    return {
        //column to array takes a table id and number(column)
        //and returns an array of elements in that column
        ColumnToArray: function(tbl, colNum) {
            tbl = TU.E(tbl);
            var list = [];
            var tabCount = tbl.rows.length;
            //console.log(tbl);
            for (var x = 1; x < tabCount; x++) {
                list[x - 1] = tbl.rows[x].cells[colNum].innerHTML;
            }
            return list;
        },

        RowToArray: function(tbl, info, colNum) {
            tbl = TU.E(tbl);
            var input = (TU.E(info) === null) ? info : TU.E(info).value;
            var list = [];
            var tablHeight = tbl.rows.length;
            var tblLength = tbl.rows[0].cells.length;
            for (var x = 1; x < tablHeight; x++) {
                if (tbl.rows[x].cells[colNum].innerHTML === input) {
                    for (var y = 0; y < tblLength; y++) {
                        list[y] = tbl.rows[x].cells[y].innerHTML;
                    }
                }
            }
            // console.log(list);
            return list;
        },

        //Selects all checkboxes in a table.  See Readme for Table Creating
        SelectAllCheckBoxes: function(Checkbox, tbl) {
            var table1 = TU.E(tbl);
            for (i = 1; i < table1.rows.length; i++) {
                table1.rows[i].cells[0].getElementsByTagName("INPUT")[0].checked = Checkbox.checked;
            }
        },

        // Authors: Armond Smith, Kyler Love, and Rob Zahorchak gridview auto filter
        SearchGridview: function(strKey, strGV, column) {
            column++;
            //string of what is typed in
            var strData = strKey.value.toLowerCase().split(" ");
            // console.log(strData);
            //raw data from table
            var tblData = document.getElementById(strGV);
            var table = [];
            var colInfo = [];
            var styleDisplay = "";
            // i is each row in the table.
            for (var i = 0; i < tblData.rows.length; i++) {
                //all info in row[i]
                var rowData = tblData.rows[i].innerHTML;
                //splits row and makes arrays ex instead of <td>a</td>....
                var rowInfo = rowData.split("<td>");
                for (var j = 1; j < rowInfo.length; j++) {
                    table[i] = rowInfo;
                }
                styleDisplay = 'none';
            }
            for (var k = 1; k < table.length; k++) {
                colInfo[k] = table[k][column];
            }
            //  console.log(table);
            //runs through the string that user enters
            for (var s = 1; s < table.length; s++) {
                //  console.log(strData);
                var str = colInfo[s].toLowerCase();
                styleDisplay = (str.indexOf(strData) >= 0) ? '' : 'none';
                tblData.rows[s].style.display = styleDisplay;
            }
        }
    }; //end of return
}; //end of funtion