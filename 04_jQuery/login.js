
$('#user_id').keyup(function(){
  var userId = $(this).val();  
  if(userId.length === 0){
    $('#user_id_msg').text('');
  }else if(userId.length < 4){
    $('#user_id_msg').text('아이디는 4자 이상입니다.');
  }else{
    $('#user_id_msg').text('정상적인 아이디입니다.');
  }
});


$('#frm1').submit(function(event){
  var userId = $('#user_id').val();  
  if(userId.length < 4){
    alert('아이디를 확인하세요.');
    event.preventDefault();  
    return;                 
  }
  var userPw = $('#user_pw').val(); 
  if(userPw.length === 0){
    alert('비밀번호를 입력하세요.');
    event.preventDefault();  
    return;                  
  }
})





<div>
<form id="frm2" method="post" action="aaaa">
  <div>
    <input type="text" id="id">
  </div>
  <div>
    <input type="password" id="pw">
  </div>
  <div>
    <button type="submit">로그인</button>
  </div>
</form>
</div>
<script>


$('#id').keyup(function(){
  var id = $(this).val();  
  if(id.length > 6){
    alert('ID는 6글자 이하입니다.');
    $(this).val( id.substring(0,6) );
  }
})

// 입력된 내용을 전송하는 submit 이벤트
$('#frm2').submit(function(event){

  var now = new Date();
  var hour = now.getHours();
  if(hour >= 23){
    alert('23:00 ~ 24:00 사이 시스템 점검으로 로그인이 제한됩니다.');
    event.preventDefault();
    return;
  }
  
  var id = $('#id').val();
  var pw = $('#pw').val();
  if(id.length === 0 || pw.length === 0){
    alert('아이디와 비밀번호를 모두 입력하세요.');
    event.preventDefault();
    return;
  }
})

</script>


