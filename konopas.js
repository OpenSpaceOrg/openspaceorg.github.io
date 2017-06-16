/**
 * KonOpas -- http://konopas.org/ & https://github.com/eemeli/konopas
 * Copyright (c) 2013-2015 by Eemeli Aro <eemeli@gmail.com>
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * The software is provided "as is" and the author disclaims all warranties
 * with regard to this software including all implied warranties of
 * merchantability and fitness. In no event shall the author be liable for
 * any special, direct, indirect, or consequential damages or any damages
 * whatsoever resulting from loss of use, data or profits, whether in an
 * action of contract, negligence or other tortious action, arising out of
 * or in connection with the use or performance of this software.
 * @license
 */
"use strict";
(function(G){G['i18n']={lc:{"en":function(n){return n===1?"one":"other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){i18n.c(d,k);return d[k]},
p:function(d,k,o,l,p){i18n.c(d,k);return d[k] in p?p[d[k]]:(k=i18n.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){i18n.c(d,k);return d[k] in p?p[d[k]]:p.other}}
i18n["en"]={
"Program":function(d){return "Programme"},
"weekday_n":function(d){return i18n.p(d,"N",0,"en",{"0":"Sunday","1":"Monday","2":"Tuesday","3":"Wednesday","4":"Thursday","5":"Friday","6":"Saturday","other":"???"})},
"weekday_short_n":function(d){return i18n.p(d,"N",0,"en",{"0":"Sun","1":"Mon","2":"Tue","3":"Wed","4":"Thu","5":"Fri","6":"Sat","other":"???"})},
"month_n":function(d){return i18n.p(d,"N",0,"en",{"0":"January","1":"February","2":"March","3":"April","4":"May","5":"June","6":"July","7":"August","8":"September","9":"October","10":"November","11":"December","other":"???"})},
"time_diff":function(d){return i18n.v(d,"T")+" "+i18n.p(d,"T_UNIT",0,"en",{"0":"seconds","1":"minutes","2":"hours","3":"days","4":"weeks","5":"months","6":"years","other":"???"})+" "+i18n.s(d,"T_PAST",{"true":"ago","other":"from now"})},
"search_hint":function(d){return "<b>Hint:</b> search is for full words in the item title, description, tags, location, and participants. You may use * and ? as wildcards and \"quoted words\" for exact phrases."},
"search_example":function(d){return "For example, you could try <b>"+i18n.v(d,"X")+"</b>"},
"no_ko_id":function(d){return "No ID set! Please assign konopas_set.id a unique identifier."},
"old_browser":function(d){return "Unfortunately, your browser doesn't support some of the Javascript features required by KonOpas. To use, please try a different browser."},
"item_not_found":function(d){return "Programme id <b>"+i18n.v(d,"ID")+"</b> not found!"},
"item_tags":function(d){return i18n.s(d,"T",{"tags":"Tags","track":"Track","type":"Type","other":i18n.v(d,"T")})},
"star_export_this":function(d){return "Your current selection is encoded in <a href=\""+i18n.v(d,"THIS")+"\" target=\"_blank\">this page's URL</a>, which you may open elsewhere to share your selection."},
"star_export_share":function(d){return "For easier sharing, you can also generate a <a href=\""+i18n.v(d,"SHORT")+"\">shorter link</a> or a <a href=\""+i18n.v(d,"QR")+"\">QR code</a>."},
"star_import_this":function(d){return "Your previously selected items are shown with a highlighted interior, while those imported via <a href=\""+i18n.v(d,"THIS")+"\">this link</a> have a highlighted border."},
"star_import_diff":function(d){return "Your previous selection "+i18n.p(d,"PREV",0,"en",{"0":"was empty","one":"had one item","other":"had "+i18n.n(d,"PREV")+" items"})+", and the imported selection has "+i18n.p(d,"NEW",0,"en",{"0":"no new items","one":"one new item","other":i18n.n(d,"NEW")+" new items"})+" "+i18n.p(d,"SAME",0,"en",{"0":"","one":"and one which was already selected","other":"and "+i18n.n(d,"SAME")+" which were already selected"})+"."},
"star_import_bad":function(d){return i18n.p(d,"BAD",0,"en",{"0":"","one":"One of the imported items had an invalid ID.","other":i18n.n(d,"BAD")+" of the imported items had invalid IDs."})},
"star_set":function(d){return "Set my selection to the imported selection"},
"add_n":function(d){return "add "+i18n.v(d,"N")},
"discard_n":function(d){return "discard "+i18n.v(d,"N")},
"star_add":function(d){return "Add the "+i18n.p(d,"N",0,"en",{"one":"new item","other":i18n.n(d,"N")+" new items"})+" to my selection"},
"star_export_link":function(d){return "<a href=\""+i18n.v(d,"URL")+"\">Export selection</a> ("+i18n.p(d,"N",0,"en",{"one":"one item","other":i18n.n(d,"N")+" items"})+")"},
"star_hint":function(d){return "To \"star\" a programme item, click on the square next to it. Your selections will be remembered, and shown in this view. You currently don't have any programme items selected, so this list is empty."},
"star_no_memory":function(d){return i18n.s(d,"WHY",{"FFcookies":"It looks like you're using a Firefox browser with cookies disabled, so ","IOSprivate":"It looks like you're using an iOS or Safari browser in private mode, so ","other":"For some reason,"})+" your <a href=\"http://en.wikipedia.org/wiki/Web_storage\">localStorage</a> is not enabled, and therefore your selection will not be remembered between sessions. "+i18n.s(d,"SERVER",{"true":"Please <span class=\"js-link\" onclick=\"var e=_el('login-popup-link');if(e)e.click();\">login</span> to enable persistent storage.","other":""})},
"filter_sum_id":function(d){return "Listing "+i18n.p(d,"N",0,"en",{"one":"one item: "+i18n.v(d,"TITLE"),"other":i18n.n(d,"N")+" items with id "+i18n.v(d,"ID")})},
"filter_sum":function(d){return "Listing "+i18n.p(d,"N",0,"en",{"one":"one","other":i18n.v(d,"ALL")+" "+i18n.n(d,"N")})+" "+i18n.s(d,"LIVE",{"undefined":"","other":"current and future"})+" "+i18n.v(d,"TAG")+" "+i18n.p(d,"N",0,"en",{"one":"item","other":"items"})+" "+i18n.s(d,"DAY",{"undefined":"","other":"on "+i18n.v(d,"DAY")+" "+i18n.s(d,"TIME",{"undefined":"","other":"after "+i18n.v(d,"TIME")})})+" "+i18n.s(d,"AREA",{"undefined":"","other":"in "+i18n.v(d,"AREA")})+" "+i18n.s(d,"Q",{"undefined":"","other":"matching the query "+i18n.v(d,"Q")})},
"day_link":function(d){return "Show "+i18n.v(d,"N")+" matching items from "+i18n.p(d,"D",0,"en",{"0":"Sunday","1":"Monday","2":"Tuesday","3":"Wednesday","4":"Thursday","5":"Friday","6":"Saturday","other":"???"})},
"hidden_link":function(d){return "Show "+i18n.v(d,"N")+" more matching items with an end time before "+i18n.v(d,"T")+" on "+i18n.p(d,"D",0,"en",{"0":"Sunday","1":"Monday","2":"Tuesday","3":"Wednesday","4":"Thursday","5":"Friday","6":"Saturday","other":"???"})},
"server_cmd_fail":function(d){return "The command \""+i18n.v(d,"CMD")+"\" failed."},
"show_comments":function(d){return "Show "+i18n.p(d,"N",0,"en",{"one":"one comment","other":i18n.n(d,"N")+" comments"})},
"post_author":function(d){return i18n.v(d,"N")+" posted…"},
"ical_login":function(d){return "To make your selection available in external calendars, please <span class=\"js-link\" onclick=\"var e=_el('login-popup-link');if(e)e.click();\">login</span>."},
"ical_link":function(d){return "Your selection is available as an iCal (.ics) calendar at:"},
"ical_hint":function(d){return "Note that changes you make in this guide may not show up immediately in your external calendar software."},
"ical_make":function(d){return "To view your selection in your calendar app, you may also <br class=\"wide-only\">"+i18n.v(d,"A_TAG")+"make it available</a> in iCal (.ics) calendar format"},
"login_why":function(d){return "Once you've verified your e-mail address, you'll be able to sync your data between different clients (including external calendars), as well as vote & comment on items. After signing in, no information will be transmitted to these external services."}}
})(this);
function KonOpas(set) {
	this.id = 'SoCraTes UK';
	this.lc = 'en';
	this.tag_categories = false;
	this.default_duration = 60;
	this.time_show_am_pm = false;
	this.abbrev_00_minutes = true; // only for am/pm time
	this.always_show_participants = false;
	this.max_items_per_page = 200;
	this.non_ascii_people = false; // setting true enables correct but slower sort
	this.people_per_screen = 100;
	this.use_server = false;
	this.log_messages = true;
	this.cache_refresh_interval_mins = 60;
	this.views = [ "star", "prog", "info" ];
	if (typeof set == 'object') for (var i in set) this[i] = set[i];

	if (!this.log_messages) _log = function(){};
	if (i18n[this.lc]) {
		i18n.txt = function(key, data){ return key in i18n[this.lc] ? i18n[this.lc][key](data) : key; }.bind(this);
		i18n.translate_html(i18n[this.lc], 'data-txt');
	} else alert('Locale "' + this.lc + '" not found.');
	if (!this.id) alert(i18n.txt('no_ko_id'));
	if (!Array.prototype.indexOf || !Array.prototype.filter || !Array.prototype.map
		|| !Date.now || !('localStorage' in window)) alert(i18n.txt('old_browser'));

	this.store = new KonOpas.Store(this.id);
	this.stars = new KonOpas.Stars(this.id);
	this.server = this.use_server && KonOpas.Server && new KonOpas.Server(this.id, this.stars);
	this.item = new KonOpas.Item();
	this.info = new KonOpas.Info();
	window.onhashchange = this.set_view.bind(this);
	var pl = document.getElementsByClassName('popup-link');
	for (var i = 0; i < pl.length; ++i) pl[i].addEventListener('click', KonOpas.popup_open);
	if (_el('refresh')) window.addEventListener('load', this.refresh_cache.bind(this), false);
}

KonOpas.prototype.set_program = function(list, opt) { this.program = new KonOpas.Prog(list, opt); }
KonOpas.prototype.set_people = function(list) { this.people = new KonOpas.Part(list, this); }

KonOpas.prototype.set_view = function() {
	var view = window.location.hash.substr(1, 4), tabs = _el('tabs');
	if (!this.program || !this.program.list.length) {
		view = 'info';
		tabs.style.display = 'none';
		this.info.show();
		if (this.server) this.server.error('Programme loading failed!');
	} else {
		tabs.style.display = 'block';
		if (!this.people || !this.people.list.length) {
			tabs.classList.add('no-people');
			if (view == 'part') view = '';
		} else {
			tabs.classList.remove('no-people');
		}
		switch (view) {
			case 'part': this.people.show();  break;
			case 'star': this.stars.show();   break;
			case 'info': this.info.show();    break;
			default:     this.program.show(); view = 'prog';
		}
	}
	for (var i = 0; i < this.views.length; ++i) {
		document.body.classList[view == this.views[i] ? 'add' : 'remove'](this.views[i]);
	}
	if (_el('load_disable')) _el('load_disable').style.display = 'none';
}

KonOpas.prototype.refresh_cache = function() {
	var t_interval = this.cache_refresh_interval_mins * 60000,
	    cache = window.applicationCache;
	if (!t_interval || (t_interval < 0)) return;
	cache.addEventListener('updateready', function() {
		if (cache.status == cache.UPDATEREADY) {
			_el('refresh').classList.add('enabled');
			_el('refresh').onclick = function() { window.location.reload(); };
		}
	}, false);
	if (cache.status != cache.UNCACHED) {
		window.setInterval(function() { cache.update(); }, t_interval);
	}
}
KonOpas.Info = function() {
	this.lu = _el('last-updated');
	this.lu_time = 0;
	var self = this, cache_manifest = document.body.parentNode.getAttribute('manifest');
	if (this.lu && cache_manifest && ((location.protocol == 'http:') || (location.protocol == 'https:'))) {
		var x = new XMLHttpRequest();
		x.onload = function() {
			self.lu_time = new Date(this.getResponseHeader("Last-Modified"));
			self.show_updated();
		};
		x.open('GET', cache_manifest, true);
		x.send();
	}
	var cl = _el('info_view').getElementsByClassName('collapse');
	for (var i = 0; i < cl.length; ++i) {
		cl[i].onclick = KonOpas.toggle_collapse;
	}
}

KonOpas.Info.prototype.show_updated = function() {
	if (!this.lu || !this.lu_time) return;
	var span = this.lu.getElementsByTagName('span')[0];
	span.textContent = KonOpas.pretty_time_diff(this.lu_time);
	span.title = this.lu_time.toLocaleString();
	span.onclick = function(ev) {
		var self = (ev || window.event).target;
		var tmp = self.title;
		self.title = self.textContent;
		self.textContent = tmp;
	};
	this.lu.style.display = 'inline';
}

KonOpas.Info.prototype.show = function() {
	_el("prog_ls").innerHTML = "";
	this.show_updated();
}

KonOpas.Item = function() {
	_el('prog_ls').onclick = KonOpas.Item.list_click;
	if (_el('scroll_link')) {
		_el('scroll_link').onclick = function() { _el('top').scrollIntoView(); return false; };
		if (window.navigator && navigator.userAgent.match(/Android [12]/)) {
			_el('time').style.display = 'none';
			_el('scroll').style.display = 'none';
		} else {
			this.scroll = {
				'i': 0, 'top': 0,
				'day': '', 'day_txt': '',
				't_el': _el('time'), 's_el': _el('scroll'),
				'times': document.getElementsByClassName('new_time')
			};
			window.onscroll = this.scroll_time.bind(this);
		}
	}
}

KonOpas.Item.show_extra = function(item, id) {
	function _tags(it) {
		if (!it.tags || !it.tags.length) return '';
		var o = {};
		it.tags.forEach(function(t) {
			var cat = 'tags';
			var tgt = KonOpas.Prog.hash({'tag': t});
			var a = t.split(':');
			if (a.length > 1) { cat = a.shift(); t = a.join(':'); }
			var link = '<a href="' + tgt + '">' + t + '</a>'
			if (o[cat]) o[cat].push(link);
			else o[cat] = [link];
		});
		var a = []; for (var k in o) a.push(i18n.txt('item_tags', {'T':k}) + ': ' + o[k].join(', '));
		return '<div class="discreet">' + a.join('<br>') + '</div>\n';
	}
	function _people(it) {
		if (!it.people || !it.people.length) return '';
		var a = it.people.map(!konopas.people || !konopas.people.list.length
			? function(p) { return p.name; }
			: function(p) { return "<a href=\"#part/" + KonOpas.hash_encode(p.id) + "\">" + p.name + "</a>"; }
		);
		return '<div class="item-people">' + a.join(', ') + '</div>\n';
	}

	if (_el("e" + id)) return;
	var html = "";
	var a = konopas.program.list.filter(function(el) { return el.id == id; });
	if (a.length < 1) html = i18n.txt('item_not_found', {'ID':id});
	else {
		html = _tags(a[0]) + _people(a[0]);
		if (a[0].desc) html += "<p>" + a[0].desc;
		html += '<a href="#prog/id:' + a[0].id + '" class="permalink" title="' + i18n.txt('Permalink') + '"></a>';
	}
	var extra = _new_elem('div', 'extra');
	extra.id = 'e' + id;
	extra.innerHTML = html;
	item.appendChild(extra);
	if (konopas.server) konopas.server.show_extras(id, item);
}

KonOpas.Item.new = function(it) {
	function _loc_str(it) {
		var s = '';
		if (it.loc && it.loc.length) {
			s = it.loc[0];
			if (it.loc.length > 1) s += ' (' + it.loc.slice(1).join(', ') + ')';
		}
		if (it.mins && (it.mins != konopas.default_duration)) {
			if (s) s += ', ';
			s += KonOpas.pretty_time(it.time, konopas) + ' - ' + KonOpas.pretty_time(KonOpas.time_sum(it.time, it.mins), konopas);
		}
		return s;
	}
	var frame = _new_elem('div', 'item_frame'),
	    star  = frame.appendChild(_new_elem('div', 'item_star')),
	    item  = frame.appendChild(_new_elem('div', 'item')),
	    title = item.appendChild(_new_elem('div', 'title')),
	    loc   = item.appendChild(_new_elem('div', 'loc'));

	KonOpas.Item.new = function(it) {
		star.id = 's' + it.id;
		item.id = 'p' + it.id;
		title.textContent = it.title;
		loc.textContent = _loc_str(it);
		return frame.cloneNode(true);
	};
	return KonOpas.Item.new(it);
}

KonOpas.Item.show_list = function(ls, opt) {
	var	_now = Date.now(),
		day_lengths = {}, day_links = {},
		frag = document.createDocumentFragment(),
		prev_date = '', prev_time = '',
		_list_item = function(p) {
			if (opt.day && p.date) {
				day_lengths[p.date] = (day_lengths[p.date] || 0) + 1;
			}
			if (opt.show_all || !opt.day || !p.date || (p.date == opt.day)) {
				if (this.hide_ended && p.t1 && (p.t1 < opt.now)) { ++opt.n_hidden; return; }
				if (p.date != prev_date) {
					prev_date = p.date;
					prev_time = '';
					frag.appendChild(_new_elem('div', 'new_day', KonOpas.pretty_date(p.t0 || p.date, konopas))).id = 'dt_' + p.date;
				}
				if (p.time != prev_time) {
					prev_time = p.time;
					frag.appendChild(document.createElement('hr'));
					frag.appendChild(_new_elem('div', 'new_time', KonOpas.pretty_time(p.t0 || p.time, konopas)))
						.setAttribute('data-day', p.date);
				}
				frag.appendChild(KonOpas.Item.new(p));
				++opt.n_listed;
			}
		};
	if (!opt) opt = {};
	opt.show_all = (ls.length <= konopas.max_items_per_page);
	opt.n_hidden = 0; opt.n_listed = 0;
	opt.now = new Date(_now + 10*60000 - _now % (10*60000));
	if (!opt.day || !konopas.program.days[opt.day]) {
		var day_now = KonOpas.data_date(opt.now);
		if (konopas.program.days[day_now]) opt.day = day_now;
		else { opt.day = ''; for (opt.day in konopas.program.days) break; }
	}
	if (ls.length > (opt.id ? 1 : 0)) {
		frag.appendChild(_new_elem('div', 'item_expander', '» '))
			.appendChild(_new_elem('a', 'js-link', i18n.txt('Expand all')))
			.id = 'item_expander_link';
	}
	ls.forEach(_list_item, {hide_ended:opt.hide_ended});
	if (!opt.n_listed && opt.n_hidden) {
		day_lengths = {};
		opt.n_hidden = 0; opt.n_listed = 0;
		prev_date = ''; prev_time = '';
		ls.forEach(_list_item, {hide_ended:false});
	}

	function _day_link(t) {
		var d = day_links[t],
		    txt = i18n.txt('day_link', {
				'N': day_lengths[d],
				'D': KonOpas.parse_date(d).getDay()
			}),
		    link = _new_elem('a', 'day-link js-link', txt);
		link.id = t + '_day_link';
		link.onclick = function() {
			if (t == 'next') window.scrollTo(0, 0);
			opt.day = d;
			KonOpas.Item.show_list(ls, opt);
		};
		return link;
	}
	function _hidden_link() {
		var	txt = i18n.txt('hidden_link', {
				'N': opt.n_hidden,
				'T': KonOpas.pretty_time(opt.now, konopas),
				'D': opt.now.getDay()
			}),
		    link = _new_elem('a', 'day-link js-link', txt);
		link.id = 'hidden_day_link';
		link.onclick = function() {
			opt.hide_ended = false;
			opt.day = KonOpas.data_date(opt.now);
			KonOpas.Item.show_list(ls, opt);
		};
		return link;
	}
	if (opt.day && !opt.show_all) for (var d in day_lengths) if (d in konopas.program.days) {
		if (d < opt.day) day_links['prev'] = d;
		else if ((d > opt.day) && !day_links['next']) day_links['next'] = d;
	}
	if (day_links['prev'] && !opt.n_hidden) frag.insertBefore(_day_link('prev'), frag.firstChild);
	if (day_links['next']) frag.appendChild(_day_link('next'));
	if (opt.n_hidden) frag.insertBefore(_hidden_link(), frag.firstChild);

	var LS = _el('prog_ls');
	while (LS.firstChild) LS.removeChild(LS.firstChild);
	LS.appendChild(frag);

	var expand_all = _el("item_expander_link");
	if (expand_all) expand_all.onclick = function() {
		var items = LS.getElementsByClassName("item");
		var exp_txt = i18n.txt('Expand all');
		if (expand_all.textContent == exp_txt) {
			for (var i = 0, l = items.length; i < l; ++i) {
				items[i].parentNode.classList.add("expanded");
				KonOpas.Item.show_extra(items[i], items[i].id.substr(1));
			}
			expand_all.textContent = i18n.txt('Collapse all');
		} else {
			for (var i = 0, l = items.length; i < l; ++i) {
				items[i].parentNode.classList.remove("expanded");
			}
			expand_all.textContent = exp_txt;
		}
	};

	var star_els = LS.getElementsByClassName("item_star");
	for (var i = 0, l = star_els.length; i < l; ++i) {
		star_els[i].onclick = function() { konopas.stars.toggle(this, this.id.substr(1)); return false; };
	}

	konopas.stars.list().forEach(function(s){
		var el = _el('s' + s);
		if (el) el.classList.add('has_star');
	});

	if (opt.id) {
		var it = document.getElementById('p' + opt.id);
		if (it) {
			it.parentNode.classList.add("expanded");
			KonOpas.Item.show_extra(it, opt.id);
			if (ls.length > 1) it.scrollIntoView();
		}
	}

	if (opt.prog_view) {
		var d_s = _el('day-sidebar'), d_n = _el('day-narrow'),
		    d_click = function(ev) {
				var li = (ev || window.event).target,
				    d = li.getAttribute('data-day');
				if (!d) return;
				opt.day = d;
				if (opt.show_all) {
					var dt = _el('dt_' + d);
					if (dt) {
						dt.scrollIntoView();
						KonOpas.Prog.focus_day(d);
					} else if (d < KonOpas.data_date(opt.now)) {
						opt.hide_ended = false;
						KonOpas.Item.show_list(ls, opt);
					}
				} else {
					opt.hide_ended = true;
					KonOpas.Item.show_list(ls, opt);
				}
			},
		    d_set = function(div, len) {
				var ul = document.createElement('ul');
				ul.className = 'day-list';
				ul.onclick = d_click;
				for (var d in konopas.program.days) {
					var li = document.createElement('li');
					li.textContent = konopas.program.days[d][len] + ' (' + (day_lengths[d] || 0) + ')';
					li.setAttribute('data-day', d);
					if (d == opt.day) li.className = 'selected';
					ul.appendChild(li);
				}
				div.innerHTML = '';
				div.appendChild(ul);
			};
		if (d_s) d_set(d_s, 'long');
		if (d_n) d_set(d_n, 'short');
		konopas.program.show_filter_sum(ls, opt);
	}

	konopas.item.scroll.i = 0;
	window.onscroll && window.onscroll();
}

KonOpas.Item.list_click = function(ev) {
	var el = (ev || window.event).target,
	    is_link = false;
	while (el && !/\bitem(_|$)/.test(el.className)) {
		if (el.id == 'prog_ls') return;
		if ((el.tagName.toLowerCase() == 'a') && el.href) is_link = true;
		el = el.parentNode;
		if (!el) return;
	}
	if (el && el.id && (el.id[0] == 'p') && !is_link) {
		if (el.parentNode.classList.toggle("expanded")) {
			KonOpas.Item.show_extra(el, el.id.substr(1));
		}
	}
}

KonOpas.Item.prototype.scroll_time = function() {
	var S = this.scroll,
		st_len = S.times.length,
	    scroll_top = window.pageYOffset + 20; // to have more time for change behind new_time
	if (!S.t_el || !st_len) return;
	if (scroll_top < S.times[0].offsetTop) {
		S.i = 0;
		S.top = S.times[0].offsetTop;
		S.t_el.style.display = 'none';
		var day0 = S.times[0].getAttribute('data-day');
		if (day0 != S.day) {
			KonOpas.Prog.focus_day(day0);
			S.day = day0;
		}
	} else {
		var i = S.top ? S.i : 1;
		if (i >= st_len) i = st_len - 1;
		if (scroll_top > S.times[i].offsetTop) {
			while ((i < st_len) && (scroll_top > S.times[i].offsetTop)) ++i;
			--i;
		} else {
			while ((i >= 0) && (scroll_top < S.times[i].offsetTop)) --i;
		}
		if (i < 0) i = 0;
		if ((i == 0) || (i != S.i)) {
			S.i = i;
			S.top = S.times[i].offsetTop;
			var day0 = S.times[i].getAttribute('data-day'),
			    day1 = ((i + 1 < st_len) && S.times[i+1].getAttribute('data-day')) || day0;
			S.t_el.textContent = konopas.program.days[day0]['short'] + '\n' + S.times[i].textContent;
			S.t_el.style.display = 'block';
			if (day1 != S.day) {
				KonOpas.Prog.focus_day(day1);
				S.day = day1;
			}
		}
	}
	if (S.s_el) S.s_el.style.display = S.t_el.style.display;
}
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
KonOpas.Part = function(list, opt) {
	this.list = list || [];
	this.list.forEach(function(p){
		p.sortname = ((p.name[1] || '') + '  ' + p.name[0]).toLowerCase().replace(/^ +/, '');
		if (!opt.non_ascii_people) p.sortname = p.sortname.make_ascii();
	});
	this.list.sort(opt.non_ascii_people
		? function(a, b) { return a.sortname.localeCompare(b.sortname, opt.lc); }
		: function(a, b) { return a.sortname < b.sortname ? -1 : a.sortname > b.sortname; });
	this.set_ranges(opt.people_per_screen || 0);
}

KonOpas.Part.prototype.set_ranges = function(bin_size) {
	var	self = this,
		_ranges = function(a, bin_size) {
			var	ends = [], start = ' ',
				n_bins = bin_size ? Math.round(a.length / bin_size) : 0,
				_prev_matches = function(a, i) { return (i > 0) && (a[i - 1] == a[i]); },
				_next_matches = function(a, i) { return (i < a.length - 1) && (a[i + 1] == a[i]); };
			for (var i = 1; i <= n_bins; ++i) {
				var e = Math.round(i * a.length / n_bins), n_up = 0, n_down = 0;
				if (e < 0) e = 0;
				if (e >= a.length) e = a.length - 1;
				while (_next_matches(a, e + n_up)) ++n_up;
				if (n_up) while (_prev_matches(a, e - n_down)) ++n_down;
				if (n_up <= n_down) e += n_up;
				else if (e > n_down) e -= n_down + 1;
				if (!ends.length || (ends[ends.length - 1] != a[e])) ends.push(a[e]);
			}
			ends.forEach(function(e, i){
				if (e > start) ends[i] = start + e;
				if (e >= start) start = String.fromCharCode(e.charCodeAt(0) + 1);
			});
			return ends;
		},
		_range_set = function(div, nr) {
			var ul = _new_elem('ul', 'name-list');
			nr.forEach(function(n){
				var startChar = n.charAt(0);
				if (startChar == ' ') startChar = 'A';
				var li = _new_elem('li', '', startChar);
				if (n.length > 1) li.textContent += ' - ' + n.charAt(1);
				li.setAttribute('data-range', n);
				ul.appendChild(li);
			});
			div.appendChild(ul);
			div.onclick = (function(ev) {
				var name_range = (ev || window.event).target.getAttribute('data-range');
				if (name_range) {
					konopas.store.set('part', { 'name_range': name_range, 'participant': '' });
					window.location.hash = '#part';
					this.update_view(name_range, '');
				}
			}).bind(self);
		};

	var fn = [], ln = [];
	this.list.forEach(function(p){
		if (p.name && p.name.length) {
			fn.push(p.name[0].trim().charAt(0).toUpperCase());
			if (p.name.length >= 2) ln.push(p.name[1].trim().charAt(0).toUpperCase());
		}
	});

	this.ranges = _ranges(ln.length ? ln : fn, bin_size);
	_range_set(_el('part-sidebar'), this.ranges);
	_range_set(_el('part-narrow'), this.ranges);

	var nl_type =  fn.length &&  ln.length ? ''
	            :  fn.length && !ln.length ? 'fn-only'
	            : !fn.length &&  ln.length ? 'ln-only'
	            : 'error';
	if (nl_type) _el('part_names').classList.add(nl_type);
}

KonOpas.Part.name_in_range = function(n0, range) {
	switch (range.length) {
		case 1:  return (n0 == range[0]);
		case 2:  return konopas.non_ascii_people
			? (n0.localeCompare(range[0], konopas.lc) >= 0) && (n0.localeCompare(range[1], konopas.lc) <= 0)
			: ((n0 >= range[0]) && (n0 <= range[1]));
		default: return (range.indexOf(n0) >= 0);
	}
}

KonOpas.Part.prototype.show_one = function(i) {
	var p = this.list[i],
	    p_name = KonOpas.clean_name(p, false),
	    links = '',
	    img = '',
	    pl = KonOpas.clean_links(p);
	if (pl) {
		links += '<dl class="linklist">';
		for (var type in pl) if (type != 'img') {
			var tgt = pl[type].tgt, txt = pl[type].txt || tgt;
			links += '<dt>' + type + ':<dd>' + '<a href="' + tgt + '">' + txt + '</a>';
		}
		links += '</dl>';
		if (pl.img && navigator.onLine) {
			img = '<a class="part_img" href="' + pl.img.tgt + '"><img src="' + pl.img.tgt + '" alt="' + i18n.txt('Photo') + ': ' + p_name + '"></a>';
		}
	}
	_el("part_names").innerHTML = '';
	_el("part_info").innerHTML =
		  '<h2 id="part_title">' + p_name + '</h2>'
		+ ((p.bio || img) ? ('<p>' + img + p.bio) : '')
		+ links;
	KonOpas.Item.show_list(konopas.program.list.filter(function(it) { return p.prog.indexOf(it.id) >= 0; }));
	_el("top").scrollIntoView();
}

KonOpas.Part.prototype.show_list = function(name_range) {
	var lp = !name_range ? this.list : this.list.filter(function(p) {
		var n0 = p.sortname[0].toUpperCase();
		return KonOpas.Part.name_in_range(n0, name_range);
	});
	_el('part_names').innerHTML = lp.map(function(p) {
		return '<li><a href="#part/' + KonOpas.hash_encode(p.id) + '">' + KonOpas.clean_name(p, true) + '</a></li>';
	}).join('');
	_el('part_info').innerHTML = '';
	_el('prog_ls').innerHTML = '';
}

KonOpas.Part.prototype.update_view = function(name_range, participant) {
	var	p_id = participant.substr(1),
		ll = document.querySelectorAll('.name-list > li');
	if (!name_range) name_range = this.ranges && this.ranges[0] || '';
	for (var i = 0; i < ll.length; ++i) {
		var cmd = (ll[i].getAttribute('data-range') == name_range) ? 'add' : 'remove';
		ll[i].classList[cmd]('selected');
	}
	if (!p_id || !this.list.some(function(p,i){
		if (p.id == p_id) { this.show_one(i); return true; }
	}, this)) {
		participant = '';
		this.show_list(name_range);
	}
	konopas.store.set('part', { 'name_range': name_range, 'participant': participant });
}

KonOpas.Part.prototype.show = function(hash) {
	if (!this.list.length) { window.location.hash = ''; return; }
	var store = konopas.store.get('part') || {},
	    name_range = store.name_range || '',
	    participant = !document.body.classList.contains('part') && store.participant || '',
		hash = window.location.hash.substr(6);
	if (hash) {
		var p_id = KonOpas.hash_decode(hash);
		var pa = this.list.filter(function(p) { return p.id == p_id; });
		if (pa.length) {
			participant = 'p' + pa[0].id;
			var n0 = pa[0].sortname[0].toUpperCase();
			if (!n0 || !this.ranges || !this.ranges.some(function(r){
				if (KonOpas.Part.name_in_range(n0, r)) { name_range = r; return true; }
			})) name_range = '';
		} else {
			window.location.hash = '#part';
			return;
		}
	} else if (participant) {
		window.location.hash = '#part/' + participant.substr(1);
		return;
	}
	this.update_view(name_range, participant);
}
if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+|\s+$/g, '');
	};
}


