/*
	2018-01-05
	����(���) : ij.choi
	������(�̿�ȳ�, ���ſϷ� �˾�) : mr.kim
*/

var AsianaSavingMall = {
	resourcePath: "",
	linkPath: "",
	mallName: "",			// ���޻��
	mallCode: "",			// ���޻��ڵ�
	encodedMallName: "",	// encoded ���޻��
	logoYn: "",				// ���޻� �ΰ� ����
	mobileYn: "",			// ����̽� mobile
	currentPathProtocol: "",
	savingTopHtml: "",
	useTopHtml: "",
	headerVer: "",

	//�ϸ�ũ
	bookMark: function(title, url){
		//������ üŷ
		var browser = {
			a: navigator.userAgent.toLowerCase()
		};

		browser = {
			//MS IE
			ie : browser.a.indexOf('msie') != -1
			//opera
			, opera : !!window.opera
			//safari
			, safari : browser.a.indexOf('safari') != -1
			//apple
			, safari3 : browser.a.indexOf('applewebkit/5') != -1
			, mac : browser.a.indexOf('mac') != -1
			//chrome
			, chrome : browser.a.indexOf('chrome') != -1
			//firefox
			, firefox : browser.a.indexOf('firefox') != -1
		};

		if(browser.ie){
			window.external.AddFavorite(url, title);
		}else if(browser.opera
				|| browser.safari
				|| browser.safari3
				|| browser.chrome
				|| browser.firefox){
			alert("Ctrl(Commend) + DŰ�� �����ø� ���ã�⿡ �߰��Ͻ� �� �ֽ��ϴ�.");
		}else{
			alert('�ڵ� ���ã�⸦ �������� �ʴ� ������ �Դϴ�.\n������ �޴��� ���ã��(�ϸ�ũ) �޴��� ���� �߰����ּ���.');
		}
	},
	//��� ������ html ����
	setTopHtml1: function(){
		//������
		var savingTopHtml = "";
		//����
		var useTopHtml = "";
		//����(���޻� �ΰ� �̹���, ��ũ ���� �ʿ� 2018-01-05 ij.choi)
		useTopHtml +="<div style=\"display:block;position:relative;\">";
		useTopHtml +="	<div style=\"display:block;position:relative;border-bottom:1px solid #ddd;background:#fff;\">";
		useTopHtml +="		<div style=\"display:block;position:relative;padding:0 30px;\">";
		useTopHtml +="			<h1 style=\"margin:0;display:block;position:relative;height:80px;padding-top:10px;box-sizing:border-box;\">";
		useTopHtml +="				<a href=\"#\" title=\"ASIANA AIRLINES ���ϸ��� ���� ������ �̵�\" onclick=\"javascript:fncGoUseMileageMall();return false;\" style=\"display:inline-block;margin-right:36px;\">";
		useTopHtml +="					<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/img_use_mileage_logo.png\" alt=\"ASIANA AIRLINES ���ϸ��� ����\" style=\"vertical-align:middle;\">";
		useTopHtml +="				</a>";

		//���޻���� �̵��ϴ� ��ũ ����
		if(AsianaSavingMall.logoYn == "Y") {
			useTopHtml +="				<a href=\"#\" title=\""+this.mallName+"\" ���޻�� ������ �̵�\" style=\"display:inline-block;margin-right:36px;\">";
			useTopHtml +="					<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/partnerHeader/"+this.mallCode+".jpg\" alt=\""+this.mallName+" ���ϸ��� ����\" style=\"border:0px; vertical-align:middle;\">";
			useTopHtml +="				</a>";
		}
		useTopHtml +="			</h1>";
		useTopHtml +="		</div>";
		useTopHtml +="	</div>";
		useTopHtml +="	<div style=\"display:block;position:relative;padding:12px 0;border-bottom:1px solid #ddd;font-size:13px;font-family:'Dotum', sans-serif;background-color:#e8ebf0;\">";
		if(this.mallCode == "OZLOGO" || this.mallCode == "OZDUTY"){
			useTopHtml +="		<div style=\"display:block;position:relative;padding:0 30px;\">�ϴ� ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</div>";	
		}else{
			useTopHtml +="		<div style=\"display:block;position:relative;padding:0 30px;\">�ƽþƳ��װ��� ����Ǹ��߰��ڷ� �ϴ� ��ǰ�� ���� �����ϰų� ������ å���� ���� ������, ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</div>";
		}
		useTopHtml +="	</div>";
		useTopHtml +="</div>";

		//������(���޻� �ΰ� �̹���, ��ũ ���� �ʿ� 2018-01-10 ij.choi)
		savingTopHtml += "<div style=\"display:block;position:relative;\">";
		savingTopHtml += "<div style=\"display:block;position:relative;border-bottom:1px solid #ddd;background:#fff;\">";
		savingTopHtml += "	<div style=\"display:block;position:relative;padding:0 30px;\">";
		savingTopHtml += "		<h1 style=\"margin:0;display:block;position:relative;height:80px;padding-top:10px;box-sizing:border-box;\">";
		savingTopHtml += "			<a href=\"#\" title=\"ASIANA AIRLINES ���ϸ��� ������ ������ �̵�\" onclick=\"javascript:fncGoEarnMileageMall();return false;\" style=\"display:inline-block;margin-right:36px;\" >";
		savingTopHtml += "				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/img_saving_mileage_logo.png\" alt=\"ASIANA AIRLINES ���ϸ��� ������\" style=\"border:0px; vertical-align:middle;\">";
		savingTopHtml += "			</a>";

		//���޻���� �̵��ϴ� ��ũ ����
		if(AsianaSavingMall.logoYn == "Y") {
			savingTopHtml += "			<a href=\"#none\" title=\""+this.mallName+"\" ���޻�� ������ �̵�\" style=\"display:inline-block;margin-right:36px;\">";
			savingTopHtml += "				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/partnerHeader/"+this.mallCode+".jpg\" alt=\""+this.mallName+" ���ϸ��� ������\" style=\"border:0px; vertical-align:middle;\">";
			savingTopHtml += "			</a>";
		}
		savingTopHtml += "		</h1>";
		savingTopHtml += "		<button type=\"button\" id=\"asiana_"+this.mallCode+"\" onmouseover=\"AsianaSavingMall.mouseover('asiana_"+this.mallCode+"');\" onmouseout=\"AsianaSavingMall.mouseout('asiana_"+this.mallCode+"');\" onclick=\"AsianaSavingMall.popupInfo();\" style=\"position:absolute;top:20px;right:30px;background:transparent;cursor:pointer;border:1px solid #cccccc;background-color:#fff;color:#000;border-radius:3px;text-align:center;padding:0 20px;height:40px;font-size:14px;line-height:15px;\">�̿�ȳ�</button>";
		savingTopHtml += "	</div>";
		savingTopHtml += "</div>";
		savingTopHtml += "<div style=\"display:block;position:relative;padding:12px 0;border-bottom:1px solid #ddd;font-size:13px;font-family:'Dotum', sans-serif;background-color:#e8ebf0;\">";
		savingTopHtml += "	<div style=\"display:block;position:relative;padding:0 30px;\">�ƽþƳ��װ��� ����Ǹ��߰��ڷ� �ϴ� ��ǰ�� ���� �����ϰų� ������ å���� ���� ������, ��ǰ �Ǹſ� ������ å���� ��"+this.mallName +"���� �ֽ��ϴ�.</div>";
		savingTopHtml += "</div>";
		savingTopHtml += "</div>";

		AsianaSavingMall.useTopHtml = useTopHtml;
		AsianaSavingMall.savingTopHtml = savingTopHtml;
	},
	//��� ������ html ����
	setTopHtml2: function(){
		//������
		var savingTopHtml = "";
		//����
		var useTopHtml = "";
		//����()
		useTopHtml +="<style>#AsianaSavingMallHeader #AsianaSavingmallPc {display: block;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: none;}";
		useTopHtml +="	@media screen and (max-width:1025px){#AsianaSavingMallHeader #AsianaSavingmallPc {display: none;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: block;}}</style>";
		useTopHtml +="<div id=\"AsianaSavingMallHeader\">";
		useTopHtml +="<div id=\"AsianaSavingmallPc\" style=\"position: relative;height: 50px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_pc_mileage_bg.jpg') no-repeat right top #e6e2df;\">";
		useTopHtml +="	<div id=\"AsianaSavingmallPc\" style=\"display: block;padding: 0px 30px 0 160px;font-size: 0;\">";
		useTopHtml +="		<h1 style=\"position: absolute;top: 7px;left: 30px;\">";
		useTopHtml +="			<a href=\"#\" onclick=\"javascript:fncGoUseMileageMall();return false;\" style=\"display: block;\" title=\"ASIANA AIRLINES ���ϸ��� ���� ������ �̵�\">";
		useTopHtml +="				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/new_img_logo.png\" alt=\"ASIANA AIRLINES\" >";
		useTopHtml +="			</a>";
		useTopHtml +="		</h1>";
		useTopHtml +="		<div style=\"display:table;width:100%;height:50px;font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size: 0;\">";
		useTopHtml +="			<div style=\"display: table-cell;vertical-align: middle;\">";
		useTopHtml +="				<i style=\"display: inline-block;vertical-align: middle;background-color: #c1c0c0;width: 1px;height: 14px;font-size:13px;margin: 0 10px 0 25px;\"></i>";
		if(this.mallCode == "OZLOGO" || this.mallCode == "OZDUTY"){
			useTopHtml +="			<span style=\"display: inline-block;vertical-align: middle;font-size:13px;width: 90%;\">�ϴ� ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</span>";	
		}else{
			useTopHtml +="			<span style=\"display: inline-block;vertical-align: middle;font-size:13px;width: 90%;\">�ƽþƳ��װ��� ����Ǹ��߰��ڷ� �ϴ� ��ǰ�� ���� �����ϰų� ������ å���� ���� ������, ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</span>";
		}
		useTopHtml +="			</div>";
		useTopHtml +="		</div>";
		useTopHtml +="	</div>";
		useTopHtml +="</div>";

		useTopHtml +="<div id=\"AsianaSavingmallMo\" style=\"position: relative;height: 60px;background-color:#e6e2df;\">";
		useTopHtml +="	<div style=\"position: relative;padding: 0 10px 0 10px;height: 52px;display: flex;align-items: center;\">";
		if(this.mallCode == "OZLOGO" || this.mallCode == "OZDUTY"){
			useTopHtml +="		<div style=\"font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size:11px;line-height: 1.3;\">�ϴ� ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</div>";	
		}else{
			useTopHtml +="		<div style=\"font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size:11px;line-height: 1.3;\">�ƽþƳ��װ��� ����Ǹ��߰��ڷ� �ϴ� ��ǰ�� ���� �����ϰų� ������ å���� ���� ������, ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</div>";
		}
		useTopHtml +="	</div>";
		useTopHtml +="	<div style=\"width: 100%;height: 8px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_mo_mileage_bg.jpg') no-repeat right top #bababa;background-size: cover;position: absolute;bottom: 0;left: 0;\"></div>";
		useTopHtml +="</div>";
		useTopHtml +="</div>";

		//������()
		savingTopHtml +="<style>#AsianaSavingMallHeader #AsianaSavingmallPc {display: block;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: none;}";
		savingTopHtml +="	@media screen and (max-width:1025px){#AsianaSavingMallHeader #AsianaSavingmallPc {display: none;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: block;}}</style>";
		savingTopHtml +="<div id=\"AsianaSavingMallHeader\">";
		savingTopHtml +="<div id=\"AsianaSavingmallPc\" style=\"position: relative;height: 50px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_pc_mileage_bg.jpg') no-repeat right top #e6e2df;\">";
		savingTopHtml +="	<div style=\"display: block;padding: 0px 115px 0 160px;font-size: 0;\">";
		savingTopHtml +="		<h1 style=\"position: absolute;top: 7px;left: 30px;\">";
		savingTopHtml +="			<a href=\"#\" onclick=\"javascript:fncGoEarnMileageMall();return false;\" style=\"display: block;\" title=\"ASIANA AIRLINES ���ϸ��� ������ ������ �̵�\">";
		savingTopHtml +="				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/new_img_logo.png\" alt=\"ASIANA AIRLINES\" >";
		savingTopHtml +="			</a>";
		savingTopHtml +="		</h1>";
		savingTopHtml +="		<div style=\"display:table;width:100%;height:50px;font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size: 0;\">";
		savingTopHtml +="			<div style=\"display: table-cell;vertical-align: middle;\">";
		savingTopHtml +="				<i style=\"display: inline-block;vertical-align: middle;background-color: #c1c0c0;width: 1px;height: 14px;font-size:13px;margin: 0 10px 0 25px;\"></i>";
		savingTopHtml +="			<span style=\"display: inline-block;vertical-align: middle;font-size:13px;width: 90%;\">�ƽþƳ��װ��� ����Ǹ��߰��ڷ� �ϴ� ��ǰ�� ���� �����ϰų� ������ å���� ���� ������, ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</span>";
		savingTopHtml +="			</div>";
		savingTopHtml +="		</div>";
		savingTopHtml +="		<button type=\"button\" style=\"position:absolute;top:12px;right:30px;background:transparent;cursor:pointer;border:1px solid #fff;color:#fff;border-radius:3px;text-align:center;padding:0 10px;height:25px;font-size:13px;line-height:15px;letter-spacing: -1px;\"onclick=\"AsianaSavingMall.popupInfo();\">�̿�ȳ�</button>";
		savingTopHtml +="	</div>";
		savingTopHtml +="</div>";

		savingTopHtml +="<div id=\"AsianaSavingmallMo\" style=\"position: relative;height: 60px;background-color:#e6e2df;\">";
		savingTopHtml +="	<div style=\"position: relative;padding: 0 85px 0 10px;height: 52px;display: flex;align-items: center;\">";
		savingTopHtml +="		<div style=\"font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size:11px;line-height: 1.3;\">�ƽþƳ��װ��� ����Ǹ��߰��ڷ� �ϴ� ��ǰ�� ���� �����ϰų� ������ å���� ���� ������, ��ǰ �Ǹſ� ������ å���� ��"+this.mallName+"���� �ֽ��ϴ�.</div>";
		savingTopHtml +="		<button type=\"button\" style=\"position:absolute;top:50%;right:10px;margin-top:-12px;background:transparent;cursor:pointer;border:1px solid #73716f;color:#000;border-radius:3px;text-align:center;padding:0 8px;height:25px;font-size:12px;line-height:1;letter-spacing: -1px;\" onclick=\"AsianaSavingMall.popupInfo();\">�̿�ȳ�</button>";
		savingTopHtml +="	</div>";
		savingTopHtml +="	<div style=\"width: 100%;height: 8px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_mo_mileage_bg.jpg') no-repeat right top #bababa;background-size: cover;position: absolute;bottom: 0;left: 0;\"></div>";
		savingTopHtml +="</div>";
		savingTopHtml +="</div>";

		AsianaSavingMall.useTopHtml = useTopHtml;
		AsianaSavingMall.savingTopHtml = savingTopHtml;
	},

	//��� ����
	printTopHtml: function(){
		//������
		var savingTopHtml = "";
		//����
		var useTopHtml = "";
		//���
		var topHtml = "";
		var topHtmlType = "";

		if(AsianaSavingMall.headerVer == "1") {
			AsianaSavingMall.setTopHtml1();
		} else {
			AsianaSavingMall.setTopHtml2();
		}
		useTopHtml = AsianaSavingMall.useTopHtml;
		savingTopHtml = AsianaSavingMall.savingTopHtml;

		
		var url = AsianaSavingMall.resourcePath + "/pc/image/club/img_alliance_logo.jpg"	// TODO �̹��� ��� ���� ���� �ʿ�

		//TO-BE ����
		if(
			this.mallCode == "OZLOGO"			//	�ƽþƳ� �ΰ�
			|| this.mallCode == "OZDUTY"		//	�ƽþƳ� ���ͳ� �鼼��
			|| this.mallCode == "KHRSRT"		//	��ȣ����Ʈ
			|| this.mallCode == "CGV"			//	CGV
			|| this.mallCode == "ASANSP1"		//	�ƻ꽺�ĺ�
			|| this.mallCode == "HSAQUA1"		//	ȭ������Ƴ�
			|| this.mallCode == "ASIANA1"		//	�׽�Ʈ �ڵ�
			|| this.mallCode == "EVL"			//	��������
			|| this.mallCode == "MTA"			//	�������
		){
			topHtml = useTopHtml;
			topHtmlType = 'U'; //����
		} else if (
				this.mallCode == "HTEJYF"		//	ȣ�ڿ�����
				|| this.mallCode == "EXPEDIA"	//	�ͽ��ǵ��
				|| this.mallCode == "rental"	//	Rentalcars.com
				|| this.mallCode == "LTCAR"		//	�Ե�����ī
				|| this.mallCode == "GMT"		//	G����
				|| this.mallCode == "SKM"		//	11����
				|| this.mallCode == "AUT"		//	����
				|| this.mallCode == "INT"		//	������ũ ����
				|| this.mallCode == "AKM"		//	AK mall
				|| this.mallCode == "CJH"		//	CJ mall
				|| this.mallCode == "GAL"		//	�������Ƹ�
				|| this.mallCode == "GSH"		//	GS SHOP
				|| this.mallCode == "SSM"		//	�ż����
				|| this.mallCode == "LTH"		//	�Ե�����
				|| this.mallCode == "LIM"		//	�Ե�Ȩ����
				|| this.mallCode == "NSE"		//	NS mall
				|| this.mallCode == "ALA"		//	�˶��
				|| this.mallCode == "IPB"		//	������ũ ����
				|| this.mallCode == "KBY"		//	��������
				|| this.mallCode == "YES"		//	YES24
				|| this.mallCode == "EMT"		//	�̸�Ʈ��
				|| this.mallCode == "GDF"		//	�µ��̱��ö��
				|| this.mallCode == "HCL"		//	����Ŭ��
				|| this.mallCode == "LPL"		//	���ö�Ÿ�ö��
				|| this.mallCode == "LGF"		//	LF mall
				|| this.mallCode == "RNJ"		//	���̺�����
				|| this.mallCode == "SKTELINK"	// SK�ڸ�ũ
//				|| this.mallCode == "KTSHOP"	// KT�÷���
				|| this.mallCode == "KTS"		// KT m&s
				|| this.mallCode == "AMC"		// �޸��� ȭ��
				|| this.mallCode == "ASIANA2"	// �׽�Ʈ �ڵ�
				|| this.mallCode == "TIM"		// Ÿ����ī
				|| this.mallCode == "ENO"		// Galaxy S10 �̳븮����
				|| this.mallCode == "BKC"		// ��ŷ����
				|| this.mallCode == "SRM"		// �÷��� ��������
				|| this.mallCode == "CTR"		// Ʈ������
				|| this.mallCode == "DBI"		// DB���غ���
				|| this.mallCode == "CJM"		// CJ������
				|| this.mallCode == "HRC"		// ���뷻Ż�ɾ�
				|| this.mallCode == "INO"		// �ַ��ó�Ʈ
				|| this.mallCode == "WMR"		// �������� ���ö�
				|| this.mallCode == "WKL"		// ����Ƽ��
		){
			topHtml = savingTopHtml;
			topHtmlType = 'S';	//������
		} else {
			alert("���������ʴ� ���޸� �ڵ� : "+ this.mallCode);
			topHtml = '';
		}

		// ��� : mobileYn = "Y" �� �ƴ� ��츸 ����
		if(AsianaSavingMall.headerVer != "1" || AsianaSavingMall.mobileYn != "Y") {
			document.writeln(topHtml);
		}
		// �̿�ȳ� �˾� : ��Ű �˻� && ������ && PC �� ��츸 ����
		if(AsianaSavingMall.getCookie(this.mallCode) != "done" && topHtmlType == 'S') {
			if(AsianaSavingMall.mobileYn != "Y") {
//�����׽�Ʈ�� �ӽ÷� ����
//				AsianaSavingMall.popupInfo();
				AsianaSavingMall.setCookie(this.mallCode, "done" , 1);
			}
		}
	},

	// ��Ű �˻�
	getCookie: function(name) {
		var nameOfCookie = name + "=";
		var x = 0;
		while ( x <= document.cookie.length )
		{
			var y = (x+nameOfCookie.length);
			if ( document.cookie.substring( x, y ) == nameOfCookie ) {
					if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
							endOfCookie = document.cookie.length;
					return unescape( document.cookie.substring( y, endOfCookie ) );
			}
			x = document.cookie.indexOf( " ", x ) + 1;
			if ( x == 0 )
					break;
		}
		return "";
	},

	//�˾�â ũ�� ����
	openWinCenter: function(url, wname, wopt) {
		var newopt = "";
		var wHeight = 0;
		var wWidth = 0;

		if(wopt != undefined){
			var woptlist = wopt.replace(/ /g, "").split(",");

			for(var i=0; i<woptlist.length; i++){
				if(woptlist[i].match(/^height=/i)){
					wHeight = parseInt(woptlist[i].substr(7),10);

					if(!isNaN(wHeight)){
						newopt += "top=" + Math.floor((screen.availHeight - wHeight) / 2) + ",";
					}
				}
				if(woptlist[i].match(/^width=/i)){
					wWidth = parseInt(woptlist[i].substr(6),10);

					if(!isNaN(wWidth)){
						newopt += "left=" + Math.floor((screen.availWidth - wWidth) / 2) + ",";
					}
				}
			}
		}

		return window.open(url, wname, newopt + wopt);
	},

	//�̿�ȳ� �˾�
	popupInfo: function(){
		if(AsianaSavingMall.mobileYn != "Y") {
			var popupURL = this.resourcePath + '/KR/KO/club/header/guide-popup.do?mallCode='+this.mallCode+"&mallName="+this.encodedMallName;
			this.openWinCenter(popupURL, "storeUsagePopup", "width=800,height=701, scrollbars=yes");
		} else {
			var popupURL = this.resourcePath + '/KR/KO/club/header/guide-popup.do?mallCode='+this.mallCode+"&mallName="+this.encodedMallName+"&mobileYn=Y";
        	this.openWinCenter(popupURL, "storeUsagePopup", "");
		}
	},

	//���ſϷ� �˾�â (AS-IS ���� �Ķ���� �߰�)
	openAsianaClubMileagePopup: function(name, cardNumber){
		//alert("���ϸ��� ������ ���� �˾�â�� �����մϴ�.\n\n<����>\n\n1. ���� ���α׷��� �˾����� ����� ��� �����Ͽ� �ֽñ� �ٶ��ϴ�.");
		name =  (name === undefined ? '' : name);
		cardNumber = (cardNumber === undefined ? '' : cardNumber);

		if(AsianaSavingMall.mobileYn != "Y") {
			var popupURL = this.resourcePath + "/KR/KO/club/header/complete-buy-popup.do?mallCode=" + this.mallCode + "&mallName=" + this.encodedMallName + "&name=" + name + "&cardNo=" + cardNumber + "";
			this.openWinCenter(popupURL, "asianaClubMileagePopup", "width=680,height=413");
		} else {
			var popupURL = this.resourcePath + "/KR/KO/club/header/complete-buy-popup.do?mallCode=" + this.mallCode + "&mallName=" + this.encodedMallName + "&name=" + name + "&cardNo=" + cardNumber + "&mobileYn=Y";
            this.openWinCenter(popupURL, "storeUsagePopup", "");
		}
	},

	// '�̿�ȳ�' �˾� ���� '������ �̿�ȳ�' �˾� ��ư
	openMallGuidePopup: function(){
		var popupURL = this.resourcePath + "/KR/KO/club/header/mall-guide-popup.do";
		this.openWinCenter(popupURL, "asianaClubMileagePopup", "width=800,height=701");
	},

	initHeader: function(){
		//URL �ʱ�ȭ
		var asianaClubIncludeDomain = "";
		var currentPathProtocol = (document.URL.indexOf("https://")>=0) ? "https://" : "http://";

		AsianaSavingMall.currentPathProtocol = currentPathProtocol;

		for(var i=0;i<document.getElementsByTagName("script").length;i++){
			if(document.getElementsByTagName("script")[i].src.indexOf("partnerHeader")>=0){
				asianaClubIncludeDomain = document.getElementsByTagName("script")[i].src;
				asianaClubIncludeDomain = asianaClubIncludeDomain.substring(asianaClubIncludeDomain.indexOf("//")+2, asianaClubIncludeDomain.length);
				asianaClubIncludeDomain = asianaClubIncludeDomain.substring(0, asianaClubIncludeDomain.indexOf("/"));
				asianaClubIncludeDomain = asianaClubIncludeDomain.replace(/www\./g, "");
				asianaClubIncludeDomain = asianaClubIncludeDomain + '/C';

				AsianaSavingMall.resourcePath = currentPathProtocol + asianaClubIncludeDomain;
				AsianaSavingMall.linkPath = "http://" + asianaClubIncludeDomain;
				try {
					if("http:///C" == AsianaSavingMall.resourcePath) {
						AsianaSavingMall.resourcePath = ".";
					}
					AsianaSavingMall.mallName = decodeURIComponent(((document.getElementsByTagName("script")[i]).src.match( /mn=([^&]*)/ ))[1]);
				} catch (e){
					AsianaSavingMall.mallName = "";
				}
				AsianaSavingMall.encodedMallName = encodeURIComponent(AsianaSavingMall.mallName);
				AsianaSavingMall.mallCode = ((document.getElementsByTagName("script")[i]).src.match( /code=([^&]*)/ ))[1];

				// ���޻� �ΰ� ����
				if(((document.getElementsByTagName("script")[i]).src.match( /logoYn=([^&]*)/ )) != null) {
					AsianaSavingMall.logoYn = ((document.getElementsByTagName("script")[i]).src.match( /logoYn=([^&]*)/ ))[1];
				}

				// ����̽� �����?
				if(((document.getElementsByTagName("script")[i]).src.match( /mobileYn=([^&]*)/ )) != null) {
					AsianaSavingMall.mobileYn = ((document.getElementsByTagName("script")[i]).src.match( /mobileYn=([^&]*)/ ))[1];
				}
				// header version
				if(((document.getElementsByTagName("script")[i]).src.match( /ver=([^&]*)/ )) != null) {
					AsianaSavingMall.headerVer = ((document.getElementsByTagName("script")[i]).src.match( /ver=([^&]*)/ ))[1];
				}

				if(AsianaSavingMall.mallCode == "shinsegae"){
					AsianaSavingMall.mallCode = "SSM";
				}

				// ȣ�ڿ�����
				if(AsianaSavingMall.mallCode == "HEO" || AsianaSavingMall.mallCode == "HIJ"){
					AsianaSavingMall.mallCode = "HTEJYF";
				}

				break;
			}
		}

		//��� ���� �Լ� ȣ��
		AsianaSavingMall.printTopHtml();
	},

	mouseover: function(id){
		document.getElementById(id).style.border="1px solid #000000";
	},

	mouseout: function(id){
		document.getElementById(id).style.border="1px solid #cccccc";
	},

	// ȸ����ȣ ��ȿ�� üũ
   checkForAsiana: function(asianaMembershipID) {
    	var isAsianaMember = false;
    	asianaMembershipID += "";

    	if(AsianaSavingMall.isDataNineDigit(asianaMembershipID)){
    		asianaMembershipID += "";

    		var _one   = asianaMembershipID.substring(0,1);
    		var _two   = asianaMembershipID.substring(1,2);
    		var _three = asianaMembershipID.substring(2,3);
    		var _four  = asianaMembershipID.substring(3,4);
    		var _five  = asianaMembershipID.substring(4,5);
    		var _six   = asianaMembershipID.substring(5,6);
    		var _seven = asianaMembershipID.substring(6,7);
    		var _eight = asianaMembershipID.substring(7,8);
    		var _nine  = asianaMembershipID.substring(8,9);

    		var sumData = ((_one+0) + (_two+0) + (_three+0) + (_four+0) + (_five+0) + (_six+0) + (_seven+0) + (_eight+0)) % 9;

    		sumData += "";

    		if(asianaMembershipID != "000000000" && sumData == _nine){
    			isAsianaMember = true;
    		}
    	}
    	return isAsianaMember;
    },

	// ȸ����ȣ ã�� �˾�
    findForAsiana: function () {
//    	var popupURL = AsianaSavingMall.currentPathProtocol + 'devp.flyasiana.com/I/kr/ko/ViewFindAcno.do';
    	var popupURL = AsianaSavingMall.resourcePath.substring(0, AsianaSavingMall.resourcePath.length-2) + '/I/kr/ko/ViewFindAcno.do';
    	this.openWinCenter(popupURL, "findAcnoPopup", "width=600,height=450");
    	return false;
    },

	isDataNineDigit : function (orgData) {
		orgData += "";
		orgData = orgData.replace(/^\s*|\s*$/g, "");
		if (orgData == "" || isNaN(orgData)){
			return false;
		}
		var digitCheck = /^[0-9]*$/;
		if(!(digitCheck.test(orgData) && (orgData.length == 9 ))){
			return false;
		}
		return true;
	},

	setCookie : function (name, value, expiredays ) {
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	}

};

// ���ϸ��� ������ �̵�
var fncGoEarnMileageMall = function () {
	if (parent && parent != this) {
		parent.location.href = AsianaSavingMall.resourcePath + "/KR/KO/club/earn-mileage-mall";		//iframe
	} else {
		location.href = AsianaSavingMall.resourcePath + "/KR/KO/club/earn-mileage-mall";	//windows
	}
}

// ���ϸ��� ���� �̵�
var fncGoUseMileageMall = function () {
	if (parent && parent != this) {
		parent.location.href = AsianaSavingMall.resourcePath + "/KR/KO/club/use-mileage-mall";		//iframe
	} else {
		location.href = AsianaSavingMall.resourcePath + "/KR/KO/club/use-mileage-mall";	//windows
	}
}

try {
	AsianaSavingMall.initHeader();

} catch(e) {

}