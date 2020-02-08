(function($){var body,masthead,menuToggle,siteNavigation,socialNavigation,siteHeaderMenu,resizeTimer;function initMainNavigation(container){var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':false}).append($('<span />',{'class':'screen-reader-text',text:screenReaderText.expand}));container.find('.menu-item-has-children > a').after(dropdownToggle);container.find('.current-menu-ancestor > button').addClass('toggled-on');container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');container.find('.menu-item-has-children').attr('aria-haspopup','true');container.find('.dropdown-toggle').click(function(e){var _this=$(this),screenReaderSpan=_this.find('.screen-reader-text');e.preventDefault();_this.toggleClass('toggled-on');_this.next('.children, .sub-menu').toggleClass('toggled-on');_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');screenReaderSpan.text(screenReaderSpan.text()===screenReaderText.expand?screenReaderText.collapse:screenReaderText.expand);});}
initMainNavigation($('.main-navigation'));masthead=$('#masthead');menuToggle=masthead.find('#menu-toggle');siteHeaderMenu=masthead.find('#site-header-menu');siteNavigation=masthead.find('#site-navigation');socialNavigation=masthead.find('#social-navigation');(function(){if(!menuToggle.length){return;}
menuToggle.add(siteNavigation).add(socialNavigation).attr('aria-expanded','false');menuToggle.on('click.twentysixteen',function(){$(this).add(siteHeaderMenu).toggleClass('toggled-on');$(this).add(siteNavigation).add(socialNavigation).attr('aria-expanded',$(this).add(siteNavigation).add(socialNavigation).attr('aria-expanded')==='false'?'true':'false');});})();(function(){if(!siteNavigation.length||!siteNavigation.children().length){return;}
function toggleFocusClassTouchScreen(){if(window.innerWidth>=910){$(document.body).on('touchstart.twentysixteen',function(e){if(!$(e.target).closest('.main-navigation li').length){$('.main-navigation li').removeClass('focus');}});siteNavigation.find('.menu-item-has-children > a').on('touchstart.twentysixteen',function(e){var el=$(this).parent('li');if(!el.hasClass('focus')){e.preventDefault();el.toggleClass('focus');el.siblings('.focus').removeClass('focus');}});}else{siteNavigation.find('.menu-item-has-children > a').unbind('touchstart.twentysixteen');}}
if('ontouchstart'in window){$(window).on('resize.twentysixteen',toggleFocusClassTouchScreen);toggleFocusClassTouchScreen();}
siteNavigation.find('a').on('focus.twentysixteen blur.twentysixteen',function(){$(this).parents('.menu-item').toggleClass('focus');});})();function onResizeARIA(){if(window.innerWidth<910){if(menuToggle.hasClass('toggled-on')){menuToggle.attr('aria-expanded','true');}else{menuToggle.attr('aria-expanded','false');}
if(siteHeaderMenu.hasClass('toggled-on')){siteNavigation.attr('aria-expanded','true');socialNavigation.attr('aria-expanded','true');}else{siteNavigation.attr('aria-expanded','false');socialNavigation.attr('aria-expanded','false');}
menuToggle.attr('aria-controls','site-navigation social-navigation');}else{menuToggle.removeAttr('aria-expanded');siteNavigation.removeAttr('aria-expanded');socialNavigation.removeAttr('aria-expanded');menuToggle.removeAttr('aria-controls');}}
function belowEntryMetaClass(param){if(body.hasClass('page')||body.hasClass('search')||body.hasClass('single-attachment')||body.hasClass('error404')){return;}
$('.entry-content').find(param).each(function(){var element=$(this),elementPos=element.offset(),elementPosTop=elementPos.top,entryFooter=element.closest('article').find('.entry-footer'),entryFooterPos=entryFooter.offset(),entryFooterPosBottom=entryFooterPos.top+(entryFooter.height()+28),caption=element.closest('figure'),figcaption=element.next('figcaption'),newImg;if(elementPosTop>entryFooterPosBottom){if('img.size-full'===param||'.wp-block-image img'===param){newImg=new Image();newImg.src=element.attr('src');$(newImg).on('load.twentysixteen',function(){if(newImg.width>=840){if('.wp-block-image img'===param&&element.is('[width]')&&element.attr('width')<840){return;}
element.addClass('below-entry-meta');if(caption.hasClass('wp-caption')){caption.addClass('below-entry-meta');caption.removeAttr('style');}
if(figcaption){figcaption.addClass('below-entry-meta');}}});}else{element.addClass('below-entry-meta');}}else{element.removeClass('below-entry-meta');caption.removeClass('below-entry-meta');}});}
$(document).ready(function(){body=$(document.body);$(window).on('load.twentysixteen',onResizeARIA).on('resize.twentysixteen',function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){belowEntryMetaClass('img.size-full');belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');belowEntryMetaClass('.wp-block-image img');},300);onResizeARIA();});belowEntryMetaClass('img.size-full');belowEntryMetaClass('blockquote.alignleft, blockquote.alignright');belowEntryMetaClass('.wp-block-image img');});})(jQuery);