if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  };
}


if ((function(){
	try { new Date().toLocaleDateString("i"); }
	catch (e) { return e.name !== "RangeError"; }
	return true;
})()) {
	Date.prototype._orig_toLocaleDateString = Date.prototype.toLocaleDateString;
	Date.prototype.toLocaleDateString = function(locale, options) {
		if (!arguments.length || (typeof i18n == 'undefined')) return this._orig_toLocaleDateString();
		var i = function(key, data){ return key in i18n[locale] ? i18n[locale][key](data) : key; },
		    w = i('weekday_n', { 'N': this.getDay() }),
		    d = this.getDate(),
		    m = i('month_n', { 'N': this.getMonth() }),
		    s = w + ', ' + d + ' ' + m;
		if (options && options.year) s += ' ' + this.getFullYear();
		return s;
	};
}


String.prototype.make_ascii = String.prototype.normalize
	? function() {
		return this.normalize('NFKD').replace(/[^\x00-\x7F]/g, '');
	}
	: function() {
		var str = this.toString();
		if (/^[\x00-\x7F]*$/.test(str)) return str;
		// map from http://web.archive.org/web/20120918093154/http://lehelk.com/2011/05/06/script-to-remove-diacritics/
		var norm_map = {
			'A': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g,
			'AA':/[\uA732]/g,
			'AE':/[\u00C6\u01FC\u01E2]/g,
			'AO':/[\uA734]/g,
			'AU':/[\uA736]/g,
			'AV':/[\uA738\uA73A]/g,
			'AY':/[\uA73C]/g,
			'B': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g,
			'C': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g,
			'D': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g,
			'DZ':/[\u01F1\u01C4]/g,
			'Dz':/[\u01F2\u01C5]/g,
			'E': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g,
			'F': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g,
			'G': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g,
			'H': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g,
			'I': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g,
			'J': /[\u004A\u24BF\uFF2A\u0134\u0248]/g,
			'K': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g,
			'L': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g,
			'LJ':/[\u01C7]/g,
			'Lj':/[\u01C8]/g,
			'M': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g,
			'N': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g,
			'NJ':/[\u01CA]/g,
			'Nj':/[\u01CB]/g,
			'O': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g,
			'OI':/[\u01A2]/g,
			'OO':/[\uA74E]/g,
			'OU':/[\u0222]/g,
			'P': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g,
			'Q': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g,
			'R': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g,
			'S': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g,
			'T': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g,
			'TZ':/[\uA728]/g,
			'U': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g,
			'V': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g,
			'VY':/[\uA760]/g,
			'W': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g,
			'X': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g,
			'Y': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g,
			'Z': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g,
			'a': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g,
			'aa':/[\uA733]/g,
			'ae':/[\u00E6\u01FD\u01E3]/g,
			'ao':/[\uA735]/g,
			'au':/[\uA737]/g,
			'av':/[\uA739\uA73B]/g,
			'ay':/[\uA73D]/g,
			'b': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g,
			'c': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g,
			'd': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g,
			'dz':/[\u01F3\u01C6]/g,
			'e': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g,
			'f': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g,
			'g': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g,
			'h': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g,
			'hv':/[\u0195]/g,
			'i': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g,
			'j': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g,
			'k': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g,
			'l': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g,
			'lj':/[\u01C9]/g,
			'm': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g,
			'n': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g,
			'nj':/[\u01CC]/g,
			'o': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g,
			'oi':/[\u01A3]/g,
			'ou':/[\u0223]/g,
			'oo':/[\uA74F]/g,
			'p': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g,
			'q': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g,
			'r': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g,
			's': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g,
			't': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g,
			'tz':/[\uA729]/g,
			'u': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g,
			'v': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g,
			'vy':/[\uA761]/g,
			'w': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g,
			'x': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g,
			'y': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g,
			'z': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
		};
		for (var l in norm_map) {
			str = str.replace(norm_map[l], l);
		}
		return str.replace(/[^\x00-\x7F]/g, '');
	};


