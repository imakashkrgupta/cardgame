/*--------------------MENU BUTTON CLICKED-------------------*/
let nav_counter = 1;
function menu_clicked(){
    if(nav_counter%2==0){
        document.getElementById("nav_bar_logo_id").style.display="block";
        document.getElementById("nav_bar_links_wrap_id").style.display="none";
    }
    else{
        document.getElementById("nav_bar_logo_id").style.display="none";
        document.getElementById("nav_bar_links_wrap_id").style.display="block";
    }
    nav_counter++;
    
}