$(function(){
    var mainBox=$('#mainBox');
    var arr=["music", "search", "mail", "heart", "star", "user", "videocam", "camera", "photo", "attach", "lock", "eye", "tag", "pencil", "comment", "location", "cup", "trash", "doc", "note", "cog", "params", "calendar", "sound", "clock", "lightbulb", "tv", "desktop", "mobile", "cd", "inbox", "globe", "cloud", "fire", "megaphone", "database", "key", "beaker", "truck", "money", "food", "shop", "diamond", "wallet"];
    for(var i=0;i<arr.length;i++){
        $('<div>').addClass('linecons-'+arr[i]).appendTo(mainBox);
    }
})