/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2011-06-15
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

(function (view) {

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.className)
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.className = this.toString();
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function (token) {
	token += "";
	if (checkTokenAndGetIndex(this, token) === -1) {
		this.push(token);
		this._updateClassName();
	}
};
classListProto.remove = function (token) {
	token += "";
	var index = checkTokenAndGetIndex(this, token);
	if (index !== -1) {
		this.splice(index, 1);
		this._updateClassName();
	}
};
classListProto.toggle = function (token) {
	token += "";
	if (checkTokenAndGetIndex(this, token) === -1) {
		this.add(token);
	} else {
		this.remove(token);
	}
};
classListProto.toString = function () {
	return this.join(" ");
};
 
if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		if (ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}
 
}(self));
 
}
KonOpas.Prog = function(list, opt) {
	function _sort(a, b) {
		if (!a.date != !b.date) return a.date ? -1 : 1;
		if (a.date < b.date) return -1;
		if (a.date > b.date) return  1;
		if (!a.time != !b.time) return a.time ? 1 : -1;
		if (a.time < b.time) return -1;
		if (a.time > b.time) return  1;
		if (a.loc && b.loc) {
			if (a.loc.length < b.loc.length) return -1;
			if (a.loc.length > b.loc.length) return  1;
			for (var i = a.loc.length - 1; i >= 0; --i) {
				if (a.loc[i] < b.loc[i]) return -1;
				if (a.loc[i] > b.loc[i]) return  1;
			}
		}
		return 0;
	}
	this.list = (list || []).sort(_sort);
	this.list.forEach(function(p) {
		if (p && p.date) {
			var d = p.date.split(/\D+/),
			    t = p.time && p.time.split(/\D+/) || [0,0],
				m = p.time && Number(p.mins || KonOpas.default_duration) || (!p.time && 24*60-1) || 0;
			p.t0 = new Date(d[0], d[1] - 1, d[2], t[0], t[1]);
			if (isNaN(p.t0)) delete p.t0;
			else p.t1 = new Date(p.t0.valueOf() + 60000 * m);
		}
	});
	var pf = _el('prog_filters');
	pf.onclick = KonOpas.Prog.filter_change;
	var pl = pf.getElementsByClassName('popup-link');
	for (var i = 0; i < pl.length; ++i) {
		pl[i].setAttribute('data-title', pl[i].textContent);
		pl[i].nextElementSibling.onclick = KonOpas.Prog.filter_change;
	}
	var sf = _el('search');
	if (sf) {
		sf.onsubmit = _el('q').onblur = KonOpas.Prog.filter_change;
		sf.onreset = function() { KonOpas.Prog.set_filters({}); };
	}
	this.init_filters(opt);
	var pt = _el('tab_prog'),
	    pa = pt && pt.getElementsByTagName('a');
	if (pa && pa.length) pa[0].onclick = function(ev) {
		if (window.pageYOffset && document.body.classList.contains('prog')) {
			window.scrollTo(0, 0);
			(ev || window.event).preventDefault();
		}
	};
}


