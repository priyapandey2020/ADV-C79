
	menu_list_array = ["Chicken Tandoori","Veg Supreme Burger","Paneer Tikka","Chicken Chilli","Cheese Burst Pizza"];
    
    function getmenu(){
        console.log(menu_list_array);
        document.getElementById("display_menu").innerHTML = menu_list_array;
    }
    function add_item(){
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        console.log(menu_list_array);

        document.getElementById("add_item").style.display = "";
        document.getElementById("display_addedmenu").innerHTML = menu_list_array;
        document.getElementById("additem_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";
    }

function sorting()
{
	menu_list_array.sort();
    console.log(menu_list_array);
    document.getElementById("display_sortedmenu").innerHTML = menu_list_array;
}
