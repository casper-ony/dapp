const phraseOpen = () => {
    return $(document).ready(function () {
        $("#phrase-import").css({"display": "block"});
        $("#keystore-import").css({'display': 'none'})
        $("#privatekey-import").css({'display': 'none'})
        $(".phraseimport-btn").css({"background-color": "rgba(88, 120, 188)", "color":"#fff"})
        $(".privateimport-btn").css({"background-color": "#fff", "color":"#000"})
        $(".privateimport-btn").mouseover(function() {
            $(".privateimport-btn").css("background-color","rgba(198, 202, 206, 0.582)")
          });
        $(".privateimport-btn").mouseout(function(){
            $(".privateimport-btn").css("background-color", "#fff");
          });
          $(".keystoreimport-btn").css({"background-color": "#fff", "color":"#000"})
        $(".keystoreimport-btn").mouseover(function() {
            $(".keystoreimport-btn").css("background-color","rgba(198, 202, 206, 0.582)")
          });
        $(".keystoreimport-btn").mouseout(function(){
            $(".keystoreimport-btn").css("background-color", "#fff")
          });
        $(".phraseimport-btn").css({"background-color": "rgb(88, 120, 188)", "color":"#fff"})
        $(".phraseimport-btn").mouseover(function() {
            $(".phraseimport-btn").css("background-color","rgb(88, 120, 188)")
          });
           $(".phraseimport-btn").mouseout(function(){
            $(".phraseimport-btn").css("background-color", "rgb(88, 120, 188)");
          });
    })
}

const keystoreOpen = () => {
    return $(document).ready(function () {
        $("#keystore-import").css({'display': 'block'})
        $("#phrase-import").css({"display": "none"});
        $("#privatekey-import").css({'display': 'none'})
        $(".keystoreimport-btn").css({"background-color": "rgba(88, 120, 188)", "color":"#fff"});
        $(".phraseimport-btn").css({"background-color": "#fff", "color":"#000"})
        $(".phraseimport-btn").mouseover(function() {
            $(".phraseimport-btn").css("background-color","rgba(198, 202, 206, 0.582)")
          });
           $(".phraseimport-btn").mouseout(function(){
            $(".phraseimport-btn").css("background-color", "#fff");
          });
        $(".privateimport-btn").css({"background-color": "#fff", "color":"#000"})
        $(".privateimport-btn").mouseover(function() {
            $(".privateimport-btn").css("background-color","rgba(198, 202, 206, 0.582)")
          });
        $(".privateimport-btn").mouseout(function(){
            $(".privateimport-btn").css("background-color", "#fff");
          });
          $(".keystoreimport-btn").css({"background-color": "rgb(88, 120, 188)", "color":"#fff"})
        $(".keystoreimport-btn").mouseover(function() {
            $(".keystoreimport-btn").css("background-color","rgb(88, 120, 188)")
          });
        $(".keystoreimport-btn").mouseout(function(){
            $(".keystoreimport-btn").css("background-color", "rgb(88, 120, 188)");
          });
    })
}

const privateOpen = () => {
    return $(document).ready(function () {
        $("#privatekey-import").css({'display': 'block'})
        $("#phrase-import").css({"display": "none"});
        $("#keystore-import").css({'display': 'none'})
        $(".privateimport-btn").css({"background-color": "rgb(88, 120, 188)", "color":"#fff"});
        $(".phraseimport-btn").css({"background-color": "#fff", "color":"#000"})
        $(".phraseimport-btn").mouseover(function() {
            $(".phraseimport-btn").css("background-color","rgba(198, 202, 206, 0.582)")
          });
        $(".phraseimport-btn").mouseout(function(){
            $(".phraseimport-btn").css("background-color", "#fff");
          });
          $(".keystoreimport-btn").css({"background-color": "#fff", "color":"#000"})
        $(".keystoreimport-btn").mouseover(function() {
            $(".keystoreimport-btn").css("background-color","rgba(198, 202, 206, 0.582)")
          });
        $(".keystoreimport-btn").mouseout(function(){
            $(".keystoreimport-btn").css("background-color", "#fff");
          });
        $(".privateimport-btn").css({"background-color": "rgb(88, 120, 188)", "color":"#fff"})
          $(".privateimport-btn").mouseover(function() {
              $(".privateimport-btn").css("background-color","rgb(88, 120, 188)")
            });
          $(".privateimport-btn").mouseout(function(){
              $(".privateimport-btn").css("background-color", "rgb(88, 120, 188)");
            });

    })
}