import{An as jp,At as Vp,Cn as hr,D as Gp,En as iu,Er as vI,Gn as nI,H as KE,Ht as YE,K as LE,Lt as XE,M as Ie,Mn as jw,Nn as k,On as jI,Qt as bL,Rn as ki,Un as mI,Wt as Yp,Z as MI,ar as qi,bn as gf,cr as rh,d as C,f as CL,g as DE,gn as fE,hr as th,mr as tI,ot as Ov,pn as eu,st as PE,u as Bw,un as eI,vn as g,wn as hu,xr as ui}from"./chunk-D4uNd8bc.js";import{A as _s,U as ie$1,_ as Pn,a as Dn,f as In,h as Mn,lt as z,o as Ds,st as xi,v as Ps}from"./chunk-CgW-gx0c.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&Yp(0)}function se(t,r){if(t&1&&(ki(0,`div`,1),XE(1,1),Vp(2,pe,1,0,`ng-container`,2),eu()),t&2){let e=YE();vI(e.cx(`header`)),Gp(`pBind`,e.ptm(`header`)),Ov(2),Gp(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&MI(0),t&2)iu(` `,YE(2).header(),` `)}function ue(t,r){t&1&&Yp(0)}function fe(t,r){if(t&1&&(ki(0,`div`,1),LE(1,me,1,1),Vp(2,ue,1,0,`ng-container`,2),eu()),t&2){let e=YE();vI(e.cx(`title`)),Gp(`pBind`,e.ptm(`title`)),Ov(),PE(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),Ov(),Gp(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&MI(0),t&2)iu(` `,YE(2).subheader(),` `)}function he(t,r){t&1&&Yp(0)}function ye(t,r){if(t&1&&(ki(0,`div`,1),LE(1,_e,1,1),Vp(2,he,1,0,`ng-container`,2),eu()),t&2){let e=YE();vI(e.cx(`subtitle`)),Gp(`pBind`,e.ptm(`subtitle`)),Ov(),PE(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),Ov(),Gp(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&Yp(0)}function ge(t,r){t&1&&Yp(0)}function be(t,r){if(t&1&&(ki(0,`div`,1),XE(1,2),Vp(2,ge,1,0,`ng-container`,2),eu()),t&2){let e=YE();vI(e.cx(`footer`)),Gp(`pBind`,e.ptm(`footer`)),Ov(2),Gp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends z{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=gf(t)))(n||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var ne=new C(`CARD_INSTANCE`);var Me=(()=>{class t extends _s{componentName=`Card`;$pcCard=g(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ps,{self:!0});_componentStyle=g(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=hu();subheader=hu();style=hu();styleClass=hu();headerFacet=CL(In);footerFacet=CL(Pn);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=CL(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Ie(null);constructor(){super(),ui(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=bL(Dn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=fE({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(rh(l,n.headerFacet,In,5)(l,n.footerFacet,Pn,5)(l,n.contentTemplate,ie,4)(l,n.templates,Dn,4),th(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){nI(4);let d;eI(d=tI())&&(n.headerTemplate=d.first),eI(d=tI())&&(n.titleTemplate=d.first),eI(d=tI())&&(n.subtitleTemplate=d.first),eI(d=tI())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(mI(n._style()),vI(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[jI([te,{provide:ne,useExisting:t},{provide:xi,useExisting:t}]),DE([Ps]),jp],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(KE(de),LE(0,se,3,4,`div`,0),ki(1,`div`,1),LE(2,fe,3,5,`div`,0),LE(3,ye,3,5,`div`,0),ki(4,`div`,1),XE(5),Vp(6,Te,1,0,`ng-container`,2),eu(),LE(7,be,3,4,`div`,0),eu()),i&2&&(PE(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),Ov(),vI(n.cx(`body`)),Gp(`pBind`,n.ptm(`body`)),Ov(),PE(n.header()||n.titleTemplate||n._titleTemplate?2:-1),Ov(),PE(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),Ov(),vI(n.cx(`content`)),Gp(`pBind`,n.ptm(`content`)),Ov(2),Gp(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),Ov(),PE(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[Bw,jw,Mn,Ds,Ps],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=qi({type:t});static ɵinj=hr({imports:[Me,Mn,Ds,Mn,Ds]})}return t})();export{Ve as n,Me as t};