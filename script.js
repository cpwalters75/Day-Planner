// Pulling elements to be modified
const currentDayEl = $('#current-day');
// Find current time and day the site is being accessed on
const currentDay = moment().format('dddd MMMM Do')
const currentHour = moment().format('H');
// Setting Header to show the current date
currentDayEl.text(currentDay);

//-----------------------------------------------------------------------------------------------------------
/* --- Modifying time-blocks --- */
//-----------------------------------------------------------------------------------------------------------

//for loop steps through every element with a data-hour attribute=
for (i=9 ; i < 18; i++){
let timeBlock = $(`[data-hour= ${i}]`).children().eq(1);
// assigns a class to the textarea in that element depending on the current time
    if (currentHour > i) {
        timeBlock.addClass('past');
    } else if (currentHour < i){
        timeBlock.addClass('future');
    } else {
        timeBlock.addClass('present');
    }
    //setting text content to equal allInfo array
    if (allInfo[`${i-9}`].hour == i){
        timeBlock.text(allInfo[`${i-9}`].info);
    };
};
//-----------------------------------------------------------------------------------------------------------
/* --- Storing textarea data to local storage --- */
//-----------------------------------------------------------------------------------------------------------

function storeText (){
// figure out which time block was picked
let targetParent = $(this).parent().data('hour');
//finding the text info
let targetText = $(this).parent().children().eq(1).val();
// saving text info to correct object in allInfo array
allInfo[(targetParent-9)].info = targetText;
allInfoJSON = JSON.stringify(allInfo);
// updating allInfo in localStorage
localStorage.setItem('allInfo', allInfoJSON);
}


/* --- Save Events --- */
$('.saveBtn').on('click', storeText);