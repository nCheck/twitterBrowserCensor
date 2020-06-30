
async function cleanTweets() {
    
    //this is html n css for each tweet
    //the tweet is inside a div with given css and inside span, there are text
    console.log("getting data");

    var dads = $("div.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1ny4l3l.r-1udh08x.r-1j3t67a");
    
    var dirty_data = []

    //we collect the span txts with id, because we need to know how to replace it
    dads.each( function (id) {
        var txt = $(this).text();
        dirty_data.push({id,'text': txt});
    });

    //send data for cleaning
    //JSON.stringify()
    
    console.log("posttting the data" , dirty_data );
    //post only if you actually collected the data
    if ( dirty_data.length > 0 ){
        
        const SERVER = "http://4dfb65ce33e9.ngrok.io/";
        var dict = {"data":dirty_data};
        console.log('dict->', dict);
        $.ajax({
            type: "POST", 
            url: SERVER + "test", //localhost Flask
            data : JSON.stringify(dict),
            async: false,
            contentType: "application/json",
            success: function(data){

                console.log("server responded", data);

                for( var i = 0 ; i < data.length ; i++ ){
                    var ele = data[i][0]
                    console.log("ele is", i , ele)
                    var id = ele['id'];
                    var ntxt = ele['text']
                    //Hide the Given Tweet
                    dads.eq(id).hide();
                    console.log("hidded ", dads.eq(id).text() , 'at id' , id) ;
                }

            }
        });

    }


    //function will keep running continuesly every 15
    setTimeout(cleanTweets,15000)

}

//call the function
cleanTweets();