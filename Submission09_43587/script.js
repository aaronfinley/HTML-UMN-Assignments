$('.btnDetails').on('click',function(){
	let name = $(this).closest('.col-item').find('#name').text();
    let price = $(this).closest('.col-item').find('#price').text();
    let rating = $(this).closest('.col-item').find('#rating').find('i');
    let image = $(this).closest('.col-item').find('#image').attr('src');
	$('.modal-body').find('#name').text(name);

	//LENGKAPIN PAKE HARGA, RATING, DKK
})

$('.btnAdd').on('click',function(){
	let name = $(this).closest('.col-item').find('#name').text();
    let price = $(this).closest('.col-item').find('#price').text();
    let rating = $(this).closest('.col-item').find('#rating').find('i');
	//LENGKAPIN PAKE HARGA, RATING, DKK

	let no = document.createElement('td');
    no.innerHTML = '';

    let nameCol = document.createElement('td');
    nameCol.innerHTML = name;

    let priceCol = document.createElement('td');
    priceCol.innerHTML = price;

    let ratingCol = document.createElement('td');
    for(let i=0; i<rating.length; i++)
    {
        ratingCol.appendChild(document.createTextNode('\u2B50'));
    }

	//LENGKAPIN PAKE KOLOM HARGA, RATING, DKK

	let newRow = document.createElement('tr');
    newRow.appendChild(no);
    newRow.appendChild(nameCol);
    newRow.appendChild(priceCol);
    newRow.appendChild(ratingCol);

    let tbody = document.getElementById('tableData').querySelector('tbody');
    tbody.innerHTML = '';
    tbody.appendChild(newRow);
})

$(document).ready(function()
{
    $('.btnDetails').on('click',function(e)
    {
        let productModal = $('#productModal')
        productModal.modal('show')
    })
});