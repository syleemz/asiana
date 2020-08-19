/*
	2018-01-05
	사용몰(헤더) : ij.choi
	적립몰(이용안내, 구매완료 팝업) : mr.kim
*/

var AsianaSavingMall = {
	resourcePath: "",
	linkPath: "",
	mallName: "",			// 제휴사명
	mallCode: "",			// 제휴사코드
	encodedMallName: "",	// encoded 제휴사명
	logoYn: "",				// 제휴사 로고 유무
	mobileYn: "",			// 디바이스 mobile
	currentPathProtocol: "",
	savingTopHtml: "",
	useTopHtml: "",
	headerVer: "",

	//북마크
	bookMark: function(title, url){
		//브라우저 체킹
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
			alert("Ctrl(Commend) + D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
		}else{
			alert('자동 즐겨찾기를 지원하지 않는 브라우저 입니다.\n브라우저 메뉴의 즐겨찾기(북마크) 메뉴를 통해 추가해주세요.');
		}
	},
	//헤더 개편전 html 생성
	setTopHtml1: function(){
		//적립몰
		var savingTopHtml = "";
		//사용몰
		var useTopHtml = "";
		//사용몰(제휴사 로고 이미지, 링크 변경 필요 2018-01-05 ij.choi)
		useTopHtml +="<div style=\"display:block;position:relative;\">";
		useTopHtml +="	<div style=\"display:block;position:relative;border-bottom:1px solid #ddd;background:#fff;\">";
		useTopHtml +="		<div style=\"display:block;position:relative;padding:0 30px;\">";
		useTopHtml +="			<h1 style=\"margin:0;display:block;position:relative;height:80px;padding-top:10px;box-sizing:border-box;\">";
		useTopHtml +="				<a href=\"#\" title=\"ASIANA AIRLINES 마일리지 사용몰 페이지 이동\" onclick=\"javascript:fncGoUseMileageMall();return false;\" style=\"display:inline-block;margin-right:36px;\">";
		useTopHtml +="					<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/img_use_mileage_logo.png\" alt=\"ASIANA AIRLINES 마일리지 사용몰\" style=\"vertical-align:middle;\">";
		useTopHtml +="				</a>";

		//제휴사몰로 이동하는 링크 없음
		if(AsianaSavingMall.logoYn == "Y") {
			useTopHtml +="				<a href=\"#\" title=\""+this.mallName+"\" 제휴사몰 페이지 이동\" style=\"display:inline-block;margin-right:36px;\">";
			useTopHtml +="					<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/partnerHeader/"+this.mallCode+".jpg\" alt=\""+this.mallName+" 마일리지 사용몰\" style=\"border:0px; vertical-align:middle;\">";
			useTopHtml +="				</a>";
		}
		useTopHtml +="			</h1>";
		useTopHtml +="		</div>";
		useTopHtml +="	</div>";
		useTopHtml +="	<div style=\"display:block;position:relative;padding:12px 0;border-bottom:1px solid #ddd;font-size:13px;font-family:'Dotum', sans-serif;background-color:#e8ebf0;\">";
		if(this.mallCode == "OZLOGO" || this.mallCode == "OZDUTY"){
			useTopHtml +="		<div style=\"display:block;position:relative;padding:0 30px;\">하단 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</div>";	
		}else{
			useTopHtml +="		<div style=\"display:block;position:relative;padding:0 30px;\">아시아나항공은 통신판매중개자로 하단 상품에 대해 보증하거나 별도의 책임을 지지 않으며, 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</div>";
		}
		useTopHtml +="	</div>";
		useTopHtml +="</div>";

		//적립몰(제휴사 로고 이미지, 링크 변경 필요 2018-01-10 ij.choi)
		savingTopHtml += "<div style=\"display:block;position:relative;\">";
		savingTopHtml += "<div style=\"display:block;position:relative;border-bottom:1px solid #ddd;background:#fff;\">";
		savingTopHtml += "	<div style=\"display:block;position:relative;padding:0 30px;\">";
		savingTopHtml += "		<h1 style=\"margin:0;display:block;position:relative;height:80px;padding-top:10px;box-sizing:border-box;\">";
		savingTopHtml += "			<a href=\"#\" title=\"ASIANA AIRLINES 마일리지 적립몰 페이지 이동\" onclick=\"javascript:fncGoEarnMileageMall();return false;\" style=\"display:inline-block;margin-right:36px;\" >";
		savingTopHtml += "				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/img_saving_mileage_logo.png\" alt=\"ASIANA AIRLINES 마일리지 적립몰\" style=\"border:0px; vertical-align:middle;\">";
		savingTopHtml += "			</a>";

		//제휴사몰로 이동하는 링크 없음
		if(AsianaSavingMall.logoYn == "Y") {
			savingTopHtml += "			<a href=\"#none\" title=\""+this.mallName+"\" 제휴사몰 페이지 이동\" style=\"display:inline-block;margin-right:36px;\">";
			savingTopHtml += "				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/partnerHeader/"+this.mallCode+".jpg\" alt=\""+this.mallName+" 마일리지 적립몰\" style=\"border:0px; vertical-align:middle;\">";
			savingTopHtml += "			</a>";
		}
		savingTopHtml += "		</h1>";
		savingTopHtml += "		<button type=\"button\" id=\"asiana_"+this.mallCode+"\" onmouseover=\"AsianaSavingMall.mouseover('asiana_"+this.mallCode+"');\" onmouseout=\"AsianaSavingMall.mouseout('asiana_"+this.mallCode+"');\" onclick=\"AsianaSavingMall.popupInfo();\" style=\"position:absolute;top:20px;right:30px;background:transparent;cursor:pointer;border:1px solid #cccccc;background-color:#fff;color:#000;border-radius:3px;text-align:center;padding:0 20px;height:40px;font-size:14px;line-height:15px;\">이용안내</button>";
		savingTopHtml += "	</div>";
		savingTopHtml += "</div>";
		savingTopHtml += "<div style=\"display:block;position:relative;padding:12px 0;border-bottom:1px solid #ddd;font-size:13px;font-family:'Dotum', sans-serif;background-color:#e8ebf0;\">";
		savingTopHtml += "	<div style=\"display:block;position:relative;padding:0 30px;\">아시아나항공은 통신판매중개자로 하단 상품에 대해 보증하거나 별도의 책임을 지지 않으며, 상품 판매와 관련한 책임은 “"+this.mallName +"”에 있습니다.</div>";
		savingTopHtml += "</div>";
		savingTopHtml += "</div>";

		AsianaSavingMall.useTopHtml = useTopHtml;
		AsianaSavingMall.savingTopHtml = savingTopHtml;
	},
	//헤더 개편후 html 생성
	setTopHtml2: function(){
		//적립몰
		var savingTopHtml = "";
		//사용몰
		var useTopHtml = "";
		//사용몰()
		useTopHtml +="<style>#AsianaSavingMallHeader #AsianaSavingmallPc {display: block;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: none;}";
		useTopHtml +="	@media screen and (max-width:1025px){#AsianaSavingMallHeader #AsianaSavingmallPc {display: none;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: block;}}</style>";
		useTopHtml +="<div id=\"AsianaSavingMallHeader\">";
		useTopHtml +="<div id=\"AsianaSavingmallPc\" style=\"position: relative;height: 50px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_pc_mileage_bg.jpg') no-repeat right top #e6e2df;\">";
		useTopHtml +="	<div id=\"AsianaSavingmallPc\" style=\"display: block;padding: 0px 30px 0 160px;font-size: 0;\">";
		useTopHtml +="		<h1 style=\"position: absolute;top: 7px;left: 30px;\">";
		useTopHtml +="			<a href=\"#\" onclick=\"javascript:fncGoUseMileageMall();return false;\" style=\"display: block;\" title=\"ASIANA AIRLINES 마일리지 사용몰 페이지 이동\">";
		useTopHtml +="				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/new_img_logo.png\" alt=\"ASIANA AIRLINES\" >";
		useTopHtml +="			</a>";
		useTopHtml +="		</h1>";
		useTopHtml +="		<div style=\"display:table;width:100%;height:50px;font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size: 0;\">";
		useTopHtml +="			<div style=\"display: table-cell;vertical-align: middle;\">";
		useTopHtml +="				<i style=\"display: inline-block;vertical-align: middle;background-color: #c1c0c0;width: 1px;height: 14px;font-size:13px;margin: 0 10px 0 25px;\"></i>";
		if(this.mallCode == "OZLOGO" || this.mallCode == "OZDUTY"){
			useTopHtml +="			<span style=\"display: inline-block;vertical-align: middle;font-size:13px;width: 90%;\">하단 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</span>";	
		}else{
			useTopHtml +="			<span style=\"display: inline-block;vertical-align: middle;font-size:13px;width: 90%;\">아시아나항공은 통신판매중개자로 하단 상품에 대해 보증하거나 별도의 책임을 지지 않으며, 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</span>";
		}
		useTopHtml +="			</div>";
		useTopHtml +="		</div>";
		useTopHtml +="	</div>";
		useTopHtml +="</div>";

		useTopHtml +="<div id=\"AsianaSavingmallMo\" style=\"position: relative;height: 60px;background-color:#e6e2df;\">";
		useTopHtml +="	<div style=\"position: relative;padding: 0 10px 0 10px;height: 52px;display: flex;align-items: center;\">";
		if(this.mallCode == "OZLOGO" || this.mallCode == "OZDUTY"){
			useTopHtml +="		<div style=\"font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size:11px;line-height: 1.3;\">하단 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</div>";	
		}else{
			useTopHtml +="		<div style=\"font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size:11px;line-height: 1.3;\">아시아나항공은 통신판매중개자로 하단 상품에 대해 보증하거나 별도의 책임을 지지 않으며, 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</div>";
		}
		useTopHtml +="	</div>";
		useTopHtml +="	<div style=\"width: 100%;height: 8px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_mo_mileage_bg.jpg') no-repeat right top #bababa;background-size: cover;position: absolute;bottom: 0;left: 0;\"></div>";
		useTopHtml +="</div>";
		useTopHtml +="</div>";

		//적립몰()
		savingTopHtml +="<style>#AsianaSavingMallHeader #AsianaSavingmallPc {display: block;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: none;}";
		savingTopHtml +="	@media screen and (max-width:1025px){#AsianaSavingMallHeader #AsianaSavingmallPc {display: none;}#AsianaSavingMallHeader #AsianaSavingmallMo {display: block;}}</style>";
		savingTopHtml +="<div id=\"AsianaSavingMallHeader\">";
		savingTopHtml +="<div id=\"AsianaSavingmallPc\" style=\"position: relative;height: 50px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_pc_mileage_bg.jpg') no-repeat right top #e6e2df;\">";
		savingTopHtml +="	<div style=\"display: block;padding: 0px 115px 0 160px;font-size: 0;\">";
		savingTopHtml +="		<h1 style=\"position: absolute;top: 7px;left: 30px;\">";
		savingTopHtml +="			<a href=\"#\" onclick=\"javascript:fncGoEarnMileageMall();return false;\" style=\"display: block;\" title=\"ASIANA AIRLINES 마일리지 적립몰 페이지 이동\">";
		savingTopHtml +="				<img src=\"" + AsianaSavingMall.resourcePath + "/pc/image/club/new_img_logo.png\" alt=\"ASIANA AIRLINES\" >";
		savingTopHtml +="			</a>";
		savingTopHtml +="		</h1>";
		savingTopHtml +="		<div style=\"display:table;width:100%;height:50px;font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size: 0;\">";
		savingTopHtml +="			<div style=\"display: table-cell;vertical-align: middle;\">";
		savingTopHtml +="				<i style=\"display: inline-block;vertical-align: middle;background-color: #c1c0c0;width: 1px;height: 14px;font-size:13px;margin: 0 10px 0 25px;\"></i>";
		savingTopHtml +="			<span style=\"display: inline-block;vertical-align: middle;font-size:13px;width: 90%;\">아시아나항공은 통신판매중개자로 하단 상품에 대해 보증하거나 별도의 책임을 지지 않으며, 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</span>";
		savingTopHtml +="			</div>";
		savingTopHtml +="		</div>";
		savingTopHtml +="		<button type=\"button\" style=\"position:absolute;top:12px;right:30px;background:transparent;cursor:pointer;border:1px solid #fff;color:#fff;border-radius:3px;text-align:center;padding:0 10px;height:25px;font-size:13px;line-height:15px;letter-spacing: -1px;\"onclick=\"AsianaSavingMall.popupInfo();\">이용안내</button>";
		savingTopHtml +="	</div>";
		savingTopHtml +="</div>";

		savingTopHtml +="<div id=\"AsianaSavingmallMo\" style=\"position: relative;height: 60px;background-color:#e6e2df;\">";
		savingTopHtml +="	<div style=\"position: relative;padding: 0 85px 0 10px;height: 52px;display: flex;align-items: center;\">";
		savingTopHtml +="		<div style=\"font-family:'Dotum', sans-serif;color: #222;letter-spacing: -1px;font-size:11px;line-height: 1.3;\">아시아나항공은 통신판매중개자로 하단 상품에 대해 보증하거나 별도의 책임을 지지 않으며, 상품 판매와 관련한 책임은 “"+this.mallName+"”에 있습니다.</div>";
		savingTopHtml +="		<button type=\"button\" style=\"position:absolute;top:50%;right:10px;margin-top:-12px;background:transparent;cursor:pointer;border:1px solid #73716f;color:#000;border-radius:3px;text-align:center;padding:0 8px;height:25px;font-size:12px;line-height:1;letter-spacing: -1px;\" onclick=\"AsianaSavingMall.popupInfo();\">이용안내</button>";
		savingTopHtml +="	</div>";
		savingTopHtml +="	<div style=\"width: 100%;height: 8px;background: url('" + AsianaSavingMall.resourcePath + "/pc/image/club/new_mo_mileage_bg.jpg') no-repeat right top #bababa;background-size: cover;position: absolute;bottom: 0;left: 0;\"></div>";
		savingTopHtml +="</div>";
		savingTopHtml +="</div>";

		AsianaSavingMall.useTopHtml = useTopHtml;
		AsianaSavingMall.savingTopHtml = savingTopHtml;
	},

	//헤더 노출
	printTopHtml: function(){
		//적립몰
		var savingTopHtml = "";
		//사용몰
		var useTopHtml = "";
		//헤더
		var topHtml = "";
		var topHtmlType = "";

		if(AsianaSavingMall.headerVer == "1") {
			AsianaSavingMall.setTopHtml1();
		} else {
			AsianaSavingMall.setTopHtml2();
		}
		useTopHtml = AsianaSavingMall.useTopHtml;
		savingTopHtml = AsianaSavingMall.savingTopHtml;

		
		var url = AsianaSavingMall.resourcePath + "/pc/image/club/img_alliance_logo.jpg"	// TODO 이미지 경로 추후 수정 필요

		//TO-BE 기준
		if(
			this.mallCode == "OZLOGO"			//	아시아나 로고샵
			|| this.mallCode == "OZDUTY"		//	아시아나 인터넷 면세점
			|| this.mallCode == "KHRSRT"		//	금호리조트
			|| this.mallCode == "CGV"			//	CGV
			|| this.mallCode == "ASANSP1"		//	아산스파비스
			|| this.mallCode == "HSAQUA1"		//	화순아쿠아나
			|| this.mallCode == "ASIANA1"		//	테스트 코드
			|| this.mallCode == "EVL"			//	에버랜드
			|| this.mallCode == "MTA"			//	모두투어
		){
			topHtml = useTopHtml;
			topHtmlType = 'U'; //사용몰
		} else if (
				this.mallCode == "HTEJYF"		//	호텔엔조이
				|| this.mallCode == "EXPEDIA"	//	익스피디아
				|| this.mallCode == "rental"	//	Rentalcars.com
				|| this.mallCode == "LTCAR"		//	롯데렌터카
				|| this.mallCode == "GMT"		//	G마켓
				|| this.mallCode == "SKM"		//	11번가
				|| this.mallCode == "AUT"		//	옥션
				|| this.mallCode == "INT"		//	인터파크 쇼핑
				|| this.mallCode == "AKM"		//	AK mall
				|| this.mallCode == "CJH"		//	CJ mall
				|| this.mallCode == "GAL"		//	갤러리아몰
				|| this.mallCode == "GSH"		//	GS SHOP
				|| this.mallCode == "SSM"		//	신세계몰
				|| this.mallCode == "LTH"		//	롯데닷컴
				|| this.mallCode == "LIM"		//	롯데홈쇼핑
				|| this.mallCode == "NSE"		//	NS mall
				|| this.mallCode == "ALA"		//	알라딘
				|| this.mallCode == "IPB"		//	인터파크 도서
				|| this.mallCode == "KBY"		//	교보문고
				|| this.mallCode == "YES"		//	YES24
				|| this.mallCode == "EMT"		//	이마트몰
				|| this.mallCode == "GDF"		//	굿데이굿플라워
				|| this.mallCode == "HCL"		//	하프클럽
				|| this.mallCode == "LPL"		//	라플라타플라워
				|| this.mallCode == "LGF"		//	LF mall
				|| this.mallCode == "RNJ"		//	테이블엔조이
				|| this.mallCode == "SKTELINK"	// SK텔링크
//				|| this.mallCode == "KTSHOP"	// KT올레샵
				|| this.mallCode == "KTS"		// KT m&s
				|| this.mallCode == "AMC"		// 메리츠 화재
				|| this.mallCode == "ASIANA2"	// 테스트 코드
				|| this.mallCode == "TIM"		// 타임즈카
				|| this.mallCode == "ENO"		// Galaxy S10 이노리테일
				|| this.mallCode == "BKC"		// 부킹닷컴
				|| this.mallCode == "SRM"		// 플레이 와이파이
				|| this.mallCode == "CTR"		// 트립닷컴
				|| this.mallCode == "DBI"		// DB손해보험
				|| this.mallCode == "CJM"		// CJ더마켓
				|| this.mallCode == "HRC"		// 현대렌탈케어
				|| this.mallCode == "INO"		// 겔럭시노트
				|| this.mallCode == "WMR"		// 와이파이 도시락
				|| this.mallCode == "WKL"		// 기프티쇼
		){
			topHtml = savingTopHtml;
			topHtmlType = 'S';	//적립몰
		} else {
			alert("존재하지않는 제휴몰 코드 : "+ this.mallCode);
			topHtml = '';
		}

		// 헤더 : mobileYn = "Y" 가 아닐 경우만 노출
		if(AsianaSavingMall.headerVer != "1" || AsianaSavingMall.mobileYn != "Y") {
			document.writeln(topHtml);
		}
		// 이용안내 팝업 : 쿠키 검사 && 적립몰 && PC 일 경우만 노출
		if(AsianaSavingMall.getCookie(this.mallCode) != "done" && topHtmlType == 'S') {
			if(AsianaSavingMall.mobileYn != "Y") {
//로컬테스트시 임시로 막음
//				AsianaSavingMall.popupInfo();
				AsianaSavingMall.setCookie(this.mallCode, "done" , 1);
			}
		}
	},

	// 쿠키 검사
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

	//팝업창 크기 조절
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

	//이용안내 팝업
	popupInfo: function(){
		if(AsianaSavingMall.mobileYn != "Y") {
			var popupURL = this.resourcePath + '/KR/KO/club/header/guide-popup.do?mallCode='+this.mallCode+"&mallName="+this.encodedMallName;
			this.openWinCenter(popupURL, "storeUsagePopup", "width=800,height=701, scrollbars=yes");
		} else {
			var popupURL = this.resourcePath + '/KR/KO/club/header/guide-popup.do?mallCode='+this.mallCode+"&mallName="+this.encodedMallName+"&mobileYn=Y";
        	this.openWinCenter(popupURL, "storeUsagePopup", "");
		}
	},

	//구매완료 팝업창 (AS-IS 에서 파라미터 추가)
	openAsianaClubMileagePopup: function(name, cardNumber){
		//alert("마일리지 적립을 위한 팝업창을 실행합니다.\n\n<주의>\n\n1. 각종 프로그램의 팝업차단 기능을 모두 해제하여 주시기 바랍니다.");
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

	// '이용안내' 팝업 내의 '적립몰 이용안내' 팝업 버튼
	openMallGuidePopup: function(){
		var popupURL = this.resourcePath + "/KR/KO/club/header/mall-guide-popup.do";
		this.openWinCenter(popupURL, "asianaClubMileagePopup", "width=800,height=701");
	},

	initHeader: function(){
		//URL 초기화
		var asianaClubIncludeDomain = "";
		var currentPathProtocol = (document.URL.indexOf("https://")>=0) ? "https://" : "http://";

		AsianaSavingMall.currentPathProtocol = currentPathProtocol;

		for(var i=0;i<document.getElementsByTagName("script").length;i++){
			if(document.getElementsByTagName("script")[i].src.indexOf("partnerHeader")>=0){
				asianaClubIncludeDomain = document.getElementsByTagName("script")[i].src;
				asianaClubIncludeDomain = asianaClubIncludeDomain.substring(asianaClubIncludeDomain.indexOf("//")+2, asianaClubIncludeDomain.length);
				asianaClubIncludeDomain = asianaClubIncludeDomain.substring(0, asianaClubIncludeDomain.indexOf("/"));
				asianaClubIncludeDomain = asianaClubIncludeDomain.replace(/www\./g, "");
				//asianaClubIncludeDomain = asianaClubIncludeDomain + '/C';

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

				// 제휴사 로고 유무
				if(((document.getElementsByTagName("script")[i]).src.match( /logoYn=([^&]*)/ )) != null) {
					AsianaSavingMall.logoYn = ((document.getElementsByTagName("script")[i]).src.match( /logoYn=([^&]*)/ ))[1];
				}

				// 디바이스 모바일?
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

				// 호텔엔조이
				if(AsianaSavingMall.mallCode == "HEO" || AsianaSavingMall.mallCode == "HIJ"){
					AsianaSavingMall.mallCode = "HTEJYF";
				}

				break;
			}
		}

		//헤더 노출 함수 호출
		AsianaSavingMall.printTopHtml();
	},

	mouseover: function(id){
		document.getElementById(id).style.border="1px solid #000000";
	},

	mouseout: function(id){
		document.getElementById(id).style.border="1px solid #cccccc";
	},

	// 회원번호 유효성 체크
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

	// 회원번호 찾기 팝업
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

// 마일리지 적립몰 이동
var fncGoEarnMileageMall = function () {
	if (parent && parent != this) {
		parent.location.href = AsianaSavingMall.resourcePath + "/KR/KO/club/earn-mileage-mall";		//iframe
	} else {
		location.href = AsianaSavingMall.resourcePath + "/KR/KO/club/earn-mileage-mall";	//windows
	}
}

// 마일리지 사용몰 이동
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
