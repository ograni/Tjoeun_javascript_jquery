// bannerconfig.js

var NS4 = (document.layers) ? true : false;
var IE4 = (document.all) ? true : false;

var interval = 20;
var increment = 1;
var pause = 1300;
var bannerColor = "ffffff";
var leftPadding = 2;
var topPadding = 1;

var bannerLeft = (NS4) ? document.images.holdspace.x :
  holdspace.offsetLeft;
var bannerTop = (NS4) ? document.images.holdspace.y :
  holdspace.offsetTop;
var bannerWidth = (NS4) ? document.images.holdspace.width :
  holdspace.width;
var bannerHeight = (NS4) ? document.images.holdspace.height :
  holdspace.height;

var ar = new Array(
  '<center><tt><font color="#23238e" size=2><b>2001��1��9��</B> : ���� ������ ǥ���ϱ⿡ �����ϴ�.</center>',
  '<center><tt><font color="#23238e" size=2><font color="red"><b>2001��1��10��</B></font> : �����Ӱ� ������ ������ �� �ֽ��ϴ�.</center>',
  '<center><tt><font color="#23238e" size=2><b>2001��1��11��</B> : ���� ȿ�� �Դϴ�. </center>', 
  '<center><tt><font color="#23238e" size=2><b>2001��1��12��</B> : ������ ������ �߰��� �� �ֽ��ϴ�.</center>'
);