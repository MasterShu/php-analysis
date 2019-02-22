<?php

$a = 'hello';
echo $a;
// p $2.value.str
// $3 = (zend_string *) 0x7ffff5e6f480
// p *$2.value.str.val@5
// $5 = "hello"

$b = 'hello';
echo $b;
// p $7.value.str
// $8 = (zend_string *) 0x7ffff5e6f480
// p *$7.value.str.val@5
// $10 = "hello"

$c = $b;
echo $c;
// p $11.value.str
// $12 = (zend_string *) 0x7ffff5e6f480
// p *$11.value.str
// $13 = {gc = {refcount = 1, u = {type_info = 70}}, h = 9223372247569412249, len = 5, val = "h"}
// p *$11.value.str.val@5
// $14 = "hello"

$c = 'hello1';
echo $c;
// p $16.value.str
// $17 = (zend_string *) 0x7ffff5e6f4c0
// p *$16.value.str
// $18 = {gc = {refcount = 1, u = {type_info = 70}}, h = 9223378990437778410, len = 6, val = "h"}
// p *$16.value.str.val@6
// $19 = "hello1"