// ------------------------------------------------------------------------------------------------ static

KonOpas.Prog.hash = function(f, excl) {
	var p = ['#prog'];
	if (f) ['id', 'area', 'tag', 'query'].forEach(function(k){
		var v = f[k + '_str'] || f[k];
		if (excl && excl[k] || !v || (v == 'all_' + k + 's')) return;
		if ((k == 'tag') && konopas.tag_categories) {
			var m = v.match(new RegExp('^(' + konopas.tag_categories.join('|') + '):(.*)'));
			if (m) { k = m[1]; v = m[2]; }
		}
		p.push(k + ':' + KonOpas.hash_encode(v));
	});
	return p.length > 1 ? p.join('/') : '#';
}

KonOpas.Prog.get_filters = function(hash_only) {
	var	filters = { 'area':'', 'tag':'', 'query':'', 'id':'' },
		h = window.location.toString().split('#')[1] || '',
		h_set = false,
		tag_re = konopas.tag_categories && konopas.tag_categories.length && new RegExp('^' + konopas.tag_categories.join('|') + '$');
	if (h.substr(0, 5) == 'prog/') {
		h.substr(5).split('/').forEach(function(p){
			var s = p.split(':');
			if ((s.length == 2) && s[0] && s[1]) {
				if (tag_re && tag_re.test(s[0])) {
					s[1] = p;
					s[0] = 'tag';
				}
				filters[s[0]] = KonOpas.hash_decode(s[1]);
				h_set = true;
			}
		});
	}
	if (!hash_only && !h_set && !document.body.classList.contains('prog')) {
		var store = konopas.store.get('prog');
		if (store) for (var k in store) {
			if (filters.hasOwnProperty(k)) filters[k] = store[k];
		}
	}
	return filters;
}

KonOpas.Prog.set_filters = function(f, silent) {
	if (silent && !(history && history.replaceState)) return false;
	if (f.id) f = { 'id': f.id };
	konopas.store.set('prog', f);
	var h = KonOpas.Prog.hash(f),
	    h_cur = window.location.toString().split('#')[1] || '';
	if (h_cur != h.substr(1)) {
		if (silent) {
			var loc = window.location.toString().split('#')[0] + h;
			history.replaceState({}, document.title, loc);
		} else {
			window.location.hash = h;
		}
		return true;
	}
	return false;
}

// read filters from url + ev -> set new hash
KonOpas.Prog.filter_change = function(ev) {
	ev = ev || window.event;
	var key, value;
	switch (ev.type) {
		case 'click':
			if (ev.target.tagName.toLowerCase() != 'li') return;
			var popups = ev.target.getElementsByClassName('popup');
			if (popups && popups.length) return;
			key = ev.target.parentNode.id.replace(/\d+$/, '');
			value = ev.target.id;
			switch (key) {
				case 'area': value = value.replace(/^a([^a-zA-Z])/, '$1'); break;
				case 'tag':  value = value.replace(/^t([^a-zA-Z])/, '$1'); break;
			}
			break;
		case 'submit':
			ev.preventDefault();
			// fallthrough
		case 'blur':
			key = 'query';
			value = _el("q").value;
			break;
		default: return;
	}
	var filters = KonOpas.Prog.get_filters();
	filters[key] = value;
	if (filters['id'] && (key != 'id')) filters['id'] = '';
	KonOpas.Prog.set_filters(filters);
}

KonOpas.Prog.focus_day = function(d) {
	for (var n in {'day-sidebar':1, 'day-narrow':1}) {
		var e = _el(n),
			s = e && e.getElementsByTagName('li');
		if (s) for (var i = 0; i < s.length; ++i) {
			var _d = s[i].getAttribute('data-day');
			s[i].classList[(_d == d) ? 'add' : 'remove']('selected');
		}
	}
}



// ------------------------------------------------------------------------------------------------ instance

