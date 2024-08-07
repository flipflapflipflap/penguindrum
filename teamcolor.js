var teamList_4cc = ["chiemi","eriko","esmeralda","hibari","hikari","himari","kanba","keiju","kenzan","mario","masako","momoka","penguin1","penguin2","penguin3","ringo","sanetoshi","satoshi","shouma","yuri","beauty","cool","ginko","ginkobear","kaoru","konomi","kureha","lulu","lulubear","milne","mitsuko","reia","sexy","sumika","yurika","akio","anthy","chuchu","dios","juri","kanae","keiko","kozue","kyouichi","mamiya","mari","miki","mitsuru","nanami","ruka","shiori","souji","tatsuya","touga","utena","wakaba"];


function setTeamList(listOfTeams){
	var selector = $('#teamcolor');
	selector.html('<option value="">Chat Icon</option>');
	listOfTeams.forEach(function(team){
		selector.append('<option value="' + team + '">/' + team + '/</option>');
	});
};

$('#chatwrap').append("<span><select id='teamcolor' style='cursor:default;padding:6px 10px' class='btn btn-sm btn-default'><option value=''>Chat Icon</option></select></span>");
var TEAMCOLOR = getOrDefault(CHANNEL.name + "_TEAMCOLOR", '');
setTeamList(teamList_4cc);
if (TEAMCOLOR){
	$('#teamcolor').val(TEAMCOLOR);
}
$('#teamcolor').change(function(){
	TEAMCOLOR = $(this).val();
	setOpt(CHANNEL.name + "_TEAMCOLOR", TEAMCOLOR);
});


//Format messages upon page load because they're handled differently and I can't find the function
document.getElementById("messagebuffer").childNodes.forEach(function(chatmessage){
//	if (chatmessage.childElementCount == 2) {
	  chatmessage.innerHTML = chatmessage.innerHTML.replace(/Ð.+Ð/,"");
//	} 
});
