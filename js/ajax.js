$(document).ready(function(){
	$('#cotiza').submit(function(event){
			event.preventDefault();

			var nombre=$("#nombre").val();

	        if (nombre=="") {
	        	$( "#errornombre" ).show();
	            $( "#errornombre" ).css("color", "red");
	            $( "#errornombre" ).html("*Favor de teclear el nombre");
	            return false;
	        }
	        $( "#errornombre" ).hide();
			var data=$(this).serializeArray();

			data.push({name: 'tag', value: 'cotiza'});
			$.ajax({
				url: 'cotiza.php',
				type: 'post',
				dataType: 'html',
				data: data,
				beforeSend: function(){
					$('.icospin').css('display', 'inline');
				},
				success: function(resultado){
        			$("#result").html(resultado); }
			})
		})
	})