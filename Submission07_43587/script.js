$(document).ready(function(){
    $("#accordion").accordion({
        collapsible: true
      });

      let dialog = $('#dialog-form').dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Add new order": function() {
                let nama = $("#nama").val()
                let price = $("#price").val()
                let deposit = $("#deposit").val()
                let room
                if(price == "200"){
                    room = "Single"
                }
                if(price == "350"){
                    room = "Double"
                }
                if(price == "600"){
                    room = "Duplex"
                }
                if(price == "1000"){
                    room = "Cabana"
                }
                let newTable = "<tr><td>"+nama+"</td><td>"+room+"</td><td>$"+deposit+"</td></tr>"
                $("#tableOrder").append(newTable)
                dialog.dialog("close");
            },
            Cancel: function() {
                dialog.dialog("close");
            }
        },
        close: function() {
            form[0].reset();
        }

    });
    $('.btnAddOrder').on('click',function() {
        if(this.id == "Single"){
            $("#price").val("200");
        }
        if(this.id == "Double"){
            $("#price").val("350");
        }
        if(this.id == "Duplex"){
            $("#price").val("600");
        }
        if(this.id == "Cabana"){
            $("#price").val("1000");
        }
        
        dialog.dialog('open');
    });
});
    

$(document).ready(documentReady());