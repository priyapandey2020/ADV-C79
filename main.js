
	menu_list_array = ["Chicken Tandoori","Veg Supreme Burger","Paneer Tikka","Chicken Chilli","Cheese Burst Pizza"];
    
    function getmenu(){
        // for(var i=0;i<menu_list_array.length;i++){
        //     document.getElementById('display_menu').innerHTML ='<li>' + menu_list_array[i] + '</li>'
        // //    document.getElementById("display_menu").innerHTML = menu_list_array[i];
        // }
         document.getElementById("display_menu").innerHTML = menu_list_array;
    }
    function add_item(){
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        // console.log(menu_list_array);

        // document.getElementById("add_item").style.display = "";
        document.getElementById("display_addedmenu").innerHTML = menu_list_array;
        document.getElementById("sortbtn").style.display = "inline-block";
    }

function sorting()
{
	menu_list_array.sort();
    document.getElementById("display_sortedmenu").innerHTML = menu_list_array;
}
