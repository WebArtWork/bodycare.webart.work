import{A as GI,Dt as Vd,F as Hd,Fn as or,H as Kr,In as p,J as M,Kn as s_,L as I_,M as Gb,Pt as Wn,Qn as uv,Qt as b_,Rn as py,Rt as YS,Tn as k_,U as L,Un as r_,Z as Mb,Zt as av,dt as Pn,fr as yv,gn as i_,gr as zb,gt as Rd,hr as z_,ht as RV,ln as fv,lt as Pd,m as Bg,n as $a,qt as _a,r as $d,sr as xV,tn as c_,y as D,yn as iv}from"./chunk-BsO5p4r7.js";import{A as Y,W as ie$1,_ as Ms,a as Dn,ct as xi,d as In,o as Ds,st as wn,t as As,y as Pn$1}from"./chunk-BdrGrEzo.js";var ee=`
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
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&fv(0)}function se(t,r){if(t&1&&(_a(0,`div`,1),s_(1,1),av(2,pe,1,0,`ng-container`,2),Pd()),t&2){let e=r_();b_(e.cx(`header`)),uv(`pBind`,e.ptm(`header`)),GI(2),uv(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&k_(0),t&2)$d(` `,r_(2).header(),` `)}function ue(t,r){t&1&&fv(0)}function fe(t,r){if(t&1&&(_a(0,`div`,1),zb(1,me,1,1),av(2,ue,1,0,`ng-container`,2),Pd()),t&2){let e=r_();b_(e.cx(`title`)),uv(`pBind`,e.ptm(`title`)),GI(),Gb(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),GI(),uv(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&k_(0),t&2)$d(` `,r_(2).subheader(),` `)}function he(t,r){t&1&&fv(0)}function ye(t,r){if(t&1&&(_a(0,`div`,1),zb(1,_e,1,1),av(2,he,1,0,`ng-container`,2),Pd()),t&2){let e=r_();b_(e.cx(`subtitle`)),uv(`pBind`,e.ptm(`subtitle`)),GI(),Gb(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),GI(),uv(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&fv(0)}function ge(t,r){t&1&&fv(0)}function be(t,r){if(t&1&&(_a(0,`div`,1),s_(1,2),av(2,ge,1,0,`ng-container`,2),Pd()),t&2){let e=r_();b_(e.cx(`footer`)),uv(`pBind`,e.ptm(`footer`)),GI(2),uv(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Bg(t)))(n||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var ne=new D(`CARD_INSTANCE`);var Me=(()=>{class t extends As{componentName=`Card`;$pcCard=p(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Ds,{self:!0});_componentStyle=p(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=or();subheader=or();style=or();styleClass=or();headerFacet=RV(wn);footerFacet=RV(In);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=RV(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=L(null);constructor(){super(),Wn(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=xV(Pn$1);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=Rd({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(yv(l,n.headerFacet,wn,5)(l,n.footerFacet,In,5)(l,n.contentTemplate,ie,4)(l,n.templates,Pn$1,4),$a(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){c_(4);let d;Vd(d=Hd())&&(n.headerTemplate=d.first),Vd(d=Hd())&&(n.titleTemplate=d.first),Vd(d=Hd())&&(n.subtitleTemplate=d.first),Vd(d=Hd())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(I_(n._style()),b_(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[z_([te,{provide:ne,useExisting:t},{provide:xi,useExisting:t}]),Mb([Ds]),iv],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(i_(de),zb(0,se,3,4,`div`,0),_a(1,`div`,1),zb(2,fe,3,5,`div`,0),zb(3,ye,3,5,`div`,0),_a(4,`div`,1),s_(5),av(6,Te,1,0,`ng-container`,2),Pd(),zb(7,be,3,4,`div`,0),Pd()),i&2&&(Gb(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),GI(),b_(n.cx(`body`)),uv(`pBind`,n.ptm(`body`)),GI(),Gb(n.header()||n.titleTemplate||n._titleTemplate?2:-1),GI(),Gb(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),GI(),b_(n.cx(`content`)),uv(`pBind`,n.ptm(`content`)),GI(2),uv(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),GI(),Gb(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[py,YS,Dn,Ms,Ds],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Kr({type:t});static ɵinj=Pn({imports:[Me,Dn,Ms,Dn,Ms]})}return t})();export{Ve as n,Me as t};