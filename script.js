document.getElementById('new-seg').addEventListener('click', function(){
    document.getElementById('seg-window').style.display = 'flex';
});

document.getElementById('icon-box').addEventListener('click', function(){
    document.getElementById('table-window').style.display = 'flex';
});

document.getElementById('new-icon').addEventListener('click', function(){
    document.getElementById('table-window').style.display = 'flex';
});

document.getElementById('seg-cancel').addEventListener('click', function(){
    document.getElementById('seg-window').style.display = 'none';
});

document.getElementById('table-cancel').addEventListener('click', function(){
    document.getElementById('table-window').style.display = 'none';
});

document.getElementById('closing').addEventListener('click', function(){
    document.getElementById('table-window').style.display = 'none';
});

document.getElementById('cross').addEventListener('click', function(){
    console.log('in cross')
    document.getElementById('seg-window').style.display = 'none';
});