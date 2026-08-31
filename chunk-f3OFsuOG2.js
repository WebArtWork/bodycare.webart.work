import{o as w,t as r}from"./chunk-Btz99zWn.js";import{An as jp,Ar as wD,At as Vp,Cn as hr,D as Gp,E as Gl,En as iu,Er as vI,Ft as Wp,Gn as nI,H as KE,Ht as YE,K as LE,Kr as zp,Lt as XE,M as Ie,Mn as jw,Nn as k,On as jI,Ot as VI,Pt as Wl,Rn as ki,U as KI,Vt as Xp,Xn as od,Z as MI,Zn as oh,Zt as bD,ar as qi,bn as gf,br as uh,d as C,g as DE,gn as fE,hr as th,j as IL,jr as wL,kt as Vo,mr as tI,nr as qE,or as qp,ot as Ov,pn as eu,sr as rI,st as PE,un as eI,vn as g,wn as hu,x as EL,xn as gg,y as Dh,yt as Sc}from"./chunk-D4uNd8bc.js";import{A as _s,O as Yi,Q as qi$1,h as Mn,lt as z,m as Ki,n as At,o as Ds,st as xi,v as Ps}from"./chunk-CgW-gx0c.js";import{_ as it,a as Ht,c as Mn$1,f as Vn,g as bn,m as Zt,n as Cn,o as Le}from"./chunk-BzjKipoe.js";import{B as S,L as e,i as ft,n as Qe$1,r as at}from"./main-6GUM4X7P.js";import{c as re$1,n as Kn,t as Jn}from"./chunk-C-hnrWv_.js";import{n as et,r as nt}from"./chunk-CG9QqaUM.js";import{t as d}from"./chunk-BhLVIpoo2.js";import{n as O,t as L}from"./chunk-CTBVHhdz2.js";var Re=(()=>{class t extends S{static ɵfac=(()=>{let e;return function(o){return(e||(e=gf(t)))(o||t)}})();static ɵcmp=fE({type:t,selectors:[[``,`data-p-icon`,`chevron-up`]],features:[jp],decls:1,vars:0,consts:[[`d`,`M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z`,`fill`,`currentColor`]],template:function(n,o){n&1&&(od(),qp(0,`path`,0))},encapsulation:2})}return t})();var Ue=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`;var J=[`*`];var Je=[`toggleicon`];var Ze=t=>({active:t});function Xe(t,p){}function Ye(t,p){t&1&&Vp(0,Xe,0,0,`ng-template`)}function en(t,p){if(t&1&&Vp(0,Ye,1,0,null,0),t&2){let e=YE();Gp(`ngTemplateOutlet`,e.toggleicon)(`ngTemplateOutletContext`,VI(2,Ze,e.active()))}}function nn(t,p){if(t&1&&Wp(0,`span`,3),t&2){let e=YE(3);vI(e.cn(e.cx(`toggleicon`),e.pcAccordion.collapseIcon())),Gp(`pBind`,e.ptm(`toggleicon`)),zp(`aria-hidden`,!0)}}function tn(t,p){if(t&1&&(od(),Wp(0,`svg`,4)),t&2){let e=YE(3);vI(e.cx(`toggleicon`)),Gp(`pBind`,e.ptm(`toggleicon`)),zp(`aria-hidden`,!0)}}function on(t,p){if(t&1&&(LE(0,nn,1,4,`span`,1),LE(1,tn,1,4,`:svg:svg`,2)),t&2){let e=YE(2);PE(e.pcAccordion.collapseIcon()?0:-1),Ov(),PE(e.pcAccordion.collapseIcon()?-1:1)}}function an(t,p){if(t&1&&Wp(0,`span`,3),t&2){let e=YE(3);vI(e.cn(e.cx(`toggleicon`),e.pcAccordion.expandIcon())),Gp(`pBind`,e.ptm(`toggleicon`)),zp(`aria-hidden`,!0)}}function rn(t,p){if(t&1&&(od(),Wp(0,`svg`,5)),t&2)Gp(`pBind`,YE(3).ptm(`toggleicon`)),zp(`aria-hidden`,!0)}function cn(t,p){if(t&1&&(LE(0,an,1,4,`span`,1),LE(1,rn,1,2,`:svg:svg`,5)),t&2){let e=YE(2);PE(e.pcAccordion.expandIcon()?0:-1),Ov(),PE(e.pcAccordion.expandIcon()?-1:1)}}function dn(t,p){if(t&1&&(LE(0,on,2,2),LE(1,cn,2,2)),t&2){let e=YE();PE(e.active()?0:-1),Ov(),PE(e.active()?-1:1)}}var sn=`
${Ue}

