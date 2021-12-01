let arr =new Array;
arr.push(
    ['Tên thông báo','20/11/2021','Sử dụng thuộc tính text-align CSS để căn lề trái, căn lề phải và thuộc tính vertical-align để căn lề trên, dưới','1'],
    ['Đơn hàng đã thanh toán','1/1/1999', 'Dữ liệu ghi ở đây', '0'],
    ['Sử dụng ','Chỗ này điền ngày ','Chỗ này điền nội dung thông báo , ô đằng sau là xét xem đã đọc hay chứa (1 là đã đọc 0 là chưa đọc)','1'],
    ['4','4', '5', '0'],
    ['Tên thông báo','20/11/2021','Sử dụng thuộc tính text-align CSS để căn lề trái, căn lề phải và thuộc tính vertical-align để căn lề trên, dưới','1'],
    ['2','4', '5', '0'],
    ['3','2','3','1'],
    ['4','4', '5', '0'],
    ['Tên thông báo','20/11/2021','Sử dụng thuộc tính text-align CSS để căn lề trái, căn lề phải và thuộc tính vertical-align để căn lề trên, dưới','1'],
    ['2','4', '5', '0'],
    ['3','2','3','1'],
    ['4','4', '5', '0']
);

var cout = 5;
const box = document.querySelector(".box");

function load(){
    box.innerHTML='';
    if(arr.length == 0){
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
         arr.push(
        ['Thông báo của bạn rỗng',date, 'Bạn chưa có thông báo nào!', '1']);
    }
    for(let i = 0 ; i < arr.length && i < cout; i++){
        const list =  document.createElement('div');
        list.classList.add('list');

        box.appendChild(list);
        
        const title = document.createElement('div');
        title.classList.add('noti');
        title.innerText='* '+arr[i][0];
        list.appendChild(title);
        title.addEventListener('click',(e)=>{
            arr[i][3] = '1';
            list.style.backgroundColor= "whitesmoke";

        })

        const date = document.createElement('div');
        date.classList.add('date');
        date.innerText = arr[i][1];
        list.appendChild(date);


        const dell = document.createElement('div');
        dell.innerText ='xóa';
        dell.classList.add('dell');
        list.appendChild(dell);
        dell.addEventListener('click', (e)=>{
            var x= window.confirm('Bạn chắc chắn  muốn xóa thông báo này ?');
            if (x == true){
            for( let j =i ; j< arr.length-1; j++){
                arr[j] = arr[j+1];
                // window.alert("hgjhj");
            }
            arr.pop();
            // list.remove(list);
            load();
        }
        });

        const data = document.createElement('div');
        data.classList.add('data');
        data.innerText=arr[i][2];
        list.appendChild(data);
        if(arr[i][3] == 0){
            list.style.backgroundColor= "#C0C0C0";
        }
       
    }
    if (cout < arr.length){
        const add = document.createElement('div');
        add.classList.add('add');
        add.innerText= 'Hiện thêm';
        box.appendChild(add);
        add.addEventListener('click', (e) =>{
            cout = cout +5;
            load();
        })

    }
}


load();
function clearall(){
    const x =window.confirm('Bạn có chắc chắn muốn xóa toàn bộ thông báo ?');
    if( x== true){
        arr.length = 0;
        load();
    }
}

function checkall(){
    const x = window.confirm('Bạn chắc chắn muốn đánh dấu đã đọc tất cả ?');

    if( x == true){
        for(var i =0; i <arr.length; i++){
            arr[i][3] = '1';
        }
        load();
    

    }
}