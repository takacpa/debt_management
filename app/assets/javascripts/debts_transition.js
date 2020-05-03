$(document).on("turbolinks:load",function(){
  var firstClick = true
  $('.main__contents__table__record__cell--button').on('click', function(e){
    e.preventDefault();
    if(firstClick){
    var html = `<tr class="main__contents__table__record--detail add">
                  <td class="main__contents__table__record__cell--detail--sticky" colspan="2">みずほ新規借入5000万円</td>
                  <td class="main__contents__table__record__cell--detail">50,000</td>
                  <td class="main__contents__table__record__cell--detail">48,000</td>
                  <td class="main__contents__table__record__cell--detail">46,000</td>
                  <td class="main__contents__table__record__cell--detail">44,000</td>
                  <td class="main__contents__table__record__cell--detail">42,000</td>
                  <td class="main__contents__table__record__cell--detail">40,000</td>
                  <td class="main__contents__table__record__cell--detail">38,000</td>
                  <td class="main__contents__table__record__cell--detail">36,000</td>
                  <td class="main__contents__table__record__cell--detail">34,000</td>
                  <td class="main__contents__table__record__cell--detail">32,000</td>
                  <td class="main__contents__table__record__cell--detail">30,000</td>
                  <td class="main__contents__table__record__cell--detail">28,000</td>
                </tr>
                <tr class="main__contents__table__record--detail add">
                  <td class="main__contents__table__record__cell--detail--sticky" colspan="2">みずほ新規借入5000万円</td>
                  <td class="main__contents__table__record__cell--detail">50,000</td>
                  <td class="main__contents__table__record__cell--detail">48,000</td>
                  <td class="main__contents__table__record__cell--detail">46,000</td>
                  <td class="main__contents__table__record__cell--detail">44,000</td>
                  <td class="main__contents__table__record__cell--detail">42,000</td>
                  <td class="main__contents__table__record__cell--detail">40,000</td>
                  <td class="main__contents__table__record__cell--detail">38,000</td>
                  <td class="main__contents__table__record__cell--detail">36,000</td>
                  <td class="main__contents__table__record__cell--detail">34,000</td>
                  <td class="main__contents__table__record__cell--detail">32,000</td>
                  <td class="main__contents__table__record__cell--detail">30,000</td>
                  <td class="main__contents__table__record__cell--detail">28,000</td>
                </tr>`;
    var clickRow = $(this).parent();
    clickRow.after(html);
    firstClick = false;
  }else{
    $(".add").remove()
    firstClick = true;
  }

  })
})