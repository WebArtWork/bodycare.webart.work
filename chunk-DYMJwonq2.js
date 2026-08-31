import{n as s,t as r}from"./chunk-Btz99zWn.js";import{A as HI,An as jp,Ar as wD,At as Vp,Cn as hr,D as Gp,Dt as VE,E as Gl,En as iu,Er as vI,Ft as Wp,Gn as nI,H as KE,Ht as YE,K as LE,Kr as zp,Lt as XE,M as Ie,Mn as jw,Nn as k,On as jI,Ot as VI,Pt as Wl,Qn as ou,Qt as bL,Rn as ki$1,U as KI,Un as mI,Vt as Xp,Wt as Yp,Xn as od,Y as Lw,Z as MI,Zn as oh,Zt as bD,ar as qi$1,bn as gf,br as uh,c as BE,cn as dj,cr as rh,ct as Pw,d as C,f as CL,fr as ru,g as DE,gn as fE,hr as th,j as IL,jr as wL,jt as WI,k as HE,kt as Vo$1,l as BI,mr as tI,nr as qE,nt as NL,or as qp,ot as Ov,pn as eu,q as Lf,sr as rI,st as PE,t as $I,tt as Mw,u as Bw,un as eI,vn as g,wn as hu,x as EL,xr as ui$1,xt as Sw,y as Dh,yn as ge}from"./chunk-D4uNd8bc.js";import{A as _s,B as ft,H as hn$1,Q as qi$2,R as fn$1,S as Ti$1,U as ie,W as je,_ as Pn$1,a as Dn$1,b as Re$1,ct as y,f as In$1,g as Nn$1,h as Mn$1,lt as z,m as Ki$1,n as At,o as Ds,ot as wn$1,q as mn$1,st as xi$1,t as $n$1,ut as zi$1,v as Ps,y as Qi$1}from"./chunk-CgW-gx0c.js";import{c as ie$1,t as Jt$1}from"./chunk-BlN21rvw.js";import{c as Mn$2,m as Zt$1,n as Cn$1,o as Le,v as m,y as pe}from"./chunk-BzjKipoe.js";import{B as S,o as f$1,s as f,t as Ce,z as L}from"./main-6GUM4X7P.js";import{n as l,r as u,t as c}from"./chunk-k3oHNX5t.js";import{r as Q}from"./chunk-BJu_y_vD.js";import{t as H}from"./chunk-Cg33snyU.js";import{a as Yt,l as xt,n as Kn$1,s as qe,t as Jn$1}from"./chunk-C-hnrWv_.js";import{n as et,r as nt}from"./chunk-CG9QqaUM.js";import{t as H$1}from"./chunk-822k6ZJF.js";import{t as d}from"./chunk-BhLVIpoo2.js";import{n as mt,r as xe}from"./chunk-LWD06r6i2.js";import{a as li$1,i as ii$1,n as ci$1,o as mi$1,r as ei$1,s as vs,t as Ci$1}from"./chunk-amryaE1H2.js";var qt=(()=>{class t extends S{static ɵfac=(()=>{let e;return function(i){return(e||(e=gf(t)))(i||t)}})();static ɵcmp=fE({type:t,selectors:[[``,`data-p-icon`,`minus`]],features:[jp],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,i){n&1&&(od(),qp(0,`path`,0))},encapsulation:2})}return t})();var Ut=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var ci=[`icon`];var di=[`input`];var pi=(t,a,e)=>({checked:t,class:a,dataP:e});function ui(t,a){if(t&1&&Wp(0,`span`,7),t&2){let e=YE(3);vI(e.cx(`icon`)),Gp(`ngClass`,e.checkboxIcon())(`pBind`,e.ptm(`icon`)),zp(`data-p`,e.dataP)}}function mi(t,a){if(t&1&&(od(),Wp(0,`svg`,8)),t&2){let e=YE(3);vI(e.cx(`icon`)),Gp(`pBind`,e.ptm(`icon`)),zp(`data-p`,e.dataP)}}function hi(t,a){if(t&1&&(LE(0,ui,1,5,`span`,5),LE(1,mi,1,4,`:svg:svg`,6)),t&2){let e=YE(2);PE(e.checkboxIcon()?0:-1),Ov(),PE(e.checkboxIcon()?-1:1)}}function _i(t,a){if(t&1&&(od(),Wp(0,`svg`,9)),t&2){let e=YE(2);vI(e.cx(`icon`)),Gp(`pBind`,e.ptm(`icon`)),zp(`data-p`,e.dataP)}}function fi(t,a){if(t&1&&(LE(0,hi,2,2),LE(1,_i,1,4,`:svg:svg`,4)),t&2){let e=YE();PE(e.checked?0:-1),Ov(),PE(e._indeterminate()?1:-1)}}function gi(t,a){}function bi(t,a){t&1&&Vp(0,gi,0,0,`ng-template`)}var vi=`
    ${Ut}

    /* Native checkbox directive: retain browser interaction and accessibility while using the active theme color. */
    input.p-checkbox.p-component {
        accent-color: dt('checkbox.checked.background');
        cursor: pointer;
    }

    input.p-checkbox.p-component.p-disabled,
    input.p-checkbox.p-component[readonly] {
        cursor: default;
    }

    .p-checkbox > .p-checkbox-native-icon:empty::before {
        content: '\xE2\u0153\u201C';
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        line-height: 1;
    }

    .p-checkbox-checked > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.color');
    }

    .p-checkbox-checked > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.disabled.color');
    }

    /* For ngx-prime */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var Ci={root:({instance:t})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":t.size()===`small`,"p-checkbox-lg p-inputfield-lg":t.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var Qt=(()=>{class t extends z{name=`checkbox`;style=vi;classes=Ci;static ɵfac=(()=>{let e;return function(i){return(e||(e=gf(t)))(i||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var Wt=new C(`CHECKBOX_INSTANCE`);var xi={provide:pe,useExisting:Vo$1(()=>$e),multi:!0};var $e=(()=>{class t extends xe{componentName=`Checkbox`;hostName=hu(``);value=hu();binary=hu(void 0,{transform:Sw});ariaLabelledBy=hu();ariaLabel=hu();tabindex=hu(void 0,{transform:Mw});inputId=hu();inputStyle=hu();styleClass=hu();inputClass=hu();indeterminate=hu(!1,{transform:Sw});formControl=hu();checkboxIcon=hu();readonly=hu(void 0,{transform:Sw});autofocus=hu(void 0,{transform:Sw});trueValue=hu(!0);falseValue=hu(!1);variant=hu();size=hu();onChange=EL();onFocus=EL();onBlur=EL();inputViewChild=wL(`input`);get checked(){return this._indeterminate()?!1:this.binary()?this.modelValue()===this.trueValue():hn$1(this.value(),this.modelValue())}_indeterminate=Ie(void 0);checkboxIconTemplate=CL(`icon`,{descendants:!1});templates=bL(Dn$1);_checkboxIconTemplate;focused=!1;_componentStyle=g(Qt);bindDirectiveInstance=g(Ps,{self:!0});$pcCheckbox=g(Wt,{optional:!0,skipSelf:!0})??void 0;$variant=KI(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());constructor(){super(),NL()&&console.warn('`<p-checkbox>` is deprecated and will be removed in a future major version. Use a native `<input type="checkbox" pCheckbox>` instead.'),ui$1(()=>{this._indeterminate.set(this.indeterminate())})}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,i=this.injector.get(m,null,{optional:!0,self:!0}),o=this.formControl(),l=i&&!o?i.value:this.modelValue();this.binary()?(n=this._indeterminate()?this.trueValue():this.checked?this.falseValue():this.trueValue(),this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=l.filter(k=>!ie(k,this.value())):n=l?[...l,this.value()]:[this.value()],this.onModelChange(n),this.writeModelValue(n),o&&o.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly()||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild()?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(n){return new(n||t)};static ɵcmp=fE({type:t,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,i,o){n&1&&rh(o,i.checkboxIconTemplate,ci,4)(o,i.templates,Dn$1,4),n&2&&nI(2)},viewQuery:function(n,i){n&1&&oh(i.inputViewChild,di,5),n&2&&nI()},hostVars:6,hostBindings:function(n,i){n&2&&(zp(`data-p-highlight`,i.checked)(`data-p-checked`,i.checked)(`data-p-disabled`,i.$disabled())(`data-p`,i.dataP),vI(i.cn(i.cx(`root`),i.styleClass())))},inputs:{hostName:[1,`hostName`],value:[1,`value`],binary:[1,`binary`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],inputStyle:[1,`inputStyle`],styleClass:[1,`styleClass`],inputClass:[1,`inputClass`],indeterminate:[1,`indeterminate`],formControl:[1,`formControl`],checkboxIcon:[1,`checkboxIcon`],readonly:[1,`readonly`],autofocus:[1,`autofocus`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[jI([xi,Qt,{provide:Wt,useExisting:t},{provide:xi$1,useExisting:t}]),DE([Ps]),jp],decls:5,vars:27,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`indeterminate`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`],[3,`class`,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,i){n&1&&(ki$1(0,`input`,1,0),Xp(`focus`,function(l){return i.onInputFocus(l)})(`blur`,function(l){return i.onInputBlur(l)})(`change`,function(l){return i.handleChange(l)}),eu(),ki$1(2,`div`,2),LE(3,fi,2,2),Vp(4,bi,1,0,null,3),eu()),n&2&&(mI(i.inputStyle()),vI(i.cn(i.cx(`input`),i.inputClass())),Gp(`checked`,i.checked)(`indeterminate`,!!i._indeterminate())(`pBind`,i.ptm(`input`)),zp(`id`,i.inputId())(`value`,i.value())(`name`,i.name())(`tabindex`,i.tabindex())(`required`,i.required()?``:void 0)(`readonly`,i.readonly()?``:void 0)(`disabled`,i.$disabled()?``:void 0)(`aria-labelledby`,i.ariaLabelledBy())(`aria-label`,i.ariaLabel()),Ov(2),vI(i.cx(`box`)),Gp(`pBind`,i.ptm(`box`)),zp(`data-p`,i.dataP),Ov(),PE(!i.checkboxIconTemplate()&&!i._checkboxIconTemplate?3:-1),Ov(),Gp(`ngTemplateOutlet`,i.checkboxIconTemplate()||i._checkboxIconTemplate)(`ngTemplateOutletContext`,$I(23,pi,i.checked,i.cx(`icon`),i.dataP)))},dependencies:[Bw,Lw,jw,Mn$1,f,qt,Ds,Ps],encapsulation:2})}return t})();var Zt=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var yi=[`removeicon`];var ki=[`*`];function Ii(t,a){if(t&1){let e=qE();ki$1(0,`img`,2),Xp(`error`,function(i){Gl(e);return Wl(YE().imageError(i))}),eu()}if(t&2){let e=YE();vI(e.cx(`image`)),Gp(`pBind`,e.ptm(`image`))(`src`,e.resolvedImage(),Lf)(`alt`,e.resolvedAlt())}}function Ti(t,a){if(t&1&&Wp(0,`span`,4),t&2){let e=YE(2);vI(e.resolvedIcon()),Gp(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function Si(t,a){if(t&1&&LE(0,Ti,1,4,`span`,3),t&2)PE(YE().resolvedIcon()?0:-1)}function Mi(t,a){if(t&1&&(ki$1(0,`div`,5),MI(1),eu()),t&2){let e=YE();vI(e.cx(`label`)),Gp(`pBind`,e.ptm(`label`)),Ov(),Dh(e.resolvedLabel())}}function Oi(t,a){if(t&1){let e=qE();ki$1(0,`span`,9),Xp(`click`,function(i){Gl(e);return Wl(YE(3).close(i))})(`keydown`,function(i){Gl(e);return Wl(YE(3).onKeydown(i))}),eu()}if(t&2){let e=YE(3);vI(e.resolvedRemoveIcon()),Gp(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),zp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function wi(t,a){if(t&1){let e=qE();od(),ki$1(0,`svg`,10),Xp(`click`,function(i){Gl(e);return Wl(YE(3).close(i))})(`keydown`,function(i){Gl(e);return Wl(YE(3).onKeydown(i))}),eu()}if(t&2){let e=YE(3);vI(e.cx(`removeIcon`)),Gp(`pBind`,e.ptm(`removeIcon`)),zp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function Vi(t,a){if(t&1&&(LE(0,Oi,1,6,`span`,7),LE(1,wi,1,5,`:svg:svg`,8)),t&2){let e=YE(2);PE(e.resolvedRemoveIcon()?0:-1),Ov(),PE(e.resolvedRemoveIcon()?-1:1)}}function Di(t,a){}function Fi(t,a){t&1&&Vp(0,Di,0,0,`ng-template`)}function Ei(t,a){if(t&1){let e=qE();ki$1(0,`span`,11),Xp(`click`,function(i){Gl(e);return Wl(YE(2).close(i))})(`keydown`,function(i){Gl(e);return Wl(YE(2).onKeydown(i))}),Vp(1,Fi,1,0,null,12),eu()}if(t&2){let e=YE(2);vI(e.cx(`removeIcon`)),Gp(`pBind`,e.ptm(`removeIcon`)),zp(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel),Ov(),Gp(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function Ni(t,a){if(t&1&&(LE(0,Vi,2,2),LE(1,Ei,2,6,`span`,6)),t&2){let e=YE();PE(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),Ov(),PE(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}var Li={root:({instance:t})=>({display:!t.visible&&`none`})};var Bi={root:({instance:t})=>[`p-chip p-component`,{"p-disabled":t.disabled()}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var Jt=(()=>{class t extends z{name=`chip`;style=Zt;classes=Bi;inlineStyles=Li;static ɵfac=(()=>{let e;return function(i){return(e||(e=gf(t)))(i||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var ei=new C(`CHIP_INSTANCE`);var ti=(()=>{class t extends _s{componentName=`Chip`;$pcChip=g(ei,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(Ps,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=hu();icon=hu();image=hu();alt=hu();styleClass=hu();disabled=hu(!1,{transform:Sw});removable=hu(!1,{transform:Sw});removeIcon=hu();onRemove=EL();onImageError=EL();visible=!0;get removeAriaLabel(){return this.config.getTranslation($n$1.ARIA).removeLabel}chipProps=hu();resolvedLabel=KI(()=>this.chipProps()?.label??this.label());resolvedIcon=KI(()=>this.chipProps()?.icon??this.icon());resolvedImage=KI(()=>this.chipProps()?.image??this.image());resolvedAlt=KI(()=>this.chipProps()?.alt??this.alt());resolvedStyleClass=KI(()=>this.chipProps()?.styleClass??this.styleClass());resolvedRemovable=KI(()=>this.chipProps()?.removable??this.removable());resolvedRemoveIcon=KI(()=>this.chipProps()?.removeIcon??this.removeIcon());_componentStyle=g(Jt);removeIconTemplate;templates=bL(Dn$1);_removeIconTemplate;onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){e.key===`Enter`||e.key===`Backspace`?this.close(e):(e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),this.close(e))}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.resolvedRemovable()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=gf(t)))(i||t)}})();static ɵcmp=fE({type:t,selectors:[[`p-chip`]],contentQueries:function(n,i,o){if(n&1&&(rh(o,i.templates,Dn$1,4),th(o,yi,4)),n&2){nI();let l;eI(l=tI())&&(i.removeIconTemplate=l.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(zp(`aria-label`,i.resolvedLabel())(`data-p`,i.dataP),mI(i.sx(`root`)),vI(i.cn(i.cx(`root`),i.resolvedStyleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],alt:[1,`alt`],styleClass:[1,`styleClass`],disabled:[1,`disabled`],removable:[1,`removable`],removeIcon:[1,`removeIcon`],chipProps:[1,`chipProps`]},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[jI([Jt,{provide:ei,useExisting:t},{provide:xi$1,useExisting:t}]),DE([Ps]),jp],ngContentSelectors:ki,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,i){n&1&&(KE(),XE(0),LE(1,Ii,1,5,`img`,0)(2,Si,1,1),LE(3,Mi,2,4,`div`,1),LE(4,Ni,2,2)),n&2&&(Ov(),PE(i.resolvedImage()?1:2),Ov(2),PE(i.resolvedLabel()?3:-1),Ov(),PE(i.resolvedRemovable()?4:-1))},dependencies:[Bw,Lw,jw,L,Mn$1,Ps],encapsulation:2})}return t})();var ii=`
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        align-self: center;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-display-chip .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
        min-width: 100%;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled):hover {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }

    .p-floatlabel-in .p-multiselect-filter {
        padding-block-start: dt('multiselect.padding.y');
        padding-block-end: dt('multiselect.padding.y');
    }
`;var oi=t=>({$implicit:t});var Pi=(t,a)=>({checked:t,class:a});function zi(t,a){}function Hi(t,a){t&1&&Vp(0,zi,0,0,`ng-template`)}function $i(t,a){if(t&1&&Vp(0,Hi,1,0,null,2),t&2){let e=a.class,n=YE(2);Gp(`ngTemplateOutlet`,n.itemCheckboxIconTemplate())(`ngTemplateOutletContext`,HI(2,Pi,n.selected(),e))}}function Ri(t,a){t&1&&Vp(0,$i,1,5,`ng-template`,null,0,WI)}function Ki(t,a){if(t&1&&(ki$1(0,`span`),MI(1),eu()),t&2){let e=YE();Ov(),Dh(e.label()??`empty`)}}function Gi(t,a){t&1&&Yp(0)}var ji=[`item`];var qi=[`header`];var Ui=[`emptyfilter`];var Qi=[`empty`];var Wi=[`itemcheckboxicon`];var Xi=[`headercheckboxicon`];var Yi=[`group`];var Zi=[`loader`];var Ji=[`filter`];var en=[`footer`];var tn=[`selecteditems`];var nn=[`loadingicon`];var on=[`filtericon`];var ln=[`removetokenicon`];var an=[`chipicon`];var sn=[`clearicon`];var rn=[`dropdownicon`];var cn=[`overlay`];var dn=[`filterInput`];var pn=[`focusInput`];var un=[`items`];var mn=[`scroller`];var hn=[`lastHiddenFocusableEl`];var _n=[`firstHiddenFocusableEl`];var fn=[`headerCheckbox`];var gn=[[[`p-header`]],[[`p-footer`]]];var bn=[`p-header`,`p-footer`];var vn=()=>({class:`p-multiselect-chip-icon`});var Cn=(t,a)=>({$implicit:t,removeChip:a});var xn=t=>({dataP:t});var li=t=>({options:t});var yn=(t,a,e)=>({checked:t,partialSelected:a,class:e});var Ke=t=>({height:t});var ai=(t,a)=>({$implicit:t,options:a});var kn=()=>({});function In(t,a){if(t&1&&(ru(0),MI(1),ou()),t&2){let e=YE(2);Ov(),Dh(e.label()||`empty`)}}function Tn(t,a){if(t&1&&MI(0),t&2)iu(` `,YE(3).getSelectedItemsLabel(),` `)}function Sn(t,a){t&1&&Yp(0)}function Mn(t,a){if(t&1){let e=qE();ki$1(0,`span`,22),Xp(`click`,function(i){Gl(e);let o=YE(3).$implicit;return Wl(YE(4).removeOption(o,i))}),Vp(1,Sn,1,0,`ng-container`,23),eu()}if(t&2){let e=YE(7);vI(e.cx(`chipIcon`)),Gp(`pBind`,e.ptm(`chipIcon`)),zp(`aria-hidden`,!0),Ov(),Gp(`ngTemplateOutlet`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)(`ngTemplateOutletContext`,BI(6,vn))}}function On(t,a){if(t&1&&LE(0,Mn,2,7,`span`,21),t&2){let e=YE(6);PE(!e.$disabled()&&!e.readonly()?0:-1)}}function wn(t,a){t&1&&Vp(0,On,1,1,`ng-template`,null,4,WI)}function Vn(t,a){if(t&1){let e=qE();ki$1(0,`div`,17,3)(2,`p-chip`,20),Xp(`onRemove`,function(i){let o=Gl(e).$implicit;return Wl(YE(4).removeOption(o,i))}),LE(3,wn,2,0),eu()()}if(t&2){let e=a.$implicit,n=YE(4);vI(n.cx(`chipItem`)),Gp(`pBind`,n.ptm(`chipItem`)),Ov(2),vI(n.cx(`pcChip`)),Gp(`pt`,n.ptm(`pcChip`))(`unstyled`,n.unstyled())(`label`,n.getLabelByValue(e))(`removable`,!n.$disabled()&&!n.readonly())(`removeIcon`,n.chipIcon()),Ov(),PE(n.chipIconTemplate||n._chipIconTemplate||n.removeTokenIconTemplate||n._removeTokenIconTemplate?3:-1)}}function Dn(t,a){if(t&1&&VE(0,Vn,4,11,`div`,19,BE),t&2)HE(YE(3).chipSelectedItems())}function Fn(t,a){if(t&1&&(ru(0),MI(1),ou()),t&2){let e=YE(3);Ov(),Dh(e.placeholder()||`empty`)}}function En(t,a){if(t&1&&(LE(0,Tn,1,1)(1,Dn,2,0),LE(2,Fn,2,1,`ng-container`)),t&2){let e=YE(2);PE(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?0:1),Ov(2),PE(!e.modelValue()||e.modelValue().length===0?2:-1)}}function Nn(t,a){if(t&1&&(LE(0,In,2,1,`ng-container`),LE(1,En,3,2)),t&2){let e=YE();PE(e.display()===`comma`?0:-1),Ov(),PE(e.display()===`chip`?1:-1)}}function Ln(t,a){t&1&&Yp(0)}function Bn(t,a){if(t&1&&(ru(0),MI(1),ou()),t&2){let e=YE(2);Ov(),Dh(e.placeholder()||`empty`)}}function An(t,a){if(t&1&&(Vp(0,Ln,1,0,`ng-container`,23),LE(1,Bn,2,1,`ng-container`)),t&2){let e=YE();Gp(`ngTemplateOutlet`,e.selectedItemsTemplate||e._selectedItemsTemplate)(`ngTemplateOutletContext`,HI(3,Cn,e.selectedOptions,e.removeOption.bind(e))),Ov(),PE(!e.modelValue()||e.modelValue().length===0?1:-1)}}function Pn(t,a){if(t&1){let e=qE();od(),ki$1(0,`svg`,25),Xp(`click`,function(i){Gl(e);return Wl(YE(2).clear(i))}),eu()}if(t&2){let e=YE(2);vI(e.cx(`clearIcon`)),Gp(`pBind`,e.ptm(`clearIcon`)),zp(`aria-hidden`,!0)}}function zn(t,a){}function Hn(t,a){t&1&&Vp(0,zn,0,0,`ng-template`)}function $n(t,a){if(t&1){let e=qE();ki$1(0,`span`,22),Xp(`click`,function(i){Gl(e);return Wl(YE(2).clear(i))}),Vp(1,Hn,1,0,null,26),eu()}if(t&2){let e=YE(2);vI(e.cx(`clearIcon`)),Gp(`pBind`,e.ptm(`clearIcon`)),zp(`aria-hidden`,!0),Ov(),Gp(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Rn(t,a){if(t&1&&(ru(0),LE(1,Pn,1,4,`:svg:svg`,24),LE(2,$n,2,5,`span`,19),ou()),t&2){let e=YE();Ov(),PE(!e.clearIconTemplate&&!e._clearIconTemplate?1:-1),Ov(),PE(e.clearIconTemplate||e._clearIconTemplate?2:-1)}}function Kn(t,a){t&1&&Yp(0)}function Gn(t,a){if(t&1&&Vp(0,Kn,1,0,`ng-container`,26),t&2){let e=YE(2);Gp(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)}}function jn(t,a){if(t&1&&Wp(0,`span`,17),t&2){let e=YE(3);vI(e.cn(e.cx(`loadingIcon`),`pi-spin `+e.loadingIcon())),Gp(`pBind`,e.ptm(`loadingIcon`)),zp(`aria-hidden`,!0)}}function qn(t,a){if(t&1&&Wp(0,`span`,17),t&2){let e=YE(3);vI(e.cn(e.cx(`loadingIcon`),`pi pi-spinner pi-spin`)),Gp(`pBind`,e.ptm(`loadingIcon`)),zp(`aria-hidden`,!0)}}function Un(t,a){if(t&1&&(ru(0),LE(1,jn,1,4,`span`,19),LE(2,qn,1,4,`span`,19),ou()),t&2){let e=YE(2);Ov(),PE(e.loadingIcon()?1:-1),Ov(),PE(e.loadingIcon()?-1:2)}}function Qn(t,a){if(t&1&&(ru(0),LE(1,Gn,1,1,`ng-container`),LE(2,Un,3,2,`ng-container`),ou()),t&2){let e=YE();Ov(),PE(e.loadingIconTemplate||e._loadingIconTemplate?1:-1),Ov(),PE(!e.loadingIconTemplate&&!e._loadingIconTemplate?2:-1)}}function Wn(t,a){if(t&1&&Wp(0,`span`,29),t&2){let e=YE(3);vI(e.cx(`dropdownIcon`)),Gp(`pBind`,e.ptm(`dropdownIcon`))(`ngClass`,e.dropdownIcon()),zp(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Xn(t,a){if(t&1&&(od(),Wp(0,`svg`,30)),t&2){let e=YE(3);vI(e.cx(`dropdownIcon`)),Gp(`pBind`,e.ptm(`dropdownIcon`)),zp(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Yn(t,a){if(t&1&&(ru(0),LE(1,Wn,1,6,`span`,27),LE(2,Xn,1,5,`:svg:svg`,28),ou()),t&2){let e=YE(2);Ov(),PE(e.dropdownIcon()?1:-1),Ov(),PE(e.dropdownIcon()?-1:2)}}function Zn(t,a){}function Jn(t,a){t&1&&Vp(0,Zn,0,0,`ng-template`)}function eo(t,a){if(t&1&&(ki$1(0,`span`,17),Vp(1,Jn,1,0,null,23),eu()),t&2){let e=YE(2);vI(e.cx(`dropdownIcon`)),Gp(`pBind`,e.ptm(`dropdownIcon`)),zp(`aria-hidden`,!0),Ov(),Gp(`ngTemplateOutlet`,e.dropdownIconTemplate||e._dropdownIconTemplate)(`ngTemplateOutletContext`,VI(6,xn,e.dropdownIconDataP))}}function to(t,a){if(t&1&&(LE(0,Yn,3,2,`ng-container`),LE(1,eo,2,8,`span`,19)),t&2){let e=YE();PE(!e.dropdownIconTemplate&&!e._dropdownIconTemplate?0:-1),Ov(),PE(e.dropdownIconTemplate||e._dropdownIconTemplate?1:-1)}}function io(t,a){t&1&&Yp(0)}function no(t,a){t&1&&Yp(0)}function oo(t,a){if(t&1&&Vp(0,no,1,0,`ng-container`,23),t&2){let e=YE(3);Gp(`ngTemplateOutlet`,e.filterTemplate||e._filterTemplate)(`ngTemplateOutletContext`,VI(2,li,e.filterOptions))}}function lo(t,a){if(t&1&&(od(),Wp(0,`svg`,38)),t&2){let e=YE().class,n=YE(5);vI(e),Gp(`pBind`,n.getHeaderCheckboxPTOptions(`pcHeaderCheckbox.icon`))}}function ao(t,a){}function so(t,a){t&1&&Vp(0,ao,0,0,`ng-template`)}function ro(t,a){if(t&1&&(LE(0,lo,1,3,`:svg:svg`,37),Vp(1,so,1,0,null,23)),t&2){let e=a.class,n=YE(5);PE(!n.headerCheckboxIconTemplate()&&!n._headerCheckboxIconTemplate&&n.allSelected()?0:-1),Ov(),Gp(`ngTemplateOutlet`,n.headerCheckboxIconTemplate()||n._headerCheckboxIconTemplate)(`ngTemplateOutletContext`,$I(3,yn,n.allSelected(),n.partialSelected(),e))}}function co(t,a){if(t&1){let e=qE();ki$1(0,`p-checkbox`,36,8),Xp(`onChange`,function(i){Gl(e);return Wl(YE(4).onToggleAll(i))}),Vp(2,ro,2,7,`ng-template`,null,9,WI),eu(),wD()}if(t&2){let e=YE(4);Gp(`pt`,e.getHeaderCheckboxPTOptions(`pcHeaderCheckbox`))(`ngModel`,e.allSelected())(`ariaLabel`,e.toggleAllAriaLabel)(`binary`,!0)(`variant`,e.$variant())(`disabled`,e.$disabled())(`unstyled`,e.unstyled()),bD()}}function po(t,a){if(t&1&&(od(),Wp(0,`svg`,41)),t&2)Gp(`pBind`,YE(5).ptm(`filterIcon`))}function uo(t,a){}function mo(t,a){t&1&&Vp(0,uo,0,0,`ng-template`)}function ho(t,a){if(t&1&&(ki$1(0,`span`,42),Vp(1,mo,1,0,null,26),eu()),t&2){let e=YE(5);Gp(`pBind`,e.ptm(`filterIcon`)),Ov(),Gp(`ngTemplateOutlet`,e.filterIconTemplate||e._filterIconTemplate)}}function _o(t,a){if(t&1){let e=qE();ki$1(0,`p-iconfield`,39)(1,`input`,40,10),Xp(`input`,function(i){Gl(e);return Wl(YE(4).onFilterInputChange(i))})(`keydown`,function(i){Gl(e);return Wl(YE(4).onFilterKeyDown(i))})(`click`,function(i){Gl(e);return Wl(YE(4).onInputClick(i))})(`blur`,function(i){Gl(e);return Wl(YE(4).onFilterBlur(i))}),eu(),ki$1(3,`p-inputicon`,39),LE(4,po,1,1,`:svg:svg`,41),LE(5,ho,2,2,`span`,42),eu()()}if(t&2){let e=YE(4);vI(e.cx(`pcFilterContainer`)),Gp(`pt`,e.ptm(`pcFilterContainer`))(`unstyled`,e.unstyled()),Ov(),vI(e.cx(`pcFilter`)),Gp(`pt`,e.ptm(`pcFilter`))(`variant`,e.$variant())(`value`,e._filterValue()||``)(`unstyled`,e.unstyled()),zp(`autocomplete`,e.autocomplete())(`aria-owns`,e.id()+`_list`)(`aria-activedescendant`,e.focusedOptionId)(`disabled`,e.$disabled()?``:void 0)(`placeholder`,e.filterPlaceHolder())(`aria-label`,e.ariaFilterLabel()),Ov(2),Gp(`pt`,e.ptm(`pcFilterIconContainer`))(`unstyled`,e.unstyled()),Ov(),PE(!e.filterIconTemplate&&!e._filterIconTemplate?4:-1),Ov(),PE(e.filterIconTemplate||e._filterIconTemplate?5:-1)}}function fo(t,a){if(t&1&&(LE(0,co,4,7,`p-checkbox`,34),LE(1,_o,6,20,`p-iconfield`,35)),t&2){let e=YE(3);PE(e.showToggleAll()&&!e.selectionLimit()?0:-1),Ov(),PE(e.filter()?1:-1)}}function go(t,a){if(t&1&&(ki$1(0,`div`,17),XE(1),LE(2,oo,1,4,`ng-container`)(3,fo,2,2),eu()),t&2){let e=YE(2);vI(e.cx(`header`)),Gp(`pBind`,e.ptm(`header`)),Ov(2),PE(e.filterTemplate||e._filterTemplate?2:3)}}function bo(t,a){t&1&&Yp(0)}function vo(t,a){if(t&1&&Vp(0,bo,1,0,`ng-container`,23),t&2){let e=a.$implicit,n=a.options;YE(2);Gp(`ngTemplateOutlet`,rI(9))(`ngTemplateOutletContext`,HI(2,ai,e,n))}}function Co(t,a){t&1&&Yp(0)}function xo(t,a){if(t&1&&Vp(0,Co,1,0,`ng-container`,23),t&2){let e=a.options,n=YE(4);Gp(`ngTemplateOutlet`,n.loaderTemplate||n._loaderTemplate)(`ngTemplateOutletContext`,VI(2,li,e))}}function yo(t,a){t&1&&Vp(0,xo,1,4,`ng-template`,null,12,WI)}function ko(t,a){if(t&1){let e=qE();ki$1(0,`p-scroller`,43,11),Xp(`onLazyLoad`,function(i){Gl(e);return Wl(YE(2).onLazyLoad.emit(i))}),Vp(2,vo,1,5,`ng-template`,null,2,WI),LE(4,yo,2,0),eu()}if(t&2){let e=YE(2);mI(VI(9,Ke,e.scrollHeight())),Gp(`items`,e.visibleOptions())(`itemSize`,e.virtualScrollItemSize())(`autoSize`,!0)(`tabindex`,-1)(`lazy`,e.lazy())(`options`,e.virtualScrollOptions()),Ov(4),PE(e.loaderTemplate||e._loaderTemplate?4:-1)}}function Io(t,a){t&1&&Yp(0)}function To(t,a){if(t&1&&Vp(0,Io,1,0,`ng-container`,23),t&2){YE();let e=rI(9),n=YE();Gp(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,HI(3,ai,n.visibleOptions(),BI(2,kn)))}}function So(t,a){if(t&1&&(ki$1(0,`span`),MI(1),eu()),t&2){let e=YE(2).$implicit,n=YE(3);Ov(),Dh(n.getOptionGroupLabel(e.optionGroup))}}function Mo(t,a){if(t&1&&Yp(0,48),t&2){let e=YE(2).$implicit;Gp(`ngTemplateOutlet`,YE(3).groupTemplate)(`ngTemplateOutletContext`,VI(2,oi,e.optionGroup))}}function Oo(t,a){if(t&1&&(ki$1(0,`li`,47),LE(1,So,2,1,`span`),LE(2,Mo,1,4,`ng-container`,48),eu()),t&2){let e=YE(),n=e.$implicit,i=e.$index,o=YE().options,l=YE(2);vI(l.cx(`optionGroup`)),Gp(`pBind`,l.ptm(`optionGroup`))(`ngStyle`,VI(7,Ke,o.itemSize+`px`)),zp(`id`,l.id()+`_`+l.getOptionIndex(i,o)),Ov(),PE(!l.groupTemplate&&n.optionGroup?1:-1),Ov(),PE(n.optionGroup&&l.groupTemplate?2:-1)}}function wo(t,a){if(t&1){let e=qE();ki$1(0,`li`,49),Xp(`onClick`,function(i){Gl(e);let o=YE().$index,l=YE().options,k=YE(2);return Wl(k.onOptionSelect(i,!1,k.getOptionIndex(o,l)))})(`onMouseEnter`,function(i){Gl(e);let o=YE().$index,l=YE().options,k=YE(2);return Wl(k.onOptionMouseEnter(i,k.getOptionIndex(o,l)))}),eu()}if(t&2){let e=YE(),n=e.$implicit,i=e.$index,o=YE().options,l=YE(2);Gp(`pBind`,l.getPTOptions(n,l.getItemOptions,i,`option`))(`id`,l.id()+`_`+l.getOptionIndex(i,o))(`option`,n)(`selected`,l.isSelected(n))(`label`,l.getOptionLabel(n))(`disabled`,l.isOptionDisabled(n))(`template`,l.itemTemplate()||l._itemTemplate)(`itemCheckboxIconTemplate`,l.itemCheckboxIconTemplate()||l._itemCheckboxIconTemplate)(`itemSize`,o.itemSize)(`focused`,l.focusedOptionIndex()===l.getOptionIndex(i,o))(`ariaPosInset`,l.getAriaPosInset(l.getOptionIndex(i,o)))(`ariaSetSize`,l.ariaSetSize)(`variant`,l.$variant())(`highlightOnSelect`,l.highlightOnSelect())(`pt`,l.pt)(`unstyled`,l.unstyled())}}function Vo(t,a){if(t&1&&(LE(0,Oo,3,9,`li`,45),LE(1,wo,1,16,`li`,46)),t&2){let e=a.$implicit,n=YE(3);PE(n.isOptionGroup(e)?0:-1),Ov(),PE(n.isOptionGroup(e)?-1:1)}}function Do(t,a){if(t&1&&MI(0),t&2)iu(` `,YE(4).emptyFilterMessageLabel,` `)}function Fo(t,a){t&1&&Yp(0)}function Eo(t,a){if(t&1&&Vp(0,Fo,1,0,`ng-container`,26),t&2){let e=YE(4);Gp(`ngTemplateOutlet`,e.emptyFilterTemplate()||e._emptyFilterTemplate||e.emptyTemplate()||e._emptyFilterTemplate)}}function No(t,a){if(t&1&&(ki$1(0,`li`,47),LE(1,Do,1,1)(2,Eo,1,1,`ng-container`),eu()),t&2){let e=YE().options,n=YE(2);vI(n.cx(`emptyMessage`)),Gp(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,VI(5,Ke,e.itemSize+`px`)),Ov(),PE(!n.emptyFilterTemplate()&&!n._emptyFilterTemplate&&!n.emptyTemplate()&&!n._emptyTemplate?1:2)}}function Lo(t,a){if(t&1&&MI(0),t&2)iu(` `,YE(4).emptyMessageLabel,` `)}function Bo(t,a){t&1&&Yp(0)}function Ao(t,a){if(t&1&&Vp(0,Bo,1,0,`ng-container`,26),t&2){let e=YE(4);Gp(`ngTemplateOutlet`,e.emptyTemplate()||e._emptyTemplate)}}function Po(t,a){if(t&1&&(ki$1(0,`li`,47),LE(1,Lo,1,1)(2,Ao,1,1,`ng-container`),eu()),t&2){let e=YE().options,n=YE(2);vI(n.cx(`emptyMessage`)),Gp(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,VI(5,Ke,e.itemSize+`px`)),Ov(),PE(!n.emptyTemplate()&&!n._emptyTemplate?1:2)}}function zo(t,a){if(t&1&&(ki$1(0,`ul`,44,13),VE(2,Vo,2,2,null,null,BE),LE(4,No,3,7,`li`,45),LE(5,Po,3,7,`li`,45),eu()),t&2){let e=a.$implicit,n=a.options,i=YE(2);mI(n.contentStyle),vI(i.cn(i.cx(`list`),n.contentStyleClass)),Gp(`pBind`,i.ptm(`list`)),zp(`aria-label`,i.listLabel),Ov(2),HE(e),Ov(2),PE(i.hasFilter()&&i.isEmpty()?4:-1),Ov(),PE(!i.hasFilter()&&i.isEmpty()?5:-1)}}function Ho(t,a){t&1&&Yp(0)}function $o(t,a){if(t&1&&(ki$1(0,`div`),XE(1,1),Vp(2,Ho,1,0,`ng-container`,26),eu()),t&2){let e=YE(2);Ov(2),Gp(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}function Ro(t,a){if(t&1){let e=qE();ki$1(0,`div`,31)(1,`span`,32,5),Xp(`focus`,function(i){Gl(e);return Wl(YE().onFirstHiddenFocus(i))}),eu(),Vp(3,io,1,0,`ng-container`,26),LE(4,go,4,4,`div`,19),ki$1(5,`div`,17),LE(6,ko,5,11,`p-scroller`,33),LE(7,To,1,6,`ng-container`),Vp(8,zo,6,8,`ng-template`,null,6,WI),eu(),LE(10,$o,3,1,`div`),ki$1(11,`span`,32,7),Xp(`focus`,function(i){Gl(e);return Wl(YE().onLastHiddenFocus(i))}),eu()()}if(t&2){let e=YE();vI(e.cn(e.cx(`overlay`),e.panelStyleClass())),Gp(`pBind`,e.ptm(`overlay`))(`ngStyle`,e.panelStyle()),zp(`data-p`,e.overlayDataP)(`id`,e.id()+`_list`),Ov(),Gp(`pBind`,e.ptm(`firstHiddenFocusableEl`)),zp(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),Ov(2),Gp(`ngTemplateOutlet`,e.headerTemplate()||e._headerTemplate),Ov(),PE(e.showHeader()?4:-1),Ov(),vI(e.cx(`listContainer`)),uh(`max-height`,e.virtualScroll()?`auto`:e.scrollHeight()||`auto`),Gp(`pBind`,e.ptm(`listContainer`)),Ov(),PE(e.virtualScroll()?6:-1),Ov(),PE(e.virtualScroll()?-1:7),Ov(3),PE(e.footerFacet()||e.footerTemplate||e._footerTemplate?10:-1),Ov(),Gp(`pBind`,e.ptm(`lastHiddenFocusableEl`)),zp(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}var Ko=`
    ${ii}

    /* For ngx-prime */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`;var Go={root:({instance:t})=>({position:t.$appendTo()===`self`?`relative`:void 0})};var jo={root:({instance:t})=>[`p-multiselect p-component p-inputwrapper`,{"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":t.display===`chip`,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-multiselect-open":t.overlayVisible,"p-multiselect-fluid":t.hasFluid,"p-multiselect-sm p-inputfield-sm":t.size()===`small`,"p-multiselect-lg p-inputfield-lg":t.size()===`large`}],labelContainer:`p-multiselect-label-container`,label:({instance:t})=>({"p-multiselect-label":!0,"p-placeholder":t.label()===t.placeholder(),"p-multiselect-label-empty":!t.placeholder()&&!t.defaultLabel&&(!t.modelValue()||t.modelValue().length===0)}),chipItem:`p-multiselect-chip-item`,pcChip:`p-multiselect-chip`,chipIcon:`p-multiselect-chip-icon`,dropdown:`p-multiselect-dropdown`,loadingIcon:`p-multiselect-loading-icon`,dropdownIcon:`p-multiselect-dropdown-icon`,overlay:`p-multiselect-overlay p-component-overlay p-component`,header:`p-multiselect-header`,pcFilterContainer:`p-multiselect-filter-container`,pcFilter:`p-multiselect-filter`,listContainer:`p-multiselect-list-container`,list:`p-multiselect-list`,optionGroup:`p-multiselect-option-group`,option:({instance:t})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":t.selected&&t.highlightOnSelect,"p-disabled":t.disabled,"p-focus":t.focused}),emptyMessage:`p-multiselect-empty-message`,clearIcon:`p-multiselect-clear-icon`};var Re=(()=>{class t extends z{name=`multiselect`;style=Ko;classes=jo;inlineStyles=Go;static ɵfac=(()=>{let e;return function(i){return(e||(e=gf(t)))(i||t)}})();static ɵprov=k({token:t,factory:t.ɵfac})}return t})();var ni=new C(`MULTISELECT_INSTANCE`);var qo=new C(`MULTISELECT_ITEM_INSTANCE`);var Uo={provide:pe,useExisting:Vo$1(()=>Ge),multi:!0};var Qo=(()=>{class t extends _s{$pcMultiSelectItem=g(qo,{optional:!0,skipSelf:!0})??void 0;hostName=`MultiSelect`;getPTOptions(e){return this.ptm(e,{context:{selected:this.selected(),focused:this.focused(),disabled:this.disabled()}})}option=hu();selected=hu(void 0,{transform:Sw});label=hu();disabled=hu(void 0,{transform:Sw});itemSize=hu(void 0,{transform:Mw});focused=hu(void 0,{transform:Sw});ariaPosInset=hu();ariaSetSize=hu();variant=hu(void 0);template=hu();checkIconTemplate=hu();itemCheckboxIconTemplate=hu();highlightOnSelect=hu(void 0,{transform:Sw});onClick=EL();onMouseEnter=EL();_componentStyle=g(Re);onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option(),selected:this.selected()}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option(),selected:this.selected()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=gf(t)))(i||t)}})();static ɵcmp=fE({type:t,selectors:[[`li`,`pMultiSelectItem`,``]],hostAttrs:[`role`,`option`],hostVars:13,hostBindings:function(n,i){n&1&&Xp(`click`,function(l){return i.onOptionClick(l)})(`mouseenter`,function(l){return i.onOptionMouseEnter(l)}),n&2&&(zp(`aria-label`,i.label())(`aria-setsize`,i.ariaSetSize())(`aria-posinset`,i.ariaPosInset())(`aria-selected`,i.selected())(`data-p-selected`,i.selected())(`data-p-focused`,i.focused())(`data-p-highlight`,i.selected())(`data-p-disabled`,i.disabled())(`aria-checked`,i.selected()),vI(i.cx(`option`)),uh(`height`,i.itemSize(),`px`))},inputs:{option:[1,`option`],selected:[1,`selected`],label:[1,`label`],disabled:[1,`disabled`],itemSize:[1,`itemSize`],focused:[1,`focused`],ariaPosInset:[1,`ariaPosInset`],ariaSetSize:[1,`ariaSetSize`],variant:[1,`variant`],template:[1,`template`],checkIconTemplate:[1,`checkIconTemplate`],itemCheckboxIconTemplate:[1,`itemCheckboxIconTemplate`],highlightOnSelect:[1,`highlightOnSelect`]},outputs:{onClick:`onClick`,onMouseEnter:`onMouseEnter`},features:[jI([Re]),jp],decls:4,vars:13,consts:[[`icon`,``],[3,`ngModel`,`binary`,`tabindex`,`variant`,`ariaLabel`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,i){n&1&&(ki$1(0,`p-checkbox`,1),LE(1,Ri,2,0),eu(),wD(),LE(2,Ki,2,1,`span`),Vp(3,Gi,1,0,`ng-container`,2)),n&2&&(Gp(`ngModel`,i.selected())(`binary`,!0)(`tabindex`,-1)(`variant`,i.variant())(`ariaLabel`,i.label())(`pt`,i.getPTOptions(`pcOptionCheckbox`))(`unstyled`,i.unstyled()),bD(),Ov(),PE(i.itemCheckboxIconTemplate()?1:-1),Ov(),PE(i.template()?-1:2),Ov(),Gp(`ngTemplateOutlet`,i.template())(`ngTemplateOutletContext`,VI(11,oi,i.option())))},dependencies:[Bw,jw,$e,Mn$2,Cn$1,Zt$1,Mn$1],encapsulation:2})}return t})();var Ge=(()=>{class t extends xe{zone=g(ge);filterService=g(Nn$1);overlayService=g(wn$1);componentName=`MultiSelect`;id=hu();_generatedId;get resolvedId(){return this.id()||(this._generatedId??=At(`pn_id_`))}ariaLabel=hu();styleClass=hu();panelStyle=hu();panelStyleClass=hu();inputId=hu();readonly=hu(void 0,{transform:Sw});group=hu(void 0,{transform:Sw});filter=hu(!0,{transform:Sw});filterPlaceHolder=hu();filterLocale=hu();overlayVisible=IL(!1);tabindex=hu(0,{transform:Mw});dataKey=hu();ariaLabelledBy=hu();displaySelectedLabel=hu(!0);maxSelectedLabels=hu(3);selectionLimit=hu(void 0,{transform:Mw});selectedItemsLabel=hu();showToggleAll=hu(!0,{transform:Sw});emptyFilterMessage=hu(``);emptyMessage=hu(``);resetFilterOnHide=hu(!1,{transform:Sw});dropdownIcon=hu();chipIcon=hu();optionLabel=hu();optionValue=hu();optionDisabled=hu();optionGroupLabel=hu(`label`);optionGroupChildren=hu(`items`);showHeader=hu(!0,{transform:Sw});filterBy=hu();scrollHeight=hu(`200px`);lazy=hu(!1,{transform:Sw});virtualScroll=hu(void 0,{transform:Sw});loading=hu(!1,{transform:Sw});virtualScrollItemSize=hu(void 0,{transform:Mw});loadingIcon=hu();virtualScrollOptions=hu();overlayOptions=hu();ariaFilterLabel=hu();filterMatchMode=hu(`contains`);tooltip=hu(``);tooltipPosition=hu(`right`);tooltipPositionStyle=hu(`absolute`);tooltipStyleClass=hu();autofocusFilter=hu(!1,{transform:Sw});display=hu(`comma`);autocomplete=hu(`off`);showClear=hu(!1,{transform:Sw});autofocus=hu(void 0,{transform:Sw});placeholder=hu();options=hu();filterValue=hu();selectAll=hu();focusOnHover=hu(!0,{transform:Sw});filterFields=hu();selectOnFocus=hu(!1,{transform:Sw});autoOptionFocus=hu(!1,{transform:Sw});highlightOnSelect=hu(!0,{transform:Sw});size=hu();variant=hu();fluid=hu(void 0,{transform:Sw});appendTo=hu(void 0);motionOptions=hu(void 0);onChange=EL();onFilter=EL();onFocus=EL();onBlur=EL();onClick=EL();onClear=EL();onPanelShow=EL();onPanelHide=EL();onLazyLoad=EL();onRemove=EL();onSelectAllChange=EL();overlayViewChild=wL(`overlay`);filterInputChild=wL(`filterInput`);focusInputViewChild=wL(`focusInput`);itemsViewChild=wL(`items`);scroller=wL(`scroller`);lastHiddenFocusableElementOnOverlay=wL(`lastHiddenFocusableEl`);firstHiddenFocusableElementOnOverlay=wL(`firstHiddenFocusableEl`);headerCheckboxViewChild=wL(`headerCheckbox`);footerFacet=CL(Pn$1);headerFacet=CL(In$1);_componentStyle=g(Re);bindDirectiveInstance=g(Ps,{self:!0});searchValue;searchTimeout;_selectAll=null;_placeholder=Ie(void 0);_disableTooltip=!1;value;_filteredOptions;focus;filtered;itemTemplate=CL(`item`,{descendants:!1});groupTemplate;loaderTemplate;headerTemplate=CL(`header`,{descendants:!1});filterTemplate;footerTemplate;emptyFilterTemplate=CL(`emptyfilter`,{descendants:!1});emptyTemplate=CL(`empty`,{descendants:!1});selectedItemsTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate=CL(`itemcheckboxicon`,{descendants:!1});headerCheckboxIconTemplate=CL(`headercheckboxicon`,{descendants:!1});templates=bL(Dn$1);_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;$variant=KI(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());$appendTo=KI(()=>this.appendTo()||this.config.overlayAppendTo());$pcMultiSelect=g(ni,{optional:!0,skipSelf:!0})??void 0;pcFluid=g(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selectedItems`:case`selecteditems`:this._selectedItemsTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`filter`:this._filterTemplate=e.template;break;case`emptyfilter`:this._emptyFilterTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`headercheckboxicon`:this._headerCheckboxIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`removetokenicon`:this._removeTokenIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`chipicon`:this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=Ie(null);_filterValue=Ie(null);_options=Ie([]);startRangeIndex=Ie(-1);focusedOptionIndex=Ie(-1);selectedOptions;clickInProgress=!1;get emptyMessageLabel(){return this.emptyMessage()||this.config.getTranslation($n$1.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage()||this.config.getTranslation($n$1.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==``&&y(this.modelValue())&&this.showClear()&&!this.$disabled()&&!this.readonly()&&this.$filled()}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?`selectAll`:`unselectAll`]:void 0}get listLabel(){return this.config.getTranslation($n$1.ARIA).listLabel}getAllVisibleAndNonVisibleOptions(){return this.group()?this.flatOptions(this._options()):this._options()||[]}visibleOptions=KI(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=je(e)&&Ce.isObject(e[0]);if(this._filterValue()){let i;if(n?i=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode(),this.filterLocale()):i=e.filter(o=>o.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group()){let o=this._options()||[],l=[];return o.forEach(k=>{let X=this.getOptionGroupChildren(k).filter(ri=>i.includes(ri)),Ye=this.optionGroupChildren();X.length>0&&l.push(s(r({},k),{[typeof Ye==`string`?Ye:`items`]:[...X]}))}),this.flatOptions(l)}return i}return e});label=KI(()=>{let e,n=this.modelValue();if(n&&n?.length&&this.displaySelectedLabel()){if(y(this.maxSelectedLabels())&&n?.length>(this.maxSelectedLabels()||0))return this.getSelectedItemsLabel();e=``;for(let i=0;i<n.length;i++)i!==0&&(e+=`, `),e+=this.getLabelByValue(n[i])}else e=this.placeholder()||``;return e});chipSelectedItems=KI(()=>y(this.maxSelectedLabels())&&this.modelValue()&&this.modelValue()?.length>(this.maxSelectedLabels()||0)?this.modelValue()?.slice(0,this.maxSelectedLabels()):this.modelValue());constructor(){super(),ui$1(()=>{let e=this.modelValue(),n=this.getAllVisibleAndNonVisibleOptions();n&&y(n)&&(this.optionValue()&&this.optionLabel()&&e?this.selectedOptions=n.filter(i=>e.includes(i[this.optionLabel()])||e.includes(i[this.optionValue()])):this.selectedOptions=e,this.cd.markForCheck())}),ui$1(()=>{this._placeholder.set(this.placeholder())}),ui$1(()=>{let e=this.options();Ti$1(this._options(),e)||this._options.set(e||[])}),ui$1(()=>{this._filterValue.set(this.filterValue())})}onInit(){this.autoUpdateModel(),this.filterBy()&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){let e=this.selectionLimit();return e&&this.modelValue()&&this.modelValue().length===e}onAfterViewInit(){this.overlayVisible()&&this.show()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild()?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let l=this.getOptionGroupChildren(i);return l&&l.forEach(k=>n.push(k)),n},[])}autoUpdateModel(){if(this.selectOnFocus()&&this.autoOptionFocus()&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeValue(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,n=!1,i=-1){let{originalEvent:o,option:l}=e;if(this.$disabled()||this.isOptionDisabled(l))return;let k=this.isSelected(l),C=[];k?C=this.modelValue().filter(X=>!ie(X,this.getOptionValue(l),this.equalityKey()||``)):C=[...this.modelValue()||[],this.getOptionValue(l)],this.updateModel(C,o),i!==-1&&this.focusedOptionIndex.set(i),n&&qi$2(this.focusInputViewChild()?.nativeElement),this.onChange.emit({originalEvent:e,value:C,itemValue:l})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,n=-1,i=-1){if(n===-1&&(n=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(n)),n!==-1&&i!==-1){let o=Math.min(n,i),l=Math.max(n,i),k=this.visibleOptions().slice(o,l+1).filter(C=>this.isValidOption(C)).map(C=>this.getOptionValue(C));this.updateModel(k,e)}}searchFields(){return(this.filterBy()||this.optionLabel()||`label`).split(`,`)}findNearestSelectedOptionIndex(e,n=!1){let i=-1;return this.hasSelectedOption()&&(n?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e}findPrevSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e>0?fn$1(this.visibleOptions().slice(0,e),i=>this.isValidSelectedOption(i)):-1;return n>-1?n:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return n>-1?n+e+1:-1}equalityKey(){return this.optionValue()?null:this.dataKey()}hasSelectedOption(){return y(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return e&&(this.group()||this.optionGroupLabel())&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){if(this.maxSelectionLimitReached()&&!this.isSelected(e))return!0;let n=this.optionDisabled();return n?Re$1(e,n):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let n=this.getOptionValue(e);return(this.modelValue()||[]).some(i=>ie(i,n,this.equalityKey()||``))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale()).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel()?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let i=(this.group()?this.flatOptions(this._options()):this._options()||[]).find(o=>!this.isOptionGroup(o)&&ie(this.getOptionValue(o),e,this.equalityKey()||``));return i?this.getOptionLabel(i):null}getSelectedItemsLabel(){let e=/{(.*?)}/,i=this.selectedItemsLabel()||this.config.getTranslation($n$1.SELECTION_MESSAGE);return e.test(i)?i.replace(i.match(e)[0],this.modelValue().length+``):i}getOptionLabel(e){let n=this.optionLabel();return n?Re$1(e,n):e&&e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?Re$1(e,n):!this.optionLabel()&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){let n=this.optionGroupLabel();return n?Re$1(e,n):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){let n=this.optionGroupChildren();return e?n?Re$1(e,n):e.items:[]}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`Space`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey();break;default:if(e.code===`KeyA`&&n){let i=this.visibleOptions().filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(i,e),e.preventDefault();break}!n&&mn$1(e.key)&&(!this.overlayVisible()&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible()&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,n=!1){if(e.altKey&&!n)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible()&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex()),this.changeFocusedOptionIndex(e,i),!this.overlayVisible()&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,l,this.startRangeIndex()),this.changeFocusedOptionIndex(e,l),!this.overlayVisible()&&this.show()}e.preventDefault()}onEndKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findLastFocusedOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex(),l),this.changeFocusedOptionIndex(e,l),!this.overlayVisible()&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible()?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible()&&(this.hide(!0),e.stopPropagation(),e.preventDefault())}onTabKey(e,n=!1){if(!n){let i=this.overlayVisible();if(i&&this.hasFocusableElements())qi$2(e.shiftKey?this.lastHiddenFocusableElementOnOverlay()?.nativeElement:this.firstHiddenFocusableElementOnOverlay()?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1){let o=this.visibleOptions()[this.focusedOptionIndex()];!this.isSelected(o)&&this.onOptionSelect({originalEvent:e,option:o})}i&&this.hide(this.filter())}}}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){let n=this.focusInputViewChild();if(this.$disabled()||this.loading()||this.readonly()||e.target?.isSameNode?.(n?.nativeElement))return;let i=this.overlayViewChild();if(!i||!i.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible()?this.hide(!0):this.show(!0)}n?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}onFirstHiddenFocus(e){let n=this.focusInputViewChild();qi$2(e.relatedTarget===n?.nativeElement?zi$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):n?.nativeElement)}onInputFocus(e){this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible()&&this.autoOptionFocus()?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible()&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller()?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild()?.alignOverlay()})}onLastHiddenFocus(e){let n=this.focusInputViewChild();qi$2(e.relatedTarget===n?.nativeElement?Qi$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):n?.nativeElement)}onOptionMouseEnter(e,n){this.focusOnHover()&&this.changeFocusedOptionIndex(e,n)}onFilterBlur(){this.focusedOptionIndex.set(-1)}onToggleAll(e){if(!(this.$disabled()||this.readonly())){if(this.selectAll()!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let n=this.getAllVisibleAndNonVisibleOptions().filter(C=>{let X=this.optionDisabled();return this.isSelected(C)&&(X?Re$1(C,X):C&&C.disabled!==void 0?C.disabled:!1)}),i=this.allSelected()?this.visibleOptions().filter(C=>!this.isValidOption(C)&&this.isSelected(C)):this.visibleOptions().filter(C=>this.isSelected(C)||this.isValidOption(C)),l=[...this.filter()&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(C=>this.isSelected(C)&&this.isValidOption(C)):[],...n,...i].map(C=>this.getOptionValue(C)),k=[...new Set(l)];this.updateModel(k,e),(!k.length||k.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!k.length})}this.partialSelected()&&(this.selectedOptions=[],this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),xt.focus(this.headerCheckboxViewChild()?.inputViewChild()?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll()}scrollInView(e=-1){let n=e!==-1?`${this.resolvedId}_${e}`:this.focusedOptionId,i=this.itemsViewChild();if(i&&i.nativeElement){let o=Ki$1(i.nativeElement,`li[id="${n}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll()&&this.scroller()?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.resolvedId}_${this.focusedOptionIndex()}`:null}allSelected(){return this.selectAll!==null?this.selectAll:y(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<(this._options()?.length||0)}show(e){this.overlayVisible.set(!0);let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus()?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&qi$2(this.focusInputViewChild()?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible.set(!1),this.focusedOptionIndex.set(-1),this.filter()&&this.resetFilterOnHide()&&this.resetFilter(),this.overlayOptions()?.mode===`modal`&&qe(),e&&qi$2(this.focusInputViewChild()?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Ki$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,this.virtualScroll()?`[data-pc-name="virtualscroller"]`:`[data-pc-section="listcontainer"]`),this.virtualScroll()&&this.scroller()?.setContentEl(this.itemsViewChild()?.nativeElement),this._options()&&this._options().length)if(this.virtualScroll()){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller()?.scrollToIndex(i)}else{let i=Ki$1(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);i&&i.scrollIntoView({block:`nearest`,inline:`nearest`})}let n=this.filterInputChild();n&&n.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter()&&n.nativeElement.focus()),this.onPanelShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e)}resetFilter(){let e=this.filterInputChild();e&&e.nativeElement&&(e.nativeElement.value=``),this._filterValue.set(null),this._filteredOptions=null}onOverlayHide(){this.focusedOptionIndex.set(-1),this.filter()&&this.resetFilterOnHide()&&this.resetFilter()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=[],this.updateModel(null,e),this.selectedOptions=[],this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,n){let i=this.modelValue().filter(o=>!ie(o,e,this.equalityKey()||``));this.updateModel(i,n),this.onChange.emit({originalEvent:n,value:i,itemValue:e}),this.onRemove.emit({newValue:i,removed:e}),n&&n.stopPropagation()}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?fn$1(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?fn$1(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return fn$1(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,n){this.searchValue=(this.searchValue||``)+n;let i=-1,o=!1;return this.focusedOptionIndex()!==-1?(i=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)),i=i===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)):i+this.focusedOptionIndex()):i=this.visibleOptions().findIndex(l=>this.isOptionMatched(l)),i!==-1&&(o=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),o}hasFocusableElements(){return ft(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label()===this.placeholder(),clearable:this.showClear(),disabled:this.disabled,[this.size()]:this.size(),"has-chip":this.display()===`chip`&&this.value&&this.value.length&&(this.maxSelectedLabels()?this.value.length<=this.maxSelectedLabels():!0),empty:!this.placeholder()&&!this.$filled})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({[`overlay-`+this.appendTo]:`overlay-`+this.appendTo})}writeControlValue(e,n){this.value=e,n(e),this.cd.markForCheck()}getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected()}})}getPTOptions(e,n,i,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}static ɵfac=function(n){return new(n||t)};static ɵcmp=fE({type:t,selectors:[[`p-multiSelect`],[`p-multiselect`],[`p-multi-select`]],contentQueries:function(n,i,o){if(n&1&&(rh(o,i.footerFacet,Pn$1,5)(o,i.headerFacet,In$1,5)(o,i.itemTemplate,ji,4)(o,i.headerTemplate,qi,4)(o,i.emptyFilterTemplate,Ui,4)(o,i.emptyTemplate,Qi,4)(o,i.itemCheckboxIconTemplate,Wi,4)(o,i.headerCheckboxIconTemplate,Xi,4)(o,i.templates,Dn$1,4),th(o,Yi,4)(o,Zi,4)(o,Ji,4)(o,en,4)(o,tn,4)(o,nn,4)(o,on,4)(o,ln,4)(o,an,4)(o,sn,4)(o,rn,4)),n&2){nI(9);let l;eI(l=tI())&&(i.groupTemplate=l.first),eI(l=tI())&&(i.loaderTemplate=l.first),eI(l=tI())&&(i.filterTemplate=l.first),eI(l=tI())&&(i.footerTemplate=l.first),eI(l=tI())&&(i.selectedItemsTemplate=l.first),eI(l=tI())&&(i.loadingIconTemplate=l.first),eI(l=tI())&&(i.filterIconTemplate=l.first),eI(l=tI())&&(i.removeTokenIconTemplate=l.first),eI(l=tI())&&(i.chipIconTemplate=l.first),eI(l=tI())&&(i.clearIconTemplate=l.first),eI(l=tI())&&(i.dropdownIconTemplate=l.first)}},viewQuery:function(n,i){n&1&&oh(i.overlayViewChild,cn,5)(i.filterInputChild,dn,5)(i.focusInputViewChild,pn,5)(i.itemsViewChild,un,5)(i.scroller,mn,5)(i.lastHiddenFocusableElementOnOverlay,hn,5)(i.firstHiddenFocusableElementOnOverlay,_n,5)(i.headerCheckboxViewChild,fn,5),n&2&&nI(8)},hostVars:6,hostBindings:function(n,i){n&1&&Xp(`click`,function(l){return i.onContainerClick(l)}),n&2&&(zp(`id`,i.resolvedId)(`data-p`,i.containerDataP),mI(i.sx(`root`)),vI(i.cn(i.cx(`root`),i.styleClass())))},inputs:{id:[1,`id`],ariaLabel:[1,`ariaLabel`],styleClass:[1,`styleClass`],panelStyle:[1,`panelStyle`],panelStyleClass:[1,`panelStyleClass`],inputId:[1,`inputId`],readonly:[1,`readonly`],group:[1,`group`],filter:[1,`filter`],filterPlaceHolder:[1,`filterPlaceHolder`],filterLocale:[1,`filterLocale`],overlayVisible:[1,`overlayVisible`],tabindex:[1,`tabindex`],dataKey:[1,`dataKey`],ariaLabelledBy:[1,`ariaLabelledBy`],displaySelectedLabel:[1,`displaySelectedLabel`],maxSelectedLabels:[1,`maxSelectedLabels`],selectionLimit:[1,`selectionLimit`],selectedItemsLabel:[1,`selectedItemsLabel`],showToggleAll:[1,`showToggleAll`],emptyFilterMessage:[1,`emptyFilterMessage`],emptyMessage:[1,`emptyMessage`],resetFilterOnHide:[1,`resetFilterOnHide`],dropdownIcon:[1,`dropdownIcon`],chipIcon:[1,`chipIcon`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],optionGroupLabel:[1,`optionGroupLabel`],optionGroupChildren:[1,`optionGroupChildren`],showHeader:[1,`showHeader`],filterBy:[1,`filterBy`],scrollHeight:[1,`scrollHeight`],lazy:[1,`lazy`],virtualScroll:[1,`virtualScroll`],loading:[1,`loading`],virtualScrollItemSize:[1,`virtualScrollItemSize`],loadingIcon:[1,`loadingIcon`],virtualScrollOptions:[1,`virtualScrollOptions`],overlayOptions:[1,`overlayOptions`],ariaFilterLabel:[1,`ariaFilterLabel`],filterMatchMode:[1,`filterMatchMode`],tooltip:[1,`tooltip`],tooltipPosition:[1,`tooltipPosition`],tooltipPositionStyle:[1,`tooltipPositionStyle`],tooltipStyleClass:[1,`tooltipStyleClass`],autofocusFilter:[1,`autofocusFilter`],display:[1,`display`],autocomplete:[1,`autocomplete`],showClear:[1,`showClear`],autofocus:[1,`autofocus`],placeholder:[1,`placeholder`],options:[1,`options`],filterValue:[1,`filterValue`],selectAll:[1,`selectAll`],focusOnHover:[1,`focusOnHover`],filterFields:[1,`filterFields`],selectOnFocus:[1,`selectOnFocus`],autoOptionFocus:[1,`autoOptionFocus`],highlightOnSelect:[1,`highlightOnSelect`],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{overlayVisible:`overlayVisibleChange`,onChange:`onChange`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onClick:`onClick`,onClear:`onClear`,onPanelShow:`onPanelShow`,onPanelHide:`onPanelHide`,onLazyLoad:`onLazyLoad`,onRemove:`onRemove`,onSelectAllChange:`onSelectAllChange`},features:[jI([Uo,Re,{provide:ni,useExisting:t},{provide:xi$1,useExisting:t}]),DE([Ps]),jp],ngContentSelectors:bn,decls:15,vars:50,consts:[[`focusInput`,``],[`overlay`,``],[`content`,``],[`token`,``],[`removeicon`,``],[`firstHiddenFocusableEl`,``],[`buildInItems`,``],[`lastHiddenFocusableEl`,``],[`headerCheckbox`,``],[`icon`,``],[`filterInput`,``],[`scroller`,``],[`loader`,``],[`items`,``],[1,`p-hidden-accessible`,3,`pBind`],[`role`,`combobox`,3,`focus`,`blur`,`keydown`,`pTooltip`,`pTooltipUnstyled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`,`pAutoFocus`,`pBind`],[3,`mouseleave`,`pBind`,`pTooltip`,`pTooltipUnstyled`,`tooltipDisabled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`],[3,`pBind`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[3,`pBind`,`class`],[3,`onRemove`,`pt`,`unstyled`,`label`,`removable`,`removeIcon`],[3,`class`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`],[3,`pBind`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`items`,`style`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[3,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[3,`pt`,`class`,`unstyled`],[3,`onChange`,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[`data-p-icon`,`check`,3,`class`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[3,`pt`,`unstyled`],[`pInputText`,``,`type`,`text`,`role`,`searchbox`,3,`input`,`keydown`,`click`,`blur`,`pt`,`variant`,`value`,`unstyled`],[`data-p-icon`,`search`,3,`pBind`],[1,`p-multiselect-filter-icon`,3,`pBind`],[3,`onLazyLoad`,`items`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[`role`,`listbox`,`aria-multiselectable`,`true`,3,`pBind`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`],[`pMultiSelectItem`,``,`pRipple`,``,3,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`],[`role`,`option`,3,`pBind`,`ngStyle`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMultiSelectItem`,``,`pRipple`,``,3,`onClick`,`onMouseEnter`,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`]],template:function(n,i){n&1&&(KE(gn),ki$1(0,`div`,14)(1,`input`,15,0),Xp(`focus`,function(l){return i.onInputFocus(l)})(`blur`,function(l){return i.onInputBlur(l)})(`keydown`,function(l){return i.onKeyDown(l)}),eu()(),ki$1(3,`div`,16),Xp(`mouseleave`,function(){return i.labelContainerMouseLeave()}),ki$1(4,`div`,17),LE(5,Nn,2,2),LE(6,An,2,6),eu()(),LE(7,Rn,3,2,`ng-container`),ki$1(8,`div`,17),LE(9,Qn,3,2,`ng-container`)(10,to,2,2),eu(),ki$1(11,`p-overlay`,18,1),Xp(`visibleChange`,function(l){return i.overlayVisible.set(l)})(`onBeforeEnter`,function(l){return i.onOverlayBeforeEnter(l)})(`onAfterLeave`,function(l){return i.onOverlayAfterLeave(l)})(`onHide`,function(){return i.onOverlayHide()}),Vp(13,Ro,13,24,`ng-template`,null,2,WI),eu()),n&2&&(Gp(`pBind`,i.ptm(`hiddenInputContainer`)),zp(`data-p-hidden-accessible`,!0),Ov(),Gp(`pTooltip`,i.tooltip())(`pTooltipUnstyled`,i.unstyled())(`tooltipPosition`,i.tooltipPosition())(`positionStyle`,i.tooltipPositionStyle())(`tooltipStyleClass`,i.tooltipStyleClass())(`pAutoFocus`,i.autofocus())(`pBind`,i.ptm(`hiddenInput`)),zp(`aria-disabled`,i.$disabled())(`id`,i.inputId())(`aria-label`,i.ariaLabel())(`aria-labelledby`,i.ariaLabelledBy())(`aria-haspopup`,`listbox`)(`aria-expanded`,i.overlayVisible()??!1)(`aria-controls`,i.overlayVisible()?i.id()+`_list`:null)(`tabindex`,i.$disabled()?-1:i.tabindex())(`aria-activedescendant`,i.focused?i.focusedOptionId:void 0)(`value`,i.modelValue())(`name`,i.name())(`required`,i.required()?``:void 0)(`disabled`,i.$disabled()?``:void 0),Ov(2),vI(i.cx(`labelContainer`)),Gp(`pBind`,i.ptm(`labelContainer`))(`pTooltip`,i.tooltip())(`pTooltipUnstyled`,i.unstyled())(`tooltipDisabled`,i._disableTooltip)(`tooltipPosition`,i.tooltipPosition())(`positionStyle`,i.tooltipPositionStyle())(`tooltipStyleClass`,i.tooltipStyleClass()),Ov(),vI(i.cx(`label`)),Gp(`pBind`,i.ptm(`label`)),zp(`data-p`,i.labelDataP),Ov(),PE(!i.selectedItemsTemplate&&!i._selectedItemsTemplate?5:-1),Ov(),PE(i.selectedItemsTemplate||i._selectedItemsTemplate?6:-1),Ov(),PE(i.isVisibleClearIcon?7:-1),Ov(),vI(i.cx(`dropdown`)),Gp(`pBind`,i.ptm(`dropdown`)),Ov(),PE(i.loading()?9:10),Ov(2),Gp(`hostAttrSelector`,i.$attrSelector)(`visible`,i.overlayVisible())(`options`,i.overlayOptions())(`target`,`@parent`)(`appendTo`,i.$appendTo())(`unstyled`,i.unstyled())(`pt`,i.ptm(`pcOverlay`))(`motionOptions`,i.motionOptions()))},dependencies:[Bw,Lw,jw,Pw,Qo,mt,Mn$1,mi$1,ci$1,Yt,f,ii$1,f$1,d,ei$1,li$1,et,ti,$e,Mn$2,Cn$1,Zt$1,Ds,Ps],encapsulation:2})}return t})();var si=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=qi$1({type:t});static ɵinj=hr({imports:[Ge,Mn$1,Mn$1]})}return t})();var Xo=(t,a)=>a.service._id;function Yo(t,a){if(t&1){let e=qE();ki$1(0,`div`,10),Xp(`click`,function(){let i=Gl(e).$implicit;return Wl(YE().view(i.service))}),ki$1(1,`app-service-short`,11),Xp(`relationClick`,function(i){Gl(e);return Wl(YE().viewRelation(i))}),eu()()}if(t&2){let e=a.$implicit;Ov(),Gp(`entity`,e.service)(`specialist`,e.relations.specialist)(`venue`,e.relations.venue)}}function Zo(t,a){t&1&&(ki$1(0,`p`,9),MI(1,`За заданими критеріями послуг не знайдено.`),eu())}var Ba=(()=>{class t{constructor(){this._router=g(ie$1),this.categoryOptions=Object.entries(u).map(([e,n])=>({value:e,label:n})),this.serviceStatusOptions=Object.entries(c).map(([e,n])=>({value:e,label:n})),this.searchTerm=Ie(``),this.selectedCategories=Ie([]),this.selectedStatus=Ie(null),this.results=KI(()=>{let e=this.searchTerm().trim().toLowerCase(),n=this.selectedCategories(),i=this.selectedStatus();return Q.filter(o=>!(e&&![o.title,o.description].filter(Boolean).join(` `).toLowerCase().includes(e)||n.length&&!n.includes(o.category)||i&&o.status!==i)).map(o=>({service:o,relations:l(o)}))})}view(e){this._router.navigate([`/service`,e._id])}viewRelation(e){this._router.navigate([`/`,e.type,e.id])}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=fE({type:t,selectors:[[`ng-component`]],decls:13,vars:7,consts:[[1,`explore`],[1,`explore__header`],[`translate`,``,1,`explore__title`],[`pInputText`,``,`type`,`text`,`placeholder`,`Назва або опис послуги`,1,`explore__search`,3,`ngModelChange`,`ngModel`],[`appendTo`,`body`,`scrollHeight`,`auto`,`optionLabel`,`label`,`optionValue`,`value`,`placeholder`,`Категорія`,1,`explore__filter`,3,`ngModelChange`,`options`,`ngModel`],[`appendTo`,`body`,`scrollHeight`,`auto`,`optionLabel`,`label`,`optionValue`,`value`,`placeholder`,`Статус`,1,`explore__filter`,3,`ngModelChange`,`options`,`showClear`,`ngModel`],[`pButton`,``,`routerLink`,`/map`,`severity`,`secondary`,`size`,`small`,`translate`,``,1,`explore__map-link`],[1,`explore__grid`],[1,`explore__row`],[`translate`,``,1,`explore__empty`],[1,`explore__row`,3,`click`],[3,`relationClick`,`entity`,`specialist`,`venue`]],template:function(n,i){n&1&&(ki$1(0,`div`,0)(1,`div`,1)(2,`h1`,2),MI(3,`Пошук`),eu(),ki$1(4,`input`,3),Xp(`ngModelChange`,function(l){return i.searchTerm.set(l)}),eu(),wD(),ki$1(5,`p-multiSelect`,4),Xp(`ngModelChange`,function(l){return i.selectedCategories.set(l)}),eu(),wD(),ki$1(6,`p-select`,5),Xp(`ngModelChange`,function(l){return i.selectedStatus.set(l)}),eu(),wD(),ki$1(7,`a`,6),MI(8,`Карта`),eu()(),ki$1(9,`div`,7),VE(10,Yo,2,3,`div`,8,Xo,!1,Zo,2,0,`p`,9),eu()()),n&2&&(Ov(4),Gp(`ngModel`,i.searchTerm()),bD(),Ov(),Gp(`options`,i.categoryOptions)(`ngModel`,i.selectedCategories()),bD(),Ov(),Gp(`options`,i.serviceStatusOptions)(`showClear`,!0)(`ngModel`,i.selectedStatus()),bD(),Ov(4),HE(i.results()))},dependencies:[H$1,Mn$2,Le,Cn$1,Zt$1,Jt$1,Kn$1,Jn$1,nt,et,vs,Ci$1,si,Ge,dj],styles:[`.explore__header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:var(--%NS%sp-2);margin-bottom:var(--%NS%sp-4)}.explore__title[_ngcontent-%COMP%]{margin:0 var(--%NS%sp-4) 0 0}.explore__search[_ngcontent-%COMP%]{min-width:220px;flex:1 1 220px}.explore__filter[_ngcontent-%COMP%]{min-width:180px}.explore__map-link[_ngcontent-%COMP%]{margin-left:auto}.explore__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:var(--%NS%sp-4)}.explore__row[_ngcontent-%COMP%]{cursor:pointer}.explore__empty[_ngcontent-%COMP%]{color:var(--%NS%c-text-muted)}`]})}}return t})();export{Ba as ExploreComponent};