KonOpas.Prog.prototype.init_filters = function(opt) {
	var filter_el = _el('prog_lists'), labels = {}, regexp = {};
	function _txt(s) {
		return i18n.txt(s.charAt(0).toUpperCase() + s.slice(1).replace('_',' '));
	}
	function _ul(id) {
		var e = document.createElement('ul');
		e.id = id;
		return e;
	}
	function _li(par, id, txt) {
		var e = document.createElement('li');
		e.id = /^[^a-zA-Z]/.test(id) ? par.id[0] + id : id
		if (!txt) txt = labels[id] || _txt(id);
		if (/^\s*$/.test(txt)) return;
		e.textContent = /^[\\^$]/.test(txt) ? txt.substr(1) : txt;
		if (regexp[id]) e.setAttribute('data-regexp', regexp[id]);
		par.appendChild(e);
	}
	function _compare(a, b) {
		var sf = function(s) { return (labels[s] || s.replace(/^[^:]+:/, '')).toLowerCase().replace(/^the /, ''); },
			af = function(s) { return s.match(/\d+|\D+/g).map(function(v) { return Number(v) || v; }); },
			_a = sf(a), _b = sf(b);
		if ((_a[0] == '$') != (_b[0] == '$')) return (_a < _b) ? 1 : -1; // $ == 0x24
		if (/\d/.test(_a) && /\d/.test(_b)) {
			var aa = af(_a), bb = af(_b);
			for (var i = 0; i < aa.length && i < bb.length; ++i) {
				if (aa[i] < bb[i]) return -1;
				if (aa[i] > bb[i]) return  1;
			}
			if (aa.length != bb.length) return aa.length < bb.length ? -1 : 1;
		} else {
			if (_a < _b) return -1;
			if (_a > _b) return  1;
		}
		return 0;
	}
	function _ul2(par, id, name, prefix, list) {
		var title = labels[name] || _txt(name),
		    root = document.createElement('li'),
		    link = _new_elem('div', 'popup-link', title + '…'),
		    ul = _new_elem('ul', 'popup');
		link.setAttribute('data-title', link.textContent);
		link.addEventListener('click', KonOpas.popup_open);
		ul.id = id;
		ul.setAttribute('data-title', title);
		ul.addEventListener('click', KonOpas.Prog.filter_change);
		for (var i = 0; i < list.length; ++i) {
			var txt = labels[list[i]] || list[i].replace(prefix, '');
			_li(ul, list[i], txt);
		}
		root.appendChild(link);
		root.appendChild(ul);
		par.appendChild(root);
	}
	function _fill(id, items) {
		var i = 0, o = opt[id], ul = _ul(id);
		labels = o.labels || {};
		regexp = o.regexp || {};
		for (var r in regexp) items[r] = 1;
		_li(ul, 'all_' + id + 's');
		if (o.promote) for (i = 0; i < o.promote.length; ++i) {
			_li(ul, o.promote[i]);
			delete items[o.promote[i]];
		}
		if (o.exclude) {
			var re = new RegExp(o.exclude.join('|'));
			for (var t in items) if (re.test(t)) delete items[t];
		}
		if (o.min_count) {
			for (var t in items) if (items[t] < o.min_count) delete items[t];
		}
		var list = Object.keys(items).sort(_compare);
		if (o.categories) for (i = 0; i < o.categories.length; ++i) {
			var prefix = o.categories[i] + ':',
			    list_in = [], list_out = [];
			for (var j = 0; j < list.length; ++j) {
				if (list[j].substr(0, prefix.length) == prefix) {
					list_in.push(list[j]);
				} else {
					list_out.push(list[j]);
				}
			}
			switch (list_in.length) {
				case 0:   break;
				case 1:   _li(ul, prefix + list_in[0]);  break;
				default:  _ul2(ul, id + i, o.categories[i], prefix, list_in);
			}
			list = list_out;
		}
		if (list.length < 4) for (i = 0; i < list.length; ++i) _li(ul, list[i]);
		else _ul2(ul, id + i, id, '', list);
		filter_el.appendChild(ul);
	}
	if (!opt || !filter_el) return;
	while (filter_el.firstChild) filter_el.removeChild(filter_el.firstChild);
	var days = {}, areas = {}, tags = {},
	    lvl = (opt.area && opt.area.loc_level) || 0;
	for (var i = 0, l = this.list.length; i < l; ++i) {
		var p = this.list[i];
		if (p.date) days[p.date] = 1;
		if (opt.area && (typeof p.loc == 'object') && p.loc && p.loc[lvl]) areas[p.loc[lvl]] = (areas[p.loc[lvl]] || 0) + 1;
		if (opt.tag && (typeof p.tags == 'object') && p.tags) for (var j = 0; j < p.tags.length; ++j) {
			var t_s = opt.tag.set_category && opt.tag.set_category[p.tags[j]];
			if (t_s) p.tags[j] = t_s + ':' + p.tags[j];
			tags[p.tags[j]] = (tags[p.tags[j]] || 0) + 1;
		}
	}
	if (opt.day && opt.day.exclude) {
		var d_re = new RegExp(opt.day.exclude.join('|'));
		for (var d in days) if (d_re.test(d)) delete days[d];
	}
	this.days = {};
	for (var d in days) {
		var d_d = KonOpas.parse_date(d), d_n = {'N': d_d ? d_d.getDay() : -1 };
		this.days[d] = {
			'short': i18n.txt('weekday_short_n', d_n),
			'long': i18n.txt('weekday_n', d_n)
		};
	}
	if (opt.area) _fill('area', areas);
	if (opt.tag) _fill('tag', tags);
}


KonOpas.Prog.prototype.show_filter_sum = function(ls, f) {
	var fs = _el('filter_sum'); if (!fs) return;
	var _a = function(txt, unset) {
		var excl = {id:1}; if (unset) excl[unset] = 1;
		return '<a href="' + KonOpas.Prog.hash(f, excl) + '">' + txt + '</a>';
	}
	if (f.id_only) {
		fs.innerHTML = i18n.txt('filter_sum_id', { 'N':ls.length, 'TITLE':_a(ls[0].title), 'ID':_a(f.id) });
	} else {
		var d = { 'N': f.n_listed,
			'ALL': !f.show_all || f.tag_str || f.area_str || f.query_str ? '' : _a(i18n.txt('all'), {}, 0),
			'TAG': f.tag_str ? _a(f.tag_str, 'tag') : '' };
		if (f.day && !f.show_all) {
			d['DAY'] = i18n.txt('weekday_n', {'N': KonOpas.parse_date(f.day).getDay() });
			if (f.n_hidden) d['TIME'] = KonOpas.pretty_time(f.now, konopas);
		} else {
			if (f.n_hidden) d['LIVE'] = true;
		}
		if (f.area_str) d['AREA'] = _a(f.area_str, 'area');
		if (f.query_str) d['Q'] = _a(f.query_str, 'query');
		fs.innerHTML = i18n.txt('filter_sum', d);
	}
}

