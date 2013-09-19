(function ($) {


// Afdelingen
// instanceId 2 = Drachten
var AfdDrachten = [
{"instanceId": "2", "afdId": "1", "Chars":["COM","DET"],"Afdeling":"Handel en commercieel"},
{"instanceId": "2", "afdId": "2", "Chars":["KEP"],"Afdeling":"Kunst & cultuur"},
{"instanceId": "2", "afdId": "3", "Chars":["PWO"],"Afdeling":"Onderwijsassistent"},
{"instanceId": "2", "afdId": "4", "Chars":["TAB","TIM"],"Afdeling":"Trajectadviesbureau"},
{"instanceId": "2", "afdId": "5", "Chars":["BT-"],"Afdeling":"Bijzondere trajecten zorg en welzijn"},
{"instanceId": "2", "afdId": "6", "Chars":["HZW","PRO"],"Afdeling":"Helpende zorg en welzijn"},
{"instanceId": "2", "afdId": "7", "Chars":["WEL"],"Afdeling":"Maatschappelijke zorg"},
{"instanceId": "2", "afdId": "8", "Chars":["PAS"],"Afdeling":"Paspoort"},
{"instanceId": "2", "afdId": "9", "Chars":["BKA","ELE","FMW","INS","MEC","WTB"],"Afdeling":"Vakman wei"},
{"instanceId": "2", "afdId": "10", "Chars":["BIN","BOU","INF"],"Afdeling":"Bouwinfra"},
{"instanceId": "2", "afdId": "11", "Chars":["HOR"],"Afdeling":"Horeca"},
{"instanceId": "2", "afdId": "12", "Chars":["MVG"],"Afdeling":"Media vormgeving"},
{"instanceId": "2", "afdId": "13", "Chars":["PWO"],"Afdeling":"Pedagogisch werk"},
{"instanceId": "2", "afdId": "14", "Chars":["GEZ","WEL"],"Afdeling":"Verzorging en verpleging"},
{"instanceId": "2", "afdId": "15", "Chars":["GRA"],"Afdeling":"Grafimedia"},
{"instanceId": "2", "afdId": "16", "Chars":["ITG"],"Afdeling":"IT &amp; Games"},
{"instanceId": "2", "afdId": "17", "Chars":["LAS","MEN"],"Afdeling":"Middenkader engineering"},
{"instanceId": "2", "afdId": "18", "Chars":["FIN","JUR","SEC"],"Afdeling":"Zakelijke dienstverlening"}
];
// instanceId 3 = Emmeloord
var AfdEmmeloord = [];
// instanceId 5 = Sneek
var AfdSneek = [
{"instanceId": "5", "afdId": "1", "Chars":["V3B","VBH","VWA","VWB","VWC","VWD","VWE","VWF"],"Afdeling":"Bijz. trajecten zorg & welzijn"},
{"instanceId": "5", "afdId": "2", "Chars":["Z3O","Z4O"],"Afdeling":"Gezondheidszorg"},
{"instanceId": "5", "afdId": "3", "Chars":["SHM","SMZ"],"Afdeling":"Maatschappelijke zorg"},
{"instanceId": "5", "afdId": "4", "Chars":["A2O","A40"],"Afdeling":"Zakelijke dienstverlening"},
{"instanceId": "5", "afdId": "5", "Chars":["B1O","B2B","B2O","B3B","B3O","B4O","BKD","BMK"],"Afdeling":"Bouwkunde"},
{"instanceId": "5", "afdId": "6", "Chars":["D2B","D2O","D3B","D4O","G4O"],"Afdeling":"Handel"},
{"instanceId": "5", "afdId": "7", "Chars":["OA1","OA2","OA3","OA4","OHW","OPW"],"Afdeling":"Onderwijs assistent / pedagogisch werk"},
{"instanceId": "5", "afdId": "8", "Chars":["E2B","E2O","E3B","E4B","E4O","EDE"],"Afdeling":"Electrotechniek / mechatronica"},
{"instanceId": "5", "afdId": "9", "Chars":["H2B","H3B","H4B","HOC","HOM"],"Afdeling":"Horeca"},
{"instanceId": "5", "afdId": "10", "Chars":["PAS","PBR","PTR","TES"],"Afdeling":"Tab / brug"},
{"instanceId": "5", "afdId": "11", "Chars":["EXT","RES","TRE"],"Afdeling":"Extern"},
{"instanceId": "5", "afdId": "12", "Chars":["I2O","I3O","I4O","IBE"],"Afdeling":"Ict"},
{"instanceId": "5", "afdId": "13", "Chars":["M2B","M2O","M3B","M3O","M4O","MBO","W2B","W2O","W3B","W3O","W4O","WDT"],"Afdeling":"Werktuigbouw / maritieme techniek"}
];
// instanceId 7 = Leeuwarden
var AfdLeeuwarden = [
{"instanceId": "7", "afdId": "1", "Chars":["AG-","D-A"],"Afdeling":"Apothekersassistenten"},
{"instanceId": "7", "afdId": "2", "Chars":["DTC"],"Afdeling":"Defensie doorstroom kl"},
{"instanceId": "7", "afdId": "3", "Chars":["ZDS"],"Afdeling":"Fin/bibl/bvw"},
{"instanceId": "7", "afdId": "4", "Chars":["BC-"],"Afdeling":"Logistiek/ihgh &mmc"},
{"instanceId": "7", "afdId": "5", "Chars":["IS-","ISB","ISP"],"Afdeling":"Paspoort/bonifatius-cibapp"},
{"instanceId": "7", "afdId": "6", "Chars":["ZDF"],"Afdeling":"Secretarieel / financieel2 / juridisch"},
{"instanceId": "7", "afdId": "7", "Chars":["PG-","PGV"],"Afdeling":"Vsaw"},
{"instanceId": "7", "afdId": "8", "Chars":["UB-"],"Afdeling":"Beveiliger"},
{"instanceId": "7", "afdId": "9", "Chars":["UB-"],"Afdeling":"Defensie instroomopleiding"},
{"instanceId": "7", "afdId": "10", "Chars":["UHV"],"Afdeling":"Haarverzorging"},
{"instanceId": "7", "afdId": "11", "Chars":["MZ-"],"Afdeling":"Maatschappelijke zorg"},
{"instanceId": "7", "afdId": "12", "Chars":["Z-P"],"Afdeling":"Pedagogisch werk"},
{"instanceId": "7", "afdId": "13", "Chars":["Z-S"],"Afdeling":"Sociaal cultureel werk"},
{"instanceId": "7", "afdId": "14", "Chars":["TBB","TBH","TW-","TWB"],"Afdeling":"Bouw en werktuigbouw"},
{"instanceId": "7", "afdId": "15", "Chars":["HND"],"Afdeling":"Detailhandel"},
{"instanceId": "7", "afdId": "16", "Chars":["ZCT","ZHP"],"Afdeling":"Helpende"},
{"instanceId": "7", "afdId": "17", "Chars":["T4B","T4M","TE2","TE3","TEB","TI2","TI3","TIB","TM2","TM3","TMB","TT4"],"Afdeling":"Mei"},
{"instanceId": "7", "afdId": "18", "Chars":["UB-","UBD","UBS"],"Afdeling":"Politietoelatingstrajecten"},
{"instanceId": "7", "afdId": "19", "Chars":["AG-"],"Afdeling":"Tandartsassistenten"},
{"instanceId": "7", "afdId": "20", "Chars":["-ST","FPP"],"Afdeling":"Bureau tab"},
{"instanceId": "7", "afdId": "21", "Chars":["AG-","AGV","D-D","DDA"],"Afdeling":"Doktersassistente"},
{"instanceId": "7", "afdId": "22", "Chars":["IC-","ICB","ICM"],"Afdeling":"Ict"},
{"instanceId": "7", "afdId": "23", "Chars":["Z-O"],"Afdeling":"Onderwijsassistent"},
{"instanceId": "7", "afdId": "24", "Chars":["UV-","UVM","UVS","UVV"],"Afdeling":"Schoonheidsverzorging"},
{"instanceId": "7", "afdId": "25", "Chars":["VZC","VZD","VZF","VZL"],"Afdeling":"Verzorgende"}
];

// Afdeling Model
var Afdeling = Backbone.Model.extend({
	defaults: {
		instanceId: '',
		afdId: '',
		Afdeling: '',
		Chars: '',
	}
});

// Klas Model
var Klas = Backbone.Model.extend({
	defaults: {
		instanceId: '',
		afdId: '',
		R: ''
	}
});

// Afdelingen Collection
var Afdelingen = Backbone.Collection.extend({
	model: Afdeling
});

// Klas Collection
var Klassen = Backbone.Collection.extend({
	model: Klas
});

// HomeView
HomeView = Backbone.View.extend({
	template: _.template($("#home").html()),

	render: function () {
		$(this.el).html(this.template());
		return this;
	}
});

// AfdelingenView for Every Afdeling
AfdelingView = Backbone.View.extend({
	tagName:  "li",
	className: "ui-icon-alt",
	template:  _.template($("#afdTemplate").html()),

	render: function(){
		// console.log(this.template(this.model.attributes));
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

// Afd Page
AfdView = Backbone.View.extend({
	template:  _.template($("#afd").html()),

	initialize: function(options){
		this.loc = this.options.loc;
		// Need ajax call that gets all Reggroups for loc
		// We're doing this @ the afdView because it differs
		// Per location, just like the afdelingen
	},

	render: function(){
		// Render Afd Page
		var $el = $(this.el);
		$el.html(this.template);
		// Render elke afdeling
		var list = this.$('#afdCon');
		this.collection.each(function(afdItem){
			var item = new AfdelingView({ model: afdItem });
			list.append(item.render().el);
		}, this);
		return this;
	}
});

KlassenView = Backbone.View.extend({
	tagName: "li",
	className: "ui-icon-alt",
	template: _.template($("#klasTemplate").html()),

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

KlasView = Backbone.View.extend({
	template: _.template($("#klas").html()),

	initialize: function(options){
		var klassenCol = new Klassen();
		this.loc = this.options.loc;
		this.afd = this.options.afd;
		this.mChars = this.compareChars(this.loc, this.afd);

		klassenCol.bind("renderklassen", function(){
			console.log("renderklassen ");
			// Render elke klas die Chars matched
			// Compare mChars with afdData
			var list = this.$('#klasCon');
			var loc = this.loc;
			var afd = this.afd;
			$.each(this.mChars, function(index, value){
				klassenCol.each(function(klasItem){
					if(value == klasItem.get('R').substr(0,3))
					{
						klasItem.set({ instanceId: loc, afdId: afd });
						var item = new KlassenView({ model: klasItem });
						list.append(item.render().el);
					}
				}, this);
				return this;
			});
			list.listview('refresh');
		}, this);

		Backbone.ajax({
			url :'http://localhost/RESTra/index.php/klas' + this.loc,
			crossDomain: true,
			dataType: 'jsonp',
			jsonpCallback: 'callback',
			success : function(val){
				klassenCol.set(val);
				klassenCol.trigger('renderklassen');
			},
			error : function(val){
				console.log("Error in Backbone.ajax");
			}
		});

	},

	compareChars: function(loc, afd){
		// First need to get the chars of the Afd
		// We do this with loc and afd
		console.log("compareChars");
		switch(loc){
			case('2'):
			var mChars = [];
			$.each(AfdDrachten, function(key, value){
					// Check if afd matches any of the afdId
					if(value['afdId'] == afd){
						mChars = value['Chars'];
					}
				});
			return mChars;
			break;
			case('3'):
			var mChars = [];
			$.each(AfdEmmeloord, function(key, value){
					// Check if afd matches any of the afdId
					if(value['afdId'] == afd){
						mChars = value['Chars'];
					}
				});
			return mChars;
			break;
			case('5'):
			var mChars = [];
			$.each(AfdSneek, function(key, value){
					// Check if afd matches any of the afdId
					if(value['afdId'] == afd){
						mChars = value['Chars'];
					}
				});
			return mChars;
			break;
			case('7'):
			var mChars = [];
			$.each(AfdLeeuwarden, function(key, value){
					// Check if afd matches any of the afdId
					if(value['afdId'] == afd){
						mChars = value['Chars'];
					}
				});
			return mChars;
			break;
		}
	},

	render: function(){
		console.log("Render " + this.mChars);
		// Render Klas Page
		var $el = $(this.el);
		$el.html(this.template);
	}
});

// RoosterView
RoosterView = Backbone.View.extend({
	template: _.template($('#rooster').html()),

	initialize: function(options){
		this.loc = this.options.loc;
		this.afd = this.options.afd;
		this.reg = this.options.reg;
	},

	render: function(){
		$(this.el).html(this.template({ R: "BAMI" }));
		$(this.el).append("<script type='text/javascript'>var elem = document.getElementById('slider');window.mySwipe = Swipe(elem, { startSlide: 2, continuous: true });</script>");
		return this;
	}

});

var AppRouter = Backbone.Router.extend({
	routes:{
		"":"home",
		"home":"home",
		"loc:instanceId" : "afdpage",
		"loc:instanceId/:afdId" : "klaspage",
		"loc:instanceId/:afdId/:klas" : "roosterpage",
	},

	initialize:function () {
		// Handle back button throughout the application
		$('#back').on('click', function(e) {
			window.history.back();
			return false;
		});
		this.firstPage = true;
	},

	home:function () {
		console.log('#home');
		this.changePage(new HomeView());
	},

	afdpage: function (instanceId){
		console.log('#loc ' + instanceId);
		var afdColl;
		switch(instanceId){
			case('2'):
			afdColl = new Afdelingen(AfdDrachten);
			break;
			case('3'):
			afdColl = new Afdelingen(AfdEmmeloord);
			break;
			case('5'):
			afdColl = new Afdelingen(AfdSneek);
			break;
			case('7'):
			afdColl = new Afdelingen(AfdLeeuwarden);
			break;
		}
		this.changePage(new AfdView({
			collection: afdColl,
			loc: instanceId
		}));
	},

	klaspage: function (instanceId, afdId){
		console.log("#loc " + instanceId + " afdId " + afdId);
		this.changePage(new KlasView({
			loc: instanceId,
			afd: afdId
		}));
	},

	roosterpage: function (instanceId, afdId, klas){
		console.log("#loc " + instanceId + " " + afdId + " " + klas);
		this.changePage(new RoosterView({
			loc: instanceId,
			afd: afdId,
			reg: klas
		}));
		// Swipe 2 handle for #rooster page
		$('#rooster').on('pageshow',function(){
			window.slider = Swipe(document.getElementById('slider'));
		});
	},

	changePage:function (page) {
		$(page.el).attr('data-role', 'page');
		page.render();
		$('body').append($(page.el));
		var transition = "slide";//$.mobile.defaultPageTransition;
		// We don't want to slide the first page
		if (this.firstPage) {
			transition = 'fade';
			this.firstPage = false;
		}
		$.mobile.changePage($(page.el), {
			changeHash:false,
			transition: transition
		});
	}

});

$(document).ready(function () {
	console.log('document ready');
	app = new AppRouter();
	Backbone.history.start();
});

} (jQuery));