/* For ngx-prime */
.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: dt('accordion.header.padding');
}

.p-accordionheader.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-accordioncontent .p-motion {
    display: grid;
    grid-template-rows: 1fr;
}
`;var ln={root:`p-accordion p-component`,panel:({instance:t})=>[`p-accordionpanel`,{"p-accordionpanel-active":t.active(),"p-disabled":t.disabled()}],header:`p-accordionheader`,toggleicon:`p-accordionheader-toggle-icon`,contentContainer:`p-accordioncontent`,contentWrapper:`p-accordioncontent-wrapper`,content:`p-accordioncontent-content`};var A=(()=>{class t extends z{name=`accordion`;style=sn;classes=ln;static ɵfac=(()=>{let e;return function(o){return(e||(e=gf(t)))(o||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var qe=new C(`ACCORDION_PANEL_INSTANCE`);var Qe=new C(`ACCORDION_HEADER_INSTANCE`);var Ge=new C(`ACCORDION_CONTENT_INSTANCE`);var ze=new C(`ACCORDION_INSTANCE`);var re=(()=>{class t extends _s{$pcAccordionPanel=g(qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ps,{self:!0});componentName=`AccordionPanel`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(Vo(()=>Z));value=IL(void 0);disabled=hu(!1,{transform:e=>ft(e)});active=KI(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,n){return Array.isArray(e)?e.includes(n):e===n}_componentStyle=g(A);static ɵfac=(()=>{let e;return function(o){return(e||(e=gf(t)))(o||t)}})();static ɵcmp=fE({type:t,selectors:[[`p-accordion-panel`],[`p-accordionpanel`]],hostVars:4,hostBindings:function(n,o){n&2&&(zp(`data-p-disabled`,o.disabled())(`data-p-active`,o.active()),vI(o.cx(`panel`)))},inputs:{value:[1,`value`],disabled:[1,`disabled`]},outputs:{value:`valueChange`},features:[jI([A,{provide:qe,useExisting:t},{provide:xi,useExisting:t}]),DE([Ps]),jp],ngContentSelectors:J,decls:1,vars:0,template:function(n,o){n&1&&(KE(),XE(0))},dependencies:[Ds],encapsulation:2})}return t})();var pn=(()=>{class t extends _s{$pcAccordionHeader=g(Qe,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ps,{self:!0});componentName=`AccordionHeader`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(Vo(()=>Z));pcAccordionPanel=g(Vo(()=>re));id=KI(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=KI(()=>this.pcAccordionPanel.active());disabled=KI(()=>this.pcAccordionPanel.disabled());ariaControls=KI(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){if(this.disabled())return;let n=this.active();this.changeActiveValue();let o=this.active(),i=this.pcAccordionPanel.value();!n&&o?this.pcAccordion.onOpen.emit({originalEvent:e,index:i}):n&&!o&&this.pcAccordion.onClose.emit({originalEvent:e,index:i})}onFocus(){!this.disabled()&&this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case`ArrowDown`:this.arrowDownKey(e);break;case`ArrowUp`:this.arrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`Enter`:case`Space`:case`NumpadEnter`:this.onEnterKey(e);break;default:break}}_componentStyle=g(A);changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest(`[data-pc-name="accordionpanel"]`)}findHeader(e){return Ki(e,`[data-pc-name="accordionheader"]`)}findNextPanel(e,n=!1){let o=n?e:e.nextElementSibling;return o?Yi(o,`data-p-disabled`)?this.findNextPanel(o):this.findHeader(o):null}findPrevPanel(e,n=!1){let o=n?e:e.previousElementSibling;return o?Yi(o,`data-p-disabled`)?this.findPrevPanel(o):this.findHeader(o):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,n){qi$1(n)}arrowDownKey(e){let n=this.findNextPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let n=this.findPrevPanel(this.findPanel(e.currentTarget));n?this.changeFocusedPanel(e,n):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let n=this.findFirstPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEndKey(e){let n=this.findLastPanel();this.changeFocusedPanel(e,n),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}get dataP(){return this.cn({active:this.active()})}static ɵfac=(()=>{let e;return function(o){return(e||(e=gf(t)))(o||t)}})();static ɵcmp=fE({type:t,selectors:[[`p-accordion-header`],[`p-accordionheader`]],contentQueries:function(n,o,i){if(n&1&&th(i,Je,5),n&2){let C;eI(C=tI())&&(o.toggleicon=C.first)}},hostVars:13,hostBindings:function(n,o){n&1&&Xp(`click`,function(C){return o.onClick(C)})(`focus`,function(){return o.onFocus()})(`keydown`,function(C){return o.onKeydown(C)}),n&2&&(zp(`id`,o.id())(`aria-expanded`,o.active())(`aria-controls`,o.ariaControls())(`aria-disabled`,o.disabled())(`role`,`button`)(`tabindex`,o.disabled()?`-1`:`0`)(`data-p-active`,o.active())(`data-p-disabled`,o.disabled())(`data-p`,o.dataP),vI(o.cx(`header`)),uh(`user-select`,`none`))},features:[jI([A,{provide:Qe,useExisting:t},{provide:xi,useExisting:t}]),DE([re$1,Ps]),jp],ngContentSelectors:J,decls:3,vars:1,consts:[[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`],[`data-p-icon`,`chevron-up`,3,`class`,`pBind`],[3,`pBind`],[`data-p-icon`,`chevron-up`,3,`pBind`],[`data-p-icon`,`chevron-down`,3,`pBind`]],template:function(n,o){n&1&&(KE(),XE(0),LE(1,en,1,4)(2,dn,2,2)),n&2&&(Ov(),PE(o.toggleicon?1:2))},dependencies:[d,Re,Ds,Ps,jw],encapsulation:2})}return t})();var un=(()=>{class t extends _s{$pcAccordionContent=g(Ge,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ps,{self:!0});componentName=`AccordionContent`;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}pcAccordion=g(Vo(()=>Z));pcAccordionPanel=g(Vo(()=>re));active=KI(()=>this.pcAccordionPanel.active());ariaLabelledby=KI(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=KI(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);_componentStyle=g(A);ptParams=KI(()=>({context:this.active()}));computedMotionOptions=KI(()=>r(r({},this.ptm(`motion`,this.ptParams())),this.pcAccordion.computedMotionOptions()));static ɵfac=(()=>{let e;return function(o){return(e||(e=gf(t)))(o||t)}})();static ɵcmp=fE({type:t,selectors:[[`p-accordion-content`],[`p-accordioncontent`]],hostVars:6,hostBindings:function(n,o){n&2&&(zp(`id`,o.id())(`role`,`region`)(`data-p-active`,o.active())(`aria-labelledby`,o.ariaLabelledby()),vI(o.cx(`contentContainer`)))},features:[jI([A,{provide:Ge,useExisting:t},{provide:xi,useExisting:t}]),DE([Ps]),jp],ngContentSelectors:J,decls:4,vars:10,consts:[[`name`,`p-collapsible`,`hideStrategy`,`visibility`,3,`visible`,`mountOnEnter`,`unmountOnLeave`,`options`],[3,`pBind`]],template:function(n,o){n&1&&(KE(),ki(0,`p-motion`,0)(1,`div`,1)(2,`div`,1),XE(3),eu()()()),n&2&&(Gp(`visible`,o.active())(`mountOnEnter`,!1)(`unmountOnLeave`,!1)(`options`,o.computedMotionOptions()),Ov(),vI(o.cx(`contentWrapper`)),Gp(`pBind`,o.ptm(`contentWrapper`,o.ptParams())),Ov(),vI(o.cx(`content`)),Gp(`pBind`,o.ptm(`content`,o.ptParams())))},dependencies:[Ds,Ps,at,Qe$1],encapsulation:2})}return t})();var Z=(()=>{class t extends _s{componentName=`Accordion`;$pcAccordion=g(ze,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ps,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}value=IL(void 0);multiple=hu(!1,{transform:e=>ft(e)});styleClass=hu();expandIcon=hu();collapseIcon=hu();selectOnFocus=hu(!1,{transform:e=>ft(e)});transitionOptions=hu(`400ms cubic-bezier(0.86, 0, 0.07, 1)`);motionOptions=hu(void 0);computedMotionOptions=KI(()=>r(r({},this.ptm(`motion`)),this.motionOptions()));onClose=EL();onOpen=EL();id=Ie(At(`pn_id_`));_componentStyle=g(A);onKeydown(e){switch(e.code){case`ArrowDown`:this.onTabArrowDownKey(e);break;case`ArrowUp`:this.onTabArrowUpKey(e);break;case`Home`:e.shiftKey||this.onTabHomeKey(e);break;case`End`:e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let n=this.findNextHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let n=this.findPrevHeaderAction(e.target.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&qi$1(e)}findNextHeaderAction(e,n=!1){let i=Ki(n?e:e.nextElementSibling,`[data-pc-section="accordionheader"]`);return i?Yi(i,`data-p-disabled`)?this.findNextHeaderAction(i.parentElement):Ki(i.parentElement,`[data-pc-section="accordionheader"]`):null}findPrevHeaderAction(e,n=!1){let i=Ki(n?e:e.previousElementSibling,`[data-pc-section="accordionheader"]`);return i?Yi(i,`data-p-disabled`)?this.findPrevHeaderAction(i.parentElement):Ki(i.parentElement,`[data-pc-section="accordionheader"]`):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}getBlockableElement(){return this.el.nativeElement.children[0]}updateValue(e){let n=this.value();if(this.multiple()){let o=Array.isArray(n)?[...n]:[],i=o.indexOf(e);i!==-1?o.splice(i,1):o.push(e),this.value.set(o)}else n===e?this.value.set(void 0):this.value.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=gf(t)))(o||t)}})();static ɵcmp=fE({type:t,selectors:[[`p-accordion`]],hostVars:2,hostBindings:function(n,o){n&1&&Xp(`keydown`,function(C){return o.onKeydown(C)}),n&2&&vI(o.cn(o.cx(`root`),o.styleClass()))},inputs:{value:[1,`value`],multiple:[1,`multiple`],styleClass:[1,`styleClass`],expandIcon:[1,`expandIcon`],collapseIcon:[1,`collapseIcon`],selectOnFocus:[1,`selectOnFocus`],transitionOptions:[1,`transitionOptions`],motionOptions:[1,`motionOptions`]},outputs:{value:`valueChange`,onClose:`onClose`,onOpen:`onOpen`},features:[jI([A,{provide:ze,useExisting:t},{provide:xi,useExisting:t}]),DE([Ps]),jp],ngContentSelectors:J,decls:1,vars:0,template:function(n,o){n&1&&(KE(),XE(0))},dependencies:[Mn,Ds],encapsulation:2})}return t})();var jn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=qi({type:t});static ɵinj=hr({imports:[Z,Mn,re,pn,un,Ds,Mn,Ds]})}return t})();var We=(()=>{class t{send(e$1){return w(this,null,function*(){try{return(yield fetch(`${e.url}/api/telegram/contact`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({slug:e.contact.slug,message:e$1})})).ok}catch(n){return console.error(n),!1}})}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵprov=k({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var mn=[`nameInput`];function fn(t,p){if(t&1&&(ki(0,`div`,2)(1,`p`),MI(2),eu()()),t&2){let e=YE();Ov(2),Dh(e.translateService.translate(`Дякуємо! Ми отримали ваше повідомлення і скоро зв'яжемося.`)())}}function hn(t,p){if(t&1&&(ki(0,`p`,9),MI(1),eu()),t&2){let e=YE(2);Ov(),iu(` `,e.translateService.translate(`Щось пішло не так — спробуйте ще раз.`)(),` `)}}function gn(t,p){if(t&1){let e=qE();ki(0,`form`,4,0),Xp(`ngSubmit`,function(){Gl(e);let o=rI(1);return Wl(YE().submit(o))}),ki(2,`div`,5)(3,`label`),MI(4),eu(),ki(5,`input`,6,1),Xp(`ngModelChange`,function(o){Gl(e);return Wl(YE().name.set(o))}),eu(),wD(),eu(),ki(7,`div`,5)(8,`label`),MI(9),eu(),ki(10,`input`,7),Xp(`ngModelChange`,function(o){Gl(e);return Wl(YE().contact.set(o))}),eu(),wD(),eu(),ki(11,`div`,5)(12,`label`),MI(13),eu(),ki(14,`textarea`,8),Xp(`ngModelChange`,function(o){Gl(e);return Wl(YE().message.set(o))}),eu(),wD(),eu(),LE(15,hn,2,1,`p`,9),ki(16,`button`,10),MI(17),eu()()}if(t&2){let e=rI(1),n=YE();Ov(4),Dh(n.translateService.translate(`Ім'я`)()),Ov(),Gp(`ngModel`,n.name()),bD(),Ov(4),Dh(n.translateService.translate(`Email або телефон`)()),Ov(),Gp(`ngModel`,n.contact()),bD(),Ov(3),Dh(n.translateService.translate(`Повідомлення`)()),Ov(),Gp(`ngModel`,n.message()),bD(),Ov(),PE(n.status()===`error`?15:-1),Ov(),Gp(`disabled`,e.invalid||n.status()===`sending`),Ov(),iu(` `,n.submitLabel()||n.translateService.translate(`Надіслати`)(),` `)}}var vn={user:`Заявка клієнта`,specialist:`Заявка спеціаліста`,venue:`Заявка закладу`};var ct=(()=>{class t{constructor(){this._contactService=g(We),this.translateService=g(gg),this.kind=hu.required(),this.submitLabel=hu(``),this._nameInput=wL(`nameInput`),this.name=Ie(``),this.contact=Ie(``),this.message=Ie(``),this.status=Ie(`idle`),Sc(()=>this._nameInput()?.nativeElement.focus())}submit(e){return w(this,null,function*(){if(e.invalid||this.status()===`sending`)return;this.status.set(`sending`);let n=[`BodyCare lead: ${vn[this.kind()]}`,`\u0406\u043C'\u044F: ${this.name()}`,`\u041A\u043E\u043D\u0442\u0430\u043A\u0442: ${this.contact()}`];if(this.message().trim()&&n.push(``,this.message().trim()),!(yield this._contactService.send(n.join(`
`)))){this.status.set(`error`);return}this.status.set(`success`),e.resetForm()})}retry(){this.status.set(`idle`)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=fE({type:t,selectors:[[`app-lead-form`]],viewQuery:function(n,o){n&1&&oh(o._nameInput,mn,5),n&2&&nI()},inputs:{kind:[1,`kind`],submitLabel:[1,`submitLabel`]},decls:2,vars:1,consts:[[`leadForm`,`ngForm`],[`nameInput`,``],[1,`lead-form`,`lead-form--success`],[`novalidate`,``,1,`lead-form`],[`novalidate`,``,1,`lead-form`,3,`ngSubmit`],[1,`lead-form__field`],[`pInputText`,``,`type`,`text`,`name`,`name`,`required`,``,3,`ngModelChange`,`ngModel`],[`pInputText`,``,`type`,`text`,`name`,`contact`,`required`,``,3,`ngModelChange`,`ngModel`],[`pTextarea`,``,`rows`,`3`,`name`,`message`,3,`ngModelChange`,`ngModel`],[1,`lead-form__error`],[`pButton`,``,`type`,`submit`,3,`disabled`]],template:function(n,o){if(n&1&&LE(0,fn,3,1,`div`,2)(1,gn,18,9,`form`,3),n&2)PE(o.status()===`success`?0:1)},dependencies:[Mn$1,bn,Le,Cn,Vn,it,Zt,Ht,nt,et,O,L,Kn,Jn],styles:[`.lead-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;max-width:420px;margin:0 auto}.lead-form__field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem}.lead-form__field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.85rem;color:var(--%NS%c-text-secondary)}.lead-form__error[_ngcontent-%COMP%]{margin:0;color:var(--%NS%c-danger, #e5484d);font-size:.85rem}.lead-form--success[_ngcontent-%COMP%]{text-align:center;color:var(--%NS%c-text-secondary)}`]})}}return t})();export{re as a,pn as i,ct as n,un as o,jn as r,Z as t};