// hashchange -> read filters from url + store -> set filters in html + store -> list items
KonOpas.Prog.prototype.show = function() {
	function _show_filters(f) {
		var prev = _el('prog_filters').getElementsByClassName('selected');
		if (prev) for (var i = prev.length - 1; i >= 0; --i) {
			var cl = prev[i].classList;
			if (cl.contains('popup-link')) prev[i].textContent = prev[i].getAttribute('data-title') || i18n.txt('More') + '…';
			cl.remove('selected');
		}
		for (var k in f) {
			if (k == 'query') {
				var q = _el("q");
				if (q) {
					q.value = f.query;
					if (f.query) q.classList.add('selected');
				}
			} else {
				var id = f[k];
				if (!id) id = 'all_' + k + 's';
				else if (id.match(/^[^a-zA-Z]/)) id = k[0] + id;
				var el = _el(id);
				if (el) {
					el.classList.add('selected');
					if (el.parentNode.id.match(/\d+$/)) {
						var p = el.parentNode.parentNode.firstChild;
						p.classList.add('selected');
						p.textContent = el.textContent;
					}
				}
			}
		}
		var qh = _el('q_hint');
		if (qh) {
			if (f.query) {
				if (/[?*"]/.test(f.query)) {
					qh.innerHTML = i18n.txt('search_hint');
					qh.removeAttribute('onmouseup');
					qh.style.cursor = 'auto';
				} else {
					qh.innerHTML = i18n.txt('search_hint') + ' ' + i18n.txt('search_example', {'X':f.query+'*'});
					qh.onmouseup = function() { _el('q').value = f.query + '*'; _el('q').focus(); _el('q').blur(); };
					qh.style.cursor = 'pointer';
				}
				qh.style.display = 'block';
			} else {
				qh.style.display = 'none';
			}
		}
	}
	function _filter(it) {
		if (this.area) {
			if (this.area instanceof RegExp) {
				if (!this.area.test(it.loc.join(';'))) return false;
			} else {
				if (!it.loc || (it.loc.indexOf(this.area) < 0)) return false;
			}
		}
		if (this.tag) {
			if (this.tag instanceof RegExp) {
				if (!this.tag.test(it.title)) return false;
			} else {
				if (!it.tags || (it.tags.indexOf(this.tag) < 0)) return false;
			}
		}
		if (this.query) {
			var found = this.query.test(it.title)
				|| this.query.test(it.desc)
				|| (it.loc && this.query.test(it.loc.join('\t')))
				|| (it.tags && this.query.test(it.tags.join('\t')))
				|| (it.people && it.people.some(function(p){ return this.query.test(p.name); }, this));
			if (!found) return false;
		}
		return true;
	}
	function _show_list(f, self) {
		f.area_str = f.area || '';
		if (f.area && _el(f.area)) {
			var t = _el(f.area).getAttribute("data-regexp");
			if (t) f.area = new RegExp(t);
		}
		f.tag_str = f.tag || '';
		if (f.tag && _el(f.tag)) {
			var t = _el(f.tag).getAttribute("data-regexp");
			if (t) f.tag = new RegExp(t);
		}
		f.query_str = f.query || '';
		if (f.query) f.query = KonOpas.glob_to_re(f.query);
		f.id_only = !!f.id;
		if (f.id_only) for (var i in f) if ((i != 'id') && (i != 'id_only') && f[i]) {
			f.id_only = false;
			break;
		}
		var ls = self.list.filter(f.id_only ? function(it){ return it.id == f.id; } : _filter, f);
		if (f.id && ls.every(function(p) { return p.id != f.id; })) {
			f.id = '';
			if (KonOpas.Prog.set_filters(f)) return;
		}
		f.hide_ended = true;
		f.prog_view = true;
		KonOpas.Item.show_list(ls, f);
	}

	var f = KonOpas.Prog.get_filters();
	if (KonOpas.Prog.set_filters(f)) return;
	_show_filters(f);
	for (var k in f) {
		if (!k || !f[k] || (f[k] == 'all_' + k + 's')) { delete f[k]; continue; }
	}
	_show_list(f, this);
}
KonOpas.Server = function(id, stars, opt) {
	this.id = id;
	this.stars = stars;

	opt = opt || {};
	this.host = opt.host ||  'https://konopas-server.appspot.com';
	this.el_id = opt.el_id || 'server_connect';
	this.err_el_id = opt.err_el_id || 'server_error';
	try { this.store = localStorage; } catch (e) { this.store = new KonOpas.VarStore(); }

	this.connected = false;
	this.token = this.store.getItem('konopas.token') || false;
	this.ical = this.store.getItem('konopas.'+this.id+'.ical_link') || false;
	this.prog_data = {};
	this.prog_server_mtime = 0;
	this.pub_data = false;
	this.pub_comments = {};
	this.el = document.getElementById(this.el_id);
	this.err_el = false;

	this.disconnect();
	if (this.stars) this.stars.server = this;
	if (this.el && this.id) this.exec('info');
	else _log("server init failed", 'warn');

	var m = /#server_error=(.+)/.exec(window.location.hash);
	if (m) this.error(decodeURIComponent(m[1].replace(/\+/g, ' ')), window.location.href);
}

KonOpas.Server.prototype.disconnect = function() {
	this.connected = false;
	if (this.el) this.el.innerHTML = '<div id="server_info">' + i18n.txt('Not connected') + '</div>';
	document.body.classList.remove('logged-in');
}

KonOpas.Server.prototype.logout = function(ev) {
	_log('server logout');
	this.exec('/logout');
	(ev || window.event).preventDefault();
}

KonOpas.Server.prototype.error = function(msg, url) {
	_log('server error ' + msg + ', url: ' + url, 'error');
	if (msg =='') {
		var cmd = url.replace(this.host, '').replace('/' + this.id + '/', '');
		msg = i18n.txt('server_cmd_fail', {'CMD':'<code>'+cmd+'</code>'});
	}
	if (!this.err_el) {
		var el = document.createElement('div');
		el.id = this.err_el_id;
		el.title = i18n.txt('Click to close');
		el.onclick = function(ev) { this.err_el.style.display = 'none'; }.bind(this);
		document.body.appendChild(el);
		this.err_el = el;
	}
	this.err_el.innerHTML = '<div>' + i18n.txt('Server error') + ': <b>' + msg + '</b></div>';
	this.err_el.style.display = 'block';
	return true;
}

KonOpas.Server.prototype.onmessage = function(ev) {
	ev = ev || window.event;
	if (ev.origin != this.host) {
		_log('Got an unexpected message from ' + ev.origin, 'error');
		_log(ev);
		return;
	}
	var self = this;
	JSON.parse(ev.data, function(k, v) {
		switch (k) {
			case 'ok':    self.cb_ok(v);      break;
			case 'fail':  self.error('', v);  break;
		}
	});
}



// ------------------------------------------------------------------------------------------------ prog

KonOpas.Server.prototype.prog_mtime = function() {
	var mtime = this.prog_server_mtime;
	for (var id in this.prog_data) {
		if (this.prog_data[id][1] > mtime) mtime = this.prog_data[id][1];
	}
	return mtime;
}

KonOpas.Server.prototype.add_prog = function(id, add_star) {
	if (id instanceof Array) id = id.join(',');
	_log('server add_prog "' + id + '" ' + (add_star ? '1' : '0'));
	var t = this.prog_mtime();
	this.exec('prog'
		+ (add_star ? '?add=' : '?rm=') + id
		+ (t ? '&t=' + t : ''));
}

KonOpas.Server.prototype.set_prog = function(star_list) {
	_log('server set_prog "' + star_list);
	var t = this.prog_mtime();
	this.exec('prog'
		+ '?set=' + star_list.join(',')
		+ (t ? '&t=' + t : ''));
}



// ------------------------------------------------------------------------------------------------ comment

KonOpas.Server.prototype.onclick_show_comments = function(ev, id, c_el, af, f_el) {
	ev = ev || window.event;
	ev.cancelBubble = true;
	ev.preventDefault();
	ev.stopPropagation();

	var ac = ev.target;
	if (ac.textContent.substr(0, 4) == i18n.txt('Hide comments').substr(0, 4)) {
		var p = this.pub_data && this.pub_data[id];
		var n_comments = (p && (p[3] > 0)) ? p[3] : 0;
		ac.textContent = i18n.txt('show_comments', {'N':n_comments});
		ac.style.display = n_comments ? 'block' : 'none';
		c_el.style.display = 'none';
		af.style.display = n_comments ? 'none' : 'block';
		f_el.style.display = 'none';
	} else {
		c_el.style.display = 'block';
		if ((f_el.style.display == 'none') && this.connected) af.style.display = 'block';
		this.show_comments(id);
	}
}


KonOpas.Server.prototype.onclick_show_comment_form = function(ev, id, f_el) {
	ev = ev || window.event;
	ev.cancelBubble = true;
	ev.preventDefault();
	ev.stopPropagation();

	var af = ev.target;
	af.style.display = 'none';
	this.show_comment_form(id, af, f_el);
}


KonOpas.Server.prototype.make_comment_div = function(c) {
	var d = _new_elem('div', 'comment');

	var n = _new_elem('span', 'comment-author', c.name);
	d.appendChild(n);

	var dt = new Date(1000 * c.ctime);
	var t = _new_elem('span', 'comment-time', KonOpas.pretty_date(dt, konopas) + ' at ' + KonOpas.pretty_time(dt, konopas));
	t.title = dt.toString();
	d.appendChild(t);

	var m = _new_elem('div', '', c.text);
	d.appendChild(m);

	return d;
}

KonOpas.Server.prototype.show_comments = function(id) {
	var c_el = document.getElementById('c' + id); if (!c_el) return;
	while (c_el.firstChild) c_el.removeChild(c_el.firstChild);
	var ac = c_el.previousSibling,
	    c = this.pub_comments[id];
	if (ac && (ac.tagName.toLowerCase() != 'a')) ac = false;
	if (typeof c == 'undefined') {
		if (ac) {
			ac.classList.remove('js-link');
			ac.textContent = i18n.txt('Loading comments…');
		}
		this.exec('comments?id=' + id);
		return;
	}

	var n_comments = 0;
	if (c) for (var i in c) {
		++n_comments;
		c_el.appendChild(this.make_comment_div(c[i]));
	}

	if (this.pub_data) {
		if (this.pub_data[id]) this.pub_data[id][3] = n_comments;
		else this.pub_data[id] = [0, 0, 0, n_comments];
	}

	if (ac) {
		ac.textContent = i18n.txt('Hide comments');
		ac.classList.add('js-link');
		ac.style.display = n_comments ? 'block' : 'none';
	}

	if (!n_comments) {
		var f_el = document.getElementById('f' + id);
		if (f_el && (f_el.style.display == 'none')) {
			var af = f_el.previousSibling;
			if (af && (af.tagName.toLowerCase() == 'a')) af.style.display = 'block';
		}
	}
}


KonOpas.Server.prototype.show_comment_form = function(id, af, f_el) {
	if (!this.connected) return;
	if (f_el.classList.contains('empty')) {
		if (!document.getElementById('post_comment_iframe')) {
			var fi = document.createElement('iframe');
			fi.id = fi.name = 'post_comment_iframe';
			fi.src = 'javascript:false';
			fi.style.display = 'none';
			document.body.appendChild(fi);
			window.onmessage = this.onmessage.bind(this);
		}
		f_el.method = 'post';
		f_el.action = this.url('add_comment?id=' + encodeURIComponent(id));
		f_el.target = 'post_comment_iframe';
		f_el.innerHTML =
			  '<textarea name="text" rows="4" placeholder="' + i18n.txt('post_author', {'N':this.connected[0]}) + '"></textarea>'
			+ '<input type="submit" name="submit">'
			+ '<input type="reset" value="' + i18n.txt('Cancel') + '">'
			+ '<label><input type="checkbox" name="anon"> ' + i18n.txt('Post anonymously') + '</label>'
			+ '<label><input type="checkbox" name="hide"> ' + i18n.txt('Hide from public') + '</label>';
		f_el.onclick = function(ev) {
			ev = ev || window.event;
			ev.cancelBubble = true;
			ev.stopPropagation();
		};
		f_el.onsubmit = function(ev) {
			f_el.submit.value = i18n.txt('Posting…');
			f_el.submit.disabled = true;
			if (f_el.anon.checked) { f_el.action += '&anon=1'; f_el.anon.disabled = true; }
			if (f_el.hide.checked) { f_el.action += '&hide=1'; f_el.hide.disabled = true; }
		};
		f_el.onreset = function(ev) {
			af.style.display = 'block';
			f_el.style.display = 'none';
		};
		f_el.classList.remove('empty');
	} else {
		f_el.submit.disabled = false;
		f_el.anon.disabled = false;
		f_el.hide.disabled = false;
	}
	f_el.submit.value = i18n.txt('Post comment');
	f_el.style.display = 'block';
}


KonOpas.Server.prototype.make_comments_wrap = function(id) {
	var p = this.pub_data && this.pub_data[id],
	    n_comments = (p && (p[3] > 0)) ? p[3] : 0,
	    d = _new_elem('div', 'comments-wrap');

	var ac = _new_elem('a', 'js-link discreet');
	ac.textContent = i18n.txt('show_comments', {'N':n_comments});
	ac.style.display = n_comments ? 'block' : 'none';
	d.appendChild(ac);

	var c_el = _new_elem('div', 'comments');
	c_el.id = 'c' + id;
	c_el.style.display = 'none';
	d.appendChild(c_el);

	var af = _new_elem('a', 'js-link discreet', i18n.txt('Add a comment'));
	af.style.display = n_comments || !this.connected ? 'none' : 'block';
	d.appendChild(af);

	var f_el = _new_elem('form', 'empty');
	f_el.id = 'f' + id;
	f_el.style.display = 'none';
	d.appendChild(f_el);

	ac.onclick = function(ev) { this.onclick_show_comments(ev, id, c_el, af, f_el); }.bind(this);
	af.onclick = function(ev) { this.onclick_show_comment_form(ev, id, f_el); }.bind(this);
	return d;
}


// ------------------------------------------------------------------------------------------------ item extras

KonOpas.Server.prototype.show_extras = function(id, p_el) {
	if (!this.pub_data) return;
	if (!document.getElementById('c' + id)) {
		p_el.appendChild(this.make_comments_wrap(id));
	}
}



// ------------------------------------------------------------------------------------------------ ical

KonOpas.Server.prototype.show_ical_link = function(p_el) {
	var html = '';
	if (!this.connected) {
		html = i18n.txt('ical_login');
	} else if (this.ical) {
		if (typeof this.ical == 'string') {
			html = i18n.txt('ical_link') + '<br><a href="' + this.ical + '">' + this.ical + '</a>'
				+ '<br><span class="hint">' + i18n.txt('ical_hint') + '</span>';
		} else {
			html = i18n.txt('ical_make', {'A_TAG':'<a id="ical_link" class="js-link">'});
		}
	}
	if (p_el) p_el.innerHTML += '<p id="ical_text">' + html;
	else {
		var i_el = document.getElementById('ical_text');
		if (i_el) i_el.innerHTML = html;
	}
	var a = document.getElementById('ical_link');
	if (a) {
		a.onclick = function() { this.exec('ical_link'); }.bind(this);
	}
}



// ------------------------------------------------------------------------------------------------ exec

KonOpas.Server.prototype.url = function(cmd) {
	if (this.token) cmd += (cmd.indexOf('?') != -1 ? '&' : '?') + 'k=' + encodeURIComponent(this.token);
	return this.host + (cmd[0] == '/' ? '' : '/' + this.id + '/') + cmd;
}

// based on https://github.com/IntoMethod/Lightweight-JSONP/blob/master/jsonp.js
KonOpas.Server.prototype.exec = function(cmd) {
	var script = document.createElement('script'),
		done = false,
		url = this.url(cmd);
	script.src = url;
	script.async = true;
	script.onerror = function(ev) { this.error('', (ev || window.event).target.src); }.bind(this);

	script.onload = script.onreadystatechange = function() {
		if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
			done = true;
			script.onload = script.onreadystatechange = null;
			if (script && script.parentNode) {
				script.parentNode.removeChild(script);
			}
		}
	};
	document.getElementsByTagName('head')[0].appendChild(script);
}



// ------------------------------------------------------------------------------------------------ cb ok/fail

