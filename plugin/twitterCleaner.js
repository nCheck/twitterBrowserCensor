
async function cleanTweets() {
    
    //this is html n css for each tweet
    //the tweet is inside a div with given css and inside span, there are text
    var dads = $("div.css-901oao.r-hkyrab.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0").children('span');
    var dirty_data = []

    //we collect the span txts with id, because we need to know how to replace it
    dads.each( function (id) {
        var txt = $(this).text();
        dirty_data.push({id,txt});
    });

    //send data for cleaning
    //JSON.stringify()
    
    console.log("posttting the data" )
    //post only if you actually collected the data
    if ( dirty_data.length > 0 ){

        var dict = {"data":dirty_data};

        $.ajax({
            type: "POST", 
            url: "http://localhost:5000/test", //localhost Flask
            data : JSON.stringify(dict),
            async: false,
            contentType: "application/json",
            success: function(data){

                console.log("server responded", data);

                for( var i = 0 ; i < data.length ; i++ ){
                    var ele = data[i]
                    var id = ele['id'];
                    var ntxt = ele['txt']
                    //update the span text with the cleaned span text
                    dads.eq(id).text(ntxt)
                    console.log("updated ", dads.eq(id).text());
                }

            }
        });

    }


    //function will keep running continuesly every 15
    setTimeout(cleanTweets,15000)

}

//call the function
cleanTweets();