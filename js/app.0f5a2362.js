(function(e){function t(t){for(var s,r,o=t[0],a=t[1],p=t[2],l=0,u=[];l<o.length;l++)r=o[l],i[r]&&u.push(i[r][0]),i[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);c&&c(t);while(u.length)u.shift()();return _.push.apply(_,p||[]),n()}function n(){for(var e,t=0;t<_.length;t++){for(var n=_[t],s=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(s=!1)}s&&(_.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},i={0:0},_=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var c=a;_.push([0,1]),n()})({0:function(e,t,n){e.exports=n("Vtdi")},"A0++":function(e,t,n){"use strict";var s=n("BPUQ"),i=n.n(s);i.a},BPUQ:function(e,t,n){},QW6o:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("yt8O"),n("VRzm");var s=n("Kw5r"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("formWidget")],1)},_=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_name,expression:"entry_name"}],staticClass:"name"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input_name,expression:"input_name"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.input_name},on:{keyup:e.key_monitor_name,input:function(t){t.target.composing||(e.input_name=t.target.value)}}}),e._m(0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_enquiry_type,expression:"entry_enquiry_type"}],staticClass:"entry-2"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+"  ")]),n("br"),n("button",{staticClass:"btn",on:{click:e.btn_answer1_enquiry}},[e._v(" "+e._s(e.answer1_enquiry_type)+" ")]),n("button",{staticClass:"btn",on:{click:e.btn_answer2_enquiry}},[e._v(" "+e._s(e.answer2_enquiry_type)+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_project_type,expression:"entry_project_type"}],staticClass:"entry-3"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+" "+e._s(e.answer1_enquiry_type)+" "+e._s(e.prompt2)+" ")]),n("br"),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_project_type(e.answer1_project_type)}}},[e._v(" "+e._s(e.answer1_project_type)+" ")]),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_project_type(e.answer2_project_type)}}},[e._v(" "+e._s(e.answer2_project_type)+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_project_desc1,expression:"entry_project_desc1"}],staticClass:"entry-5"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+" "+e._s(e.answer1_enquiry_type)+" "+e._s(e.prompt2)+" "+e._s(e.answers_project_type)+" "+e._s(e.prompt3)+" ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.project_desc1,expression:"project_desc1"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.project_desc1},on:{keyup:e.key_monitor_desc1,input:function(t){t.target.composing||(e.project_desc1=t.target.value)}}}),e._m(1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_time_horizon,expression:"entry_time_horizon"}],staticClass:"entry-6"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+" "+e._s(e.answer1_enquiry_type)+" "+e._s(e.prompt2)+" "+e._s(e.answers_project_type)+" "+e._s(e.prompt3)+" "+e._s(e.project_desc1)+". "),n("br"),e._v(" "+e._s(e.prompt4)+" ")]),n("br"),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_time_horizon(e.answer1_time_horizon)}}},[e._v(" "+e._s(e.answer1_time_horizon)+" ")]),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_time_horizon(e.answer2_time_horizon)}}},[e._v(" "+e._s(e.answer2_time_horizon)+" ")]),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_time_horizon(e.answer3_time_horizon)}}},[e._v(" "+e._s(e.answer3_time_horizon)+" ")]),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_time_horizon(e.answer4_time_horizon)}}},[e._v(" "+e._s(e.answer4_time_horizon)+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_help_needed,expression:"entry_help_needed"}],staticClass:"entry-7"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+" "+e._s(e.answer1_enquiry_type)+" "+e._s(e.prompt2)+" "+e._s(e.answers_project_type)+" "+e._s(e.prompt3)+" "+e._s(e.project_desc1)+". "),n("br"),e._v(" "+e._s(e.prompt4)+" "+e._s(e.answers_time_horizon)+" "+e._s(e.prompt5)+" ")]),n("br"),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_help_needed(e.answer1_help_needed)}}},[e._v(" "+e._s(e.answer1_help_needed)+" ")]),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_help_needed(e.answer2_help_needed)}}},[e._v(" "+e._s(e.answer2_help_needed)+" ")]),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_help_needed(e.answer3_help_needed)}}},[e._v(" "+e._s(e.answer3_help_needed)+" ")]),n("button",{staticClass:"btn",on:{click:function(t){e.btn_answers_help_needed(e.answer4_help_needed)}}},[e._v(" "+e._s(e.answer4_help_needed)+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_email_project,expression:"entry_email_project"}],staticClass:"entry-8"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+" "+e._s(e.answer1_enquiry_type)+" "+e._s(e.prompt2)+" "+e._s(e.answers_project_type)+" "+e._s(e.prompt3)+" "+e._s(e.project_desc1)+". "),n("br"),e._v(" "+e._s(e.prompt4)+" "+e._s(e.answers_time_horizon)+" "+e._s(e.prompt5)+" "+e._s(e.answers_help_needed)+". "),n("br"),e._v(" "+e._s(e.prompt7)+" ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.email},on:{keyup:e.key_monitor_email_project,input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(2)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_project_desc2,expression:"entry_project_desc2"}],staticClass:"entry-4"},[n("label",{staticClass:"prompt_label"},[e._v("  "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+" "+e._s(e.answer2_enquiry_type)+". "),n("br"),e._v(" "+e._s(e.prompt6)+" "),n("br")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.project_desc2,expression:"project_desc2"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.project_desc2},on:{keyup:e.key_monitor_desc2,input:function(t){t.target.composing||(e.project_desc2=t.target.value)}}}),e._m(3)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_email_question,expression:"entry_email_question"}],staticClass:"email"},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "+e._s(e.input_name)+" "+e._s(e.prompt1)+" "+e._s(e.answer2_enquiry_type)+". "),n("br"),e._v(" "+e._s(e.prompt6)+" "+e._s(e.project_desc2)+". "),n("br"),e._v(" "+e._s(e.prompt7)+"  ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.email},on:{keyup:e.key_monitor_email_question,input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(4)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_project,expression:"entry_project"}]},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "),n("span",{staticClass:"span_text",on:{click:function(t){e.edit_name()}}},[e._v(" "+e._s(e.input_name))]),e.switchName?n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit_input_name,expression:"edit_input_name"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.edit_input_name},on:{keyup:e.key_monitor_edit_name,input:function(t){t.target.composing||(e.edit_input_name=t.target.value)}}})]):e._e(),e._v("\n    "+e._s(e.prompt1)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_answer_enquiry}},[e._v(" "+e._s(e.answer1_enquiry_type))]),n("br"),e._v("\n    "+e._s(e.prompt2)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_project_type}},[e._v(e._s(e.answers_project_type)+" ")]),e._v(" \n    "+e._s(e.prompt3)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_project_desc1}},[e._v(e._s(e.project_desc1)+" ")]),e.switchProjectDesc1?n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit_input_project_desc1,expression:" edit_input_project_desc1"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.edit_input_project_desc1},on:{keyup:e.key_monitor_edit_desc1,input:function(t){t.target.composing||(e.edit_input_project_desc1=t.target.value)}}}):e._e(),n("br"),e._v("\n    "+e._s(e.prompt4)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_answers_time_horizon}},[e._v(" "+e._s(e.answers_time_horizon)+". ")]),n("br"),e._v("\n    "+e._s(e.prompt5)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_answers_help_needed}},[e._v(" "+e._s(e.answers_help_needed)+" ")]),n("br"),e._v("\n    "+e._s(e.prompt7)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_entry_email_project}},[e._v(" "+e._s(e.email)+" ")]),n("br"),e.switchEmailProject?n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit_email,expression:"edit_email"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.edit_email},on:{keyup:e.key_monitor_edit_email_project,input:function(t){t.target.composing||(e.edit_email=t.target.value)}}}):e._e(),e.switchAnswerEnquiry?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answer1_enquiry2(e.answer1_enquiry_type)}}},[e._v(" "+e._s(e.answer1_enquiry_type)+" ")]):e._e(),e.switchAnswerEnquiry?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answer2_enquiry2(e.answer2_enquiry_type)}}},[e._v(" "+e._s(e.answer2_enquiry_type)+" ")]):e._e(),e.switchProjectType?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_project_type(e.answer1_project_type)}}},[e._v(" "+e._s(e.answer1_project_type)+" ")]):e._e(),e.switchProjectType?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_project_type(e.answer2_project_type)}}},[e._v(" "+e._s(e.answer2_project_type)+" ")]):e._e(),e.switchTimeHorizon?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_time_horizon(e.answer1_time_horizon)}}},[e._v(" "+e._s(e.answer1_time_horizon)+" ")]):e._e(),e.switchTimeHorizon?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_time_horizon(e.answer2_time_horizon)}}},[e._v(" "+e._s(e.answer2_time_horizon)+" ")]):e._e(),e.switchTimeHorizon?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_time_horizon(e.answer3_time_horizon)}}},[e._v(" "+e._s(e.answer3_time_horizon)+" ")]):e._e(),e.switchTimeHorizon?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_time_horizon(e.answer4_time_horizon)}}},[e._v(" "+e._s(e.answer4_time_horizon)+" ")]):e._e(),e.switchHelpNeeded?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_help_needed(e.answer1_help_needed)}}},[e._v(" "+e._s(e.answer1_help_needed)+" ")]):e._e(),e.switchHelpNeeded?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_help_needed(e.answer2_help_needed)}}},[e._v(" "+e._s(e.answer2_help_needed)+" ")]):e._e(),e.switchHelpNeeded?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_help_needed(e.answer3_help_needed)}}},[e._v(" "+e._s(e.answer3_help_needed)+" ")]):e._e(),e.switchHelpNeeded?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answers_help_needed(e.answer4_help_needed)}}},[e._v(" "+e._s(e.answer4_help_needed)+" ")]):e._e()])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.entry_question,expression:"entry_question"}]},[n("label",{staticClass:"prompt_label"},[e._v(" "+e._s(e.prompt0)+" "),n("span",{staticClass:"span_text",on:{click:function(t){e.edit_name()}}},[e._v(" "+e._s(e.input_name))]),e.switchName?n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit_input_name,expression:"edit_input_name"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.edit_input_name},on:{keyup:e.key_monitor_edit_name,input:function(t){t.target.composing||(e.edit_input_name=t.target.value)}}})]):e._e(),e._v("\n    "+e._s(e.prompt1)+" "),n("span",{staticClass:"span_text",on:{click:function(t){e.edit_answer_enquiry()}}},[e._v(" "+e._s(e.answer2_enquiry_type))]),n("br"),e._v("\n    "+e._s(e.prompt6)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_project_desc2}},[e._v(" "+e._s(e.project_desc2))]),e.switchProjectDesc2?n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit_input_project_desc2,expression:"edit_input_project_desc2"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.edit_input_project_desc2},on:{keyup:e.key_monitor_edit_desc2,input:function(t){t.target.composing||(e.edit_input_project_desc2=t.target.value)}}}):e._e(),n("br"),e._v("\n     "+e._s(e.prompt7)+" "),n("span",{staticClass:"span_text",on:{click:e.edit_entry_email_question}},[e._v(" "+e._s(e.email))]),n("br"),e.switchEmailQuestion?n("input",{directives:[{name:"model",rawName:"v-model",value:e.edit_email,expression:"edit_email"}],staticClass:"text",attrs:{type:"text"},domProps:{value:e.edit_email},on:{keyup:e.key_monitor_edit_email_question,input:function(t){t.target.composing||(e.edit_email=t.target.value)}}}):e._e(),e.switchAnswerEnquiry?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answer1_enquiry(e.answer1_enquiry_type)}}},[e._v(" "+e._s(e.answer1_enquiry_type)+" ")]):e._e(),e.switchAnswerEnquiry?n("button",{staticClass:"btn",on:{click:function(t){e.edit_btn_answer2_enquiry(e.answer2_enquiry_type)}}},[e._v(" "+e._s(e.answer2_enquiry_type)+" ")]):e._e()])])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"enter"},[e._v(" Hit "),n("b",[e._v("enter")]),e._v(" to save ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"enter"},[e._v(" Hit "),n("b",[e._v("enter")]),e._v(" to save ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"enter"},[e._v(" Hit "),n("b",[e._v("enter")]),e._v(" to save ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"enter"},[e._v(" Hit "),n("b",[e._v("enter")]),e._v(" to save ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"enter"},[e._v(" Hit "),n("b",[e._v("enter")]),e._v(" to save ")])}],a=n("vDqi"),p=n.n(a),c=n("p/7L"),l=n.n(c);s["a"].use(l.a,p.a);var u={data:function(){return{input_name:"",email:"",edit_input_name:"",edit_input_project_desc1:"",edit_input_project_desc2:"",edit_email:"",project_desc1:"",project_desc2:"",prompt0:[],prompt1:[],prompt2:[],prompt3:[],prompt4:[],prompt5:[],prompt6:[],prompt7:[],entry_name:!0,entry_enquiry_type:!1,entry_project_type:!1,entry_project_desc2:!1,entry_project_desc1:!1,entry_time_horizon:!1,entry_help_needed:!1,entry_email_project:!1,entry_email_question:!1,entry_question:!1,entry_project:!1,answers_time_horizon:[],answer1_enquiry_type:[],answer2_enquiry_type:[],answers_project_type:[],answer1_project_type:[],answer2_project_type:[],answer1_time_horizon:[],answer2_time_horizon:[],answer3_time_horizon:[],answer4_time_horizon:[],answers_help_needed:[],answer1_help_needed:[],answer2_help_needed:[],answer3_help_needed:[],answer4_help_needed:[],sample:[],switchName:!1,switchAnswerEnquiry:!1,switchProjectDesc2:!1,switchEmailQuestion:!1,switchEmailProject:!1,switchProjectType:!1,switchProjectDesc1:!1,switchTimeHorizon:!1,switchHelpNeeded:!1}},created:function(){this.GET_JSON()},methods:{key_monitor_name:function(e){"Enter"==e.key&&(this.sample=this.input_name,this.entry_name=!1,this.entry_enquiry_type=!0)},key_monitor_desc1:function(e){"Enter"==e.key&&(this.entry_project_desc1=!1,this.entry_time_horizon=!0)},key_monitor_desc2:function(e){"Enter"==e.key&&(this.entry_project_desc2=!1,this.entry_email_question=!0)},key_monitor_email_question:function(e){"Enter"==e.key&&(this.entry_email_question=!1,this.entry_question=!0)},key_monitor_email_project:function(e){"Enter"==e.key&&(this.entry_email_project=!1,this.entry_project=!0)},key_monitor_edit_name:function(e){"Enter"==e.key&&(this.input_name=this.edit_input_name,this.switchName=!1)},key_monitor_edit_desc2:function(e){"Enter"==e.key&&(this.project_desc2=this.edit_input_project_desc2,this.switchProjectDesc2=!1)},key_monitor_edit_email_question:function(){"Enter"==event.key&&(this.email=this.edit_email,this.switchEmailQuestion=!1)},key_monitor_edit_email_project:function(){"Enter"==event.key&&(this.email=this.edit_email,this.switchEmailProject=!1)},key_monitor_edit_desc1:function(e){"Enter"==e.key&&(this.project_desc1=this.edit_input_project_desc1,this.switchProjectDesc1=!1)},GET_JSON:function(){var e=this;p.a.get("http://35.199.169.44:8080/https://apsel.io/challenge/conversation2.json").then(function(t){var n=t.data;e.prompt0=n.questions[0].prompt,e.prompt1=n.questions[1].prompt,e.prompt2=n.questions[2].prompt,e.prompt3=n.questions[3].prompt,e.prompt4=n.questions[4].prompt,e.prompt5=n.questions[5].prompt,e.prompt6=n.questions[6].prompt,e.prompt7=n.questions[7].prompt,e.answer1_enquiry_type=n.questions[1].answers[0],e.answer2_enquiry_type=n.questions[1].answers[1],e.answer1_project_type=n.questions[2].answers[0],e.answer2_project_type=n.questions[2].answers[1],e.answer1_time_horizon=n.questions[4].answers[0],e.answer2_time_horizon=n.questions[4].answers[1],e.answer3_time_horizon=n.questions[4].answers[2],e.answer4_time_horizon=n.questions[4].answers[3],e.answer1_help_needed=n.questions[5].answers[0],e.answer2_help_needed=n.questions[5].answers[1],e.answer3_help_needed=n.questions[5].answers[2],e.answer4_help_needed=n.questions[5].answers[3]})},btn_answer1_enquiry:function(){this.entry_enquiry_type=!1,this.entry_project_type=!0},btn_answer2_enquiry:function(){this.entry_enquiry_type=!1,this.entry_project_desc2=!0},btn_answers_project_type:function(e){this.answers_project_type=e,this.entry_project_type=!1,this.entry_project_desc1=!0},btn_answers_time_horizon:function(e){this.answers_time_horizon=e,this.entry_time_horizon=!1,this.entry_help_needed=!0},btn_answers_help_needed:function(e){this.answers_help_needed=e,this.entry_help_needed=!1,this.entry_email_project=!0},edit_name:function(){this.switchName=!0,this.input_name=""},edit_answer_enquiry:function(){this.switchAnswerEnquiry=!0},edit_btn_answer1_enquiry:function(e){this.edit_btn_answer1_enquiry=e,this.switchAnswerEnquiry=!1,this.entry_question=!1,this.entry_project_type=!0},edit_btn_answer2_enquiry:function(e){this.answer2_enquiry_type=e,this.switchAnswerEnquiry=!1,this.edit_btn_answer1_enquiry=!1},edit_btn_answer1_enquiry2:function(e){this.answer1_enquiry_type=e,this.switchAnswerEnquiry=!1},edit_btn_answer2_enquiry2:function(e){this.answer2_enquiry_type=e,this.switchAnswerEnquiry=!1,this.entry_project_desc2=!0,this.entry_project=!1},edit_project_desc2:function(){this.switchProjectDesc2=!0,this.project_desc2=""},edit_entry_email_question:function(){this.switchEmailQuestion=!0,this.email=""},edit_project_type:function(){this.switchProjectType=!0},edit_btn_answers_project_type:function(e){this.answers_project_type=e,this.switchProjectType=!1},edit_project_desc1:function(){this.switchProjectDesc1=!0,this.project_desc1=""},edit_answers_time_horizon:function(){this.switchTimeHorizon=!0},edit_btn_answers_time_horizon:function(e){this.answers_time_horizon=e,this.switchTimeHorizon=!1},edit_answers_help_needed:function(){this.switchHelpNeeded=!0},edit_btn_answers_help_needed:function(e){this.answers_help_needed=e,this.switchHelpNeeded=!1},edit_entry_email_project:function(){this.switchEmailProject=!0,this.email=""}}},m=u,d=(n("X8Ui"),n("KHd+")),w=Object(d["a"])(m,r,o,!1,null,null,null),y=w.exports,h={name:"app",components:{formWidget:y}},v=h,b=(n("A0++"),Object(d["a"])(v,i,_,!1,null,null,null)),f=b.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(f)}}).$mount("#app")},X8Ui:function(e,t,n){"use strict";var s=n("QW6o"),i=n.n(s);i.a}});
//# sourceMappingURL=app.0f5a2362.js.map