// callback for successful logout, prog
KonOpas.Server.prototype.cb_ok = function(v) {
	var m = /^(?:https?:\/\/[^\/]+)?\/?([^?\/]*)(?:\/([^?]*))(?:\?(.*))?/.exec(v);
	var cmd = m[2] || '';
	var query = m[3] || '';
	switch (cmd) {
		case 'logout':
			this.disconnect();
			this.token = false;
			this.store.setItem('konopas.token', '');
			this.prog_data = {};
			this.prog_server_mtime = 0;
			if (this.stars) {
				this.stars.data = {};
				this.stars.write();
				konopas.set_view();
			}
			this.exec('info');
			_log("server ok (logout): " + JSON.stringify(v));
			break;

		case 'prog':
			var t = /&server_mtime=(\d+)/.exec(query);
			if (t) this.prog_server_mtime = parseInt(t[1], 10);
			_log("server ok (prog): " + JSON.stringify(v));
			break;

		case 'add_comment':
			var id = /\bid=([^&]+)/.exec(query);
			if (id) {
				this.exec('comments?id=' + id[1]);
				var f_el = document.getElementById('f' + id[1]);
				if (f_el) f_el.reset();
			}
			_log("server ok (add_comment): " + JSON.stringify(v));
			break;

		default:
			_log("server ok (???): " + JSON.stringify(v), 'warn');
	}
}

// callback for reporting server errors
KonOpas.Server.prototype.cb_fail = function(v) {
	this.error(v.msg, v.url);
}



// ------------------------------------------------------------------------------------------------ callback

KonOpas.Server.prototype.cb_info = function(v) {
	_log("server info: " + JSON.stringify(v));
	this.connected = [v.name, v.email];
	this.el.innerHTML = '<div id="server_info">'
	                  + '<a id="server_logout" href="' + this.url(v.logout) + '">' + i18n.txt('Logout') + '</a> '
	                  + '<span id="server_user" title="' + ((v.name != v.email) ? v.email : '') + '">' + v.name.replace(/@.*/, '')
	                  + '</span></div>';
	if (v.ical) {
		this.ical = this.ical || true;
		this.show_ical_link(false);
	}
	document.getElementById('server_logout').onclick = this.logout.bind(this);
	document.body.classList.add('logged-in');
	if (typeof jsErrLog == 'object') jsErrLog.info = v.name.replace(/[ @].*/, '');
}

KonOpas.Server.prototype.cb_token = function(token) {
	_log("server token: " + token);
	this.token = token;
	this.store.setItem('konopas.token', token);
}

KonOpas.Server.prototype.cb_login = function(v) {
	_log("server login: " + JSON.stringify(v));
	var links = [];
	for (var cmd in v) {
		links.push('<a href="' + this.url(cmd) + '">' + v[cmd] + '</a>');
	}
	this.el.innerHTML = '<div id="login-links">'
		+ '\n&raquo; <span class="popup-link" id="login-popup-link">' + i18n.txt('Login to sync your data') + '</span>\n'
		+ '<div class="popup" id="login-popup">' + i18n.txt('login_why')
		+ "\n<ul>\n<li>" + links.join("\n<li>")
		+ "\n</ul></div></div>";
	_el('login-popup-link').onclick = KonOpas.popup_open;
}

KonOpas.Server.prototype.cb_my_prog = function(v) {
	_log("server my_prog: " + JSON.stringify(v));
	this.prog_data = v.prog;
	if (v.t0) for (var id in this.prog_data) { this.prog_data[id][1] += v.t0; }
	if (this.stars) this.stars.sync(this.prog_data);
	else _log("Server.stars required for prog sync", 'warn');
}

KonOpas.Server.prototype.cb_my_votes = function(v) { /* obsolete */ }

KonOpas.Server.prototype.cb_pub_data = function(p) {
	_log("server pub_data: " + JSON.stringify(p));
	this.pub_data = p;
	var open_items = document.getElementsByClassName('expanded');
	for (var i = 0; i < open_items.length; ++i) {
		var it = open_items[i].getElementsByClassName('item');
		if (it) this.show_extras(it[0].id.substr(1), it[0]);
	}
}

KonOpas.Server.prototype.cb_show_comments = function(id, c) {
	_log("server show_comments (" + id + "): " + JSON.stringify(c));
	c.sort(function(a, b) { return a.ctime - b.ctime; });
	this.pub_comments[id] = c;
	this.show_comments(id);
}

KonOpas.Server.prototype.cb_ical_link = function(url) {
	this.ical = url;
	this.store.setItem('konopas.'+this.id+'.ical_link', url);
	this.show_ical_link(false);
}
KonOpas.Stars = function(id, opt) {
	opt = opt || {};
	this.name = 'konopas.' + id + '.stars';
	try { this.store = localStorage || sessionStorage || (new KonOpas.VarStore()); }
	catch (e) { this.store = new KonOpas.VarStore(); }
	this.tag = opt.tag || 'has_star';
	this.server = false;
	this.data = this.read();
}

KonOpas.Stars.prototype.read = function() {
	return JSON.parse(this.store && this.store.getItem(this.name) || '{}');
}

KonOpas.Stars.prototype.write = function() {
	try {
		if (this.store) this.store.setItem(this.name, JSON.stringify(this.data));
	} catch (e) {
		if ((e.code != DOMException.QUOTA_EXCEEDED_ERR) || (this.store.length != 0)) { throw e; }
	}
}

KonOpas.Stars.prototype.list = function() {
	var list = [];
	if (this.data) for (var id in this.data) {
		if ((this.data[id].length == 2) && this.data[id][0]) list.push(id);
	}
	return list;
}

KonOpas.Stars.prototype.add = function(star_list, mtime) {
	mtime = mtime || Math.floor(Date.now()/1000);
	star_list.forEach(function(id) { this.data[id] = [1, mtime]; }, this);

	this.write();
	if (this.server) this.server.set_prog(this.list());
}

KonOpas.Stars.prototype.set = function(star_list) {
	var mtime = Math.floor(Date.now()/1000);
	if (this.data) for (var id in this.data) {
		this.data[id] = [0, mtime];
	}
	this.add(star_list, mtime);
}

KonOpas.Stars.prototype.toggle = function(el, id) {
	var add_star = !el.classList.contains(this.tag);
	var mtime = Math.floor(Date.now()/1000);

	this.data[id] = [add_star ? 1 : 0, mtime];
	this.write();
	if (this.server) this.server.add_prog(id, add_star);

	if (add_star) el.classList.add(this.tag);
	else          el.classList.remove(this.tag);
}

KonOpas.Stars.prototype.sync = function(new_data) {
	var local_mod = [], redraw = false;
	for (var id in new_data) {
		if (new_data[id].length != 2) {
			_log('Stars.sync: invalid input ' + id + ': ' + JSON.stringify(new_data[id]), 'warn');
			continue;
		}
		if (!(id in this.data) || (new_data[id][1] > this.data[id][1])) {
			local_mod.push(id);
			if (!(id in this.data) || (new_data[id][0] != this.data[id][0])) redraw = true;
			this.data[id] = new_data[id];
		}
	}
	if (local_mod.length) {
		_log('Stars.sync: local changes: ' + local_mod + (redraw ? ' -> redraw' : ''));
		this.write();
		if (redraw) konopas.set_view();
	}

	if (this.server) {
		var server_add = [], server_rm = [];
		for (var id in this.data) {
			if (!(id in new_data) || (new_data[id][1] < this.data[id][1])) {
				if (this.data[id][0]) server_add.push(id);
				else                  server_rm.push(id);
			}
		}
		if (server_add.length) {
			_log('Stars.sync: server add: ' + server_add);
			this.server.add_prog(server_add, true);
		}
		if (server_rm.length) {
			_log('Stars.sync: server rm: ' + server_rm);
			this.server.add_prog(server_rm, false);
		}

		if (!local_mod.length && !server_add.length && !server_rm.length) {
			_log('Stars.sync: no changes');
		}
	}
}

KonOpas.Stars.prototype.show = function() {
	var view = _el("star_data"),
		hash = window.location.hash.substr(6),
	    set_raw = (hash && (hash.substr(0,4) == 'set:')) ? hash.substr(4).split(',') : [],
	    set = konopas.program.list.filter(function(p) { return (set_raw.indexOf(p.id) >= 0); }).map(function(p) { return p.id; }),
	    set_len = set.length,
	    html = '',
	    star_list = this.list(),
	    stars_len = star_list.length;
	if (konopas.store.limit && (!this.server || !this.server.connected)) {
		html = '<p>' + i18n.txt('star_no_memory', {'WHY': konopas.store.limit, 'SERVER': !!this.server});
	}
	if (!stars_len && !set_len) {
		_el("prog_ls").innerHTML = '';
		view.innerHTML = html + '<p>' + i18n.txt('star_hint');
		return;
	}
	document.body.classList.remove("show_set");
	set.sort();
	star_list.sort();
	var set_link = '#star/set:' + star_list.join(',');
	if (set_len) {
		if (KonOpas.arrays_equal(set, star_list)) {
			html += '<p>' + i18n.txt('star_export_this', { 'THIS':set_link }) + '<p>' +
				i18n.txt('star_export_share', {
					'SHORT': KonOpas.link_to_short_url(location.href),
					'QR': KonOpas.link_to_qr_code(location.href)
				});
		} else {
			document.body.classList.add("show_set");
			var n_same = KonOpas.array_overlap(set, star_list);
			var n_new = set_len - n_same;
			var n_bad = set_raw.length - set_len;
			html += '<p>' + i18n.txt('star_import_this', {'THIS':location.href})
				+ '<p>' + i18n.txt('star_import_diff', { 'PREV':stars_len, 'NEW':n_new, 'SAME':n_same });
			if (n_bad) html += ' ' + i18n.txt('star_import_bad', {'BAD':n_bad});
			if (!stars_len || (n_same != stars_len)) {
				html += '<p>&raquo; <a href="#star" id="star_set_set">' + i18n.txt('star_set') + '</a>';
			}
			if (stars_len) {
				if (n_same != stars_len) {
					var d = [];
					if (n_new) d.push(i18n.txt('add_n', {'N':n_new}));
					d.push(i18n.txt('discard_n', {'N':stars_len - n_same}));
					html += ' (' + d.join(', ') + ')';
				}
				if (n_new) html += '<p>&raquo; <a href="#star" id="star_set_add">' + i18n.txt('star_add', {'N':n_new}) + '</a>';
			}
		}
	} else {
		html += '<p id="star_links">&raquo; ' + i18n.txt('star_export_link', { 'URL':set_link, 'N':stars_len });
	}
	view.innerHTML = html;
	var el_set = _el('star_set_set'); if (el_set) el_set.onclick = function() { konopas.stars.set(set); return true; };
	var el_add = _el('star_set_add'); if (el_add) el_add.onclick = function() { konopas.stars.add(set); return true; };
	if (this.server) this.server.show_ical_link(view);
	var ls = konopas.program.list.filter(function(it) { return (star_list.indexOf(it.id) >= 0) || (set.indexOf(it.id) >= 0); });
	KonOpas.Item.show_list(ls, {hide_ended:true});
	if (set_len) for (var i = 0; i < set_len; ++i) {
		var el = _el('s' + set[i]);
		if (el) el.classList.add("in_set");
	}
}
if (typeof i18n == 'undefined') i18n = {};
i18n.txt = function(key){ return key; };
i18n.translate_html = function(map, a) {
	var list = document.querySelectorAll('['+a+']');
	for (var i = 0, node; node = list[i]; ++i) {
		var key = node.getAttribute(a) || node.textContent.trim();
		if (key in map) {
			var data = node.getAttribute(a + '-var');
			var attr = node.getAttribute(a + '-attr');
			var str = map[key](data && JSON.parse('{' + data.replace(/[^,:]+/g, '"$&"') + '}'));
			if (attr) node.setAttribute(attr, str);
			else node.innerHTML = str;
		}
	}
}

