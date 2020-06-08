create table book (
    id int not null auto_increment primary key,
    isbn varchar(20) not null,
    openid varchar(50) not null,
    title varchar(100) not null,
    image varchar(100),
    alt varchar(100) not null,
    publisher varchar(100) not null,
    summary varchar(1000) not null,
    price varchar(100),
    rate float,
    tags varchar(100),
    author varchar(100)
)

create table comments (
    id int not null auto_increment primary key,
    openid varchar(50) not null,
    bookid varchar(10) not null,
    comment varchar(200) not null,
    phone varchar(50),
    location varchar(50)
)

create table attendance (
    id int not null auto_increment primary key,
    userid varchar(100) not null,
    late_count varchar(100) ,
    leave_count varchar(100),
    sign_count varchar(100),
    overtime_count varchar(100),
    ask_leave int,
    ask_leave_reason varchar(200),
    apply_overtime int,
    sign_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    image varchar(100),
    remark varchar(100)
)

create table sign (
    id int not null auto_increment primary key,
    userid varchar(100) not null,
    sign_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    image varchar(100),
    count int not null,
    remark varchar(100)
)


create table sell (
    id int not null auto_increment primary key,
    userid varchar(100) not null,
    goods_id varchar(100) not null,
    price float not null,
    sell_count varchar(100) not null,
    favorable varchar(100),
    negative varchar(100),
    favorable_rate float,
    saleroom float not null,
    performance varchar(100),
    rank int not null
)