function _log(msg, lvl) {
	if (window.console) switch (lvl) {
		case 'error': console.error(msg); break;
		case 'warn':  console.warn(msg); break;
		default:      console.log(msg);
	}
}

function _el(id) { return id && document.getElementById(id); }

function _new_elem(tag, cl, text, hide) {
	var e = document.createElement(tag);
	if (cl) e.className = cl;
	if (text) e.textContent = text;
	if (hide) e.style.display = 'none';
	return e;
}

KonOpas.link_to_short_url = function(url) {
	var u = encodeURIComponent(url.replace(/^http:\/\//, ''));
	return 'http://is.gd/create.php?url=' + u;
}
KonOpas.link_to_qr_code = function(url) {
	var u = encodeURIComponent(url.replace(/^http:\/\//, ''));
	return 'http://chart.apis.google.com/chart?cht=qr&chs=350x350&chl=' + u;
}

KonOpas.hash_encode = function(s) { return encodeURIComponent(s).replace(/%20/g, '+'); }
KonOpas.hash_decode = function(s) { return decodeURIComponent(s.replace(/\+/g, '%20')); }

KonOpas.glob_to_re = function(pat) {
	var re_re = new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\/-]', 'g');
	pat = pat.replace(re_re, '\\$&').replace(/\\\*/g, '.*').replace(/\\\?/g, '.');
	var terms = pat.match(/"[^"]*"|'[^']*'|\S+/g).map(function(el){
		var t = '\\b' + el.replace(/^(['"])(.*)\1$/, '$2') + '\\b';
		return t; //.replace('\\b.*', '').replace('.*\\b', '');
	});
	return new RegExp(terms.join('|'), 'i');
}


// ------------------------------------------------------------------------------------------------ storage

KonOpas.Store = function(id) {
	try {
		sessionStorage.setItem('konopas.test_var', '1');
		sessionStorage.removeItem('konopas.test_var', '1');
		this.get = function(k) {
			var v = sessionStorage.getItem('konopas.' + id + '.' + k);
			return v ? JSON.parse(v) : v;
		}
		this.set = function(k, v) {
			sessionStorage.setItem('konopas.' + id + '.' + k, JSON.stringify(v));
		}
		this.limit = '';
	} catch (e) {
		var data = {};
		this.get = function(k) { return data[k]; };
		this.set = function(k, v) { data[k] = v; };
		this.limit = (e.name == 'SecurityError') ? 'FFcookies'
				   : ((e.code === DOMException.QUOTA_EXCEEDED_ERR) && (sessionStorage.length === 0)) ? 'IOSprivate'
				   : '?';
	}
}

KonOpas.VarStore = function() {
	var data = {};
	this.getItem = function(k) { return data[k]; };
	this.setItem = function(k, v) { data[k] = v; };
}


// ------------------------------------------------------------------------------------------------ string generation

KonOpas.clean_name = function(p, span_parts) {
	var fn = '', ln = '';
	switch (p.name.length) {
		case 1:
			ln = p.name[0];
			break;
		case 2:
			if (p.name[1]) {
				fn = p.name[0];
				ln = p.name[1];
			} else {
				ln = p.name[0];
			}
			break;
		case 3:
			fn = p.name[2] + ' ' + p.name[0];
			ln = p.name[1];
			break;
		case 4:
			fn = p.name[2] + ' ' + p.name[0];
			ln = p.name[1] + (p.name[3] ? ', ' + p.name[3] : '');
			break;
	}
	return span_parts
		? '<span class="fn">' + fn.trim() + '</span> <span class="ln">' + ln.trim() + '</span>'
		: (fn + ' ' + ln).trim();
}

KonOpas.clean_links = function(p) {
	var ok = false, o = {};
	if (p && ('links' in p)) {
		if (p.links.img || p.links.photo) {
			var img = (p.links.img || p.links.photo).trim();
			if (/^www/.test(img)) img = 'http://' + img;
			if (/:\/\//.test(img)) { o['img'] = { 'tgt': img }; ok = true; }
		}
		if (p.links.url) {
			var url = p.links.url.trim();
			if (!/:\/\//.test(url)) url = 'http://' + url;
			o['URL'] = { 'tgt': url, 'txt': url.replace(/^https?:\/\//, '') };
			ok = true;
		}
		if (p.links.fb) {
			var fb = p.links.fb.trim().replace(/^(https?:\/\/)?(www\.)?facebook.com(\/#!)?\//, '');
			o['Facebook'] = { 'txt': fb };
			if (/[^a-zA-Z0-9.]/.test(fb) && !/^pages\//.test(fb)) fb = 'search.php?q=' + encodeURI(fb).replace(/%20/g, '+');
			o['Facebook']['tgt'] = 'https://www.facebook.com/' + fb;
			ok = true;
		}
		if (p.links.twitter) {
			var tw = p.links.twitter.trim().replace(/[@＠﹫]/g, '').replace(/^(https?:\/\/)?(www\.)?twitter.com(\/#!)?\//, '');
			o['Twitter'] = { 'txt': '@' + tw };
			if (/[^a-zA-Z0-9_]/.test(tw)) tw = 'search/users?q=' + encodeURI(tw).replace(/%20/g, '+');
			o['Twitter']['tgt'] = 'https://www.twitter.com/' + tw;
			ok = true;
		}
	}
	return ok ? o : false;
}


// ------------------------------------------------------------------------------------------------ array comparison

KonOpas.arrays_equal = function(a, b) {
	if (!a || !b) return false;
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; ++i) {
		if (a[i] != b[i]) return false;
	}
	return true;
}

KonOpas.array_overlap = function(a, b) {
	if (!a || !b) return 0;
	if (a.length > b.length) return KonOpas.array_overlap(b, a);
	var n = 0, i, j;
	for (i = 0; i < a.length; ++i) {
		for (j = 0; j < b.length; ++j) if (a[i] == b[j]) { ++n; break; }
	}
	return n;
}


// ------------------------------------------------------------------------------------------------ DOM manipulation

KonOpas.popup_open = function(ev) {
	ev = ev || window.event;
	if (ev.which != 1) return;
	var src_el = ev.target, pop_el = src_el.nextElementSibling;
	if (!pop_el || !pop_el.classList.contains('popup')) {
		if (src_el.href && /\.(gif|jpe?g|png)$/i.test(src_el.href)) {
			pop_el = _new_elem('img', 'popup');
			pop_el.src = src_el.href;
			src_el.parentNode.insertBefore(pop_el, src_el.nextSibling);
		} else return;
	}
	var wrap_el = _new_elem('div', 'popup-wrap');
	wrap_el.onclick = function() {
		pop_el.parentNode.removeChild(pop_el);
		wrap_el.parentNode.removeChild(wrap_el);
		src_el.parentNode.insertBefore(pop_el, src_el.nextSibling);
	};
	var pop_title = pop_el.getAttribute('data-title') || '';
	if (pop_title) wrap_el.appendChild(_new_elem('div', 'popup-title', pop_title));
	pop_el.parentNode.removeChild(pop_el);
	wrap_el.appendChild(pop_el);
	document.body.appendChild(wrap_el);
	if (src_el.href) ev.preventDefault();
}

KonOpas.toggle_collapse = function(ev) {
	ev = ev || window.event;
	var title = ev.target, body = title && title.nextElementSibling;
	if (!body) return;
	if (window.getComputedStyle(body).getPropertyValue('display') == 'none') {
		title.classList.remove('collapse');
		title.classList.add('collapse-open');
	} else {
		title.classList.add('collapse');
		title.classList.remove('collapse-open');
	}
}


// ------------------------------------------------------------------------------------------------ time & date

KonOpas.pretty_time = function(t, opt) {
	function pre0(n) { return (n < 10 ? '0' : '') + n; }
	function _pretty_time(h, m) {
		if (opt.time_show_am_pm) {
			var h12 = h % 12; if (h12 == 0) h12 = 12;
			var m_str = ((m == 0) && opt.abbrev_00_minutes ) ? '' : ':' + pre0(m);
			return h12 + m_str + (h < 12 ? 'am' : 'pm');
		} else {
			return pre0(h) + ':' + pre0(m);
		}
	}
	opt = opt || {};
	if (t instanceof Date) {
		return _pretty_time(t.getHours(), t.getMinutes());
	} else if (typeof t == 'string' || t instanceof String) {
		if (opt.time_show_am_pm) {
			var a = t.split(':'); // hh:mm
			return _pretty_time(parseInt(a[0], 10), parseInt(a[1], 10));
		} else return t;
	} else return '';
}

KonOpas.pretty_time_diff = function(t) {
	var d = (Date.now() - t) / 1e3,
	    a = Math.abs(d),
	    s = [1, 60, 60, 24, 7, 4.333, 12, 1e9];
	if (a < 20) return i18n.txt('just now');
	for (var i = 0, l = s.length; i < l; ++i) {
		if ((a /= s[i]) < 2) return i18n.txt('time_diff', { 'T':~~(a *= s[i]), 'T_UNIT':i-1, 'T_PAST':d>0 });
	}
}

KonOpas.parse_date = function(day_str) {
	if (!day_str) return false;
	var a = day_str.match(/(\d+)/g); if (!a || (a.length < 3)) return false;
	var y = parseInt(a[0], 10), m = parseInt(a[1], 10), d = parseInt(a[2], 10);
	if (!y || !m || !d) return false;
	return new Date(y, m - 1, d, 12);
}

KonOpas.data_date = function(d) {
	function pre0(n) { return (n < 10 ? '0' : '') + n; }
	var t = (d instanceof Date) ? d : KonOpas.parse_date(d);
	return t.getFullYear() + '-' + pre0(t.getMonth() + 1) + '-' + pre0(t.getDate());
}

KonOpas.pretty_date = function(d, opt) {
	opt = opt || {};
	var o = { weekday: "long", month: "long", day: "numeric" },
	    t = (d instanceof Date) ? d : KonOpas.parse_date(d);
	if (!t) return d;
	if (Math.abs(t - Date.now()) > 1000*3600*24*60) o.year = "numeric";
	var s = t.toLocaleDateString(opt.lc, o);
	return s.charAt(0).toUpperCase() + s.slice(1);
}

KonOpas.time_sum = function(t0_str, m_str) {
	var t = 60 * t0_str.substr(0,2) + 1 * t0_str.substr(3,2) + 1 * m_str,
	    h = (t / 60) >> 0,
	    m = t - 60 * h;
	return '' + (h % 24) + ':' + (m<10?'0':'') + m;
}
