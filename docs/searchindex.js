Search.setIndex({docnames:["actions/bye","actions/hello","actions/probe","actions/probematch","actions/resolve","actions/resolvematch","appsupport","cmdline","daemon","discovery","envelope","index","message","namespaces","networking","publishing","qname","scope","semantics","serialize_deserialize","service","terms","threaded","udp","uri","wsdiscovery"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["actions/bye.rst","actions/hello.rst","actions/probe.rst","actions/probematch.rst","actions/resolve.rst","actions/resolvematch.rst","appsupport.rst","cmdline.rst","daemon.rst","discovery.rst","envelope.rst","index.rst","message.rst","namespaces.rst","networking.rst","publishing.rst","qname.rst","scope.rst","semantics.rst","serialize_deserialize.rst","service.rst","terms.rst","threaded.rst","udp.rst","uri.rst","wsdiscovery.rst"],objects:{"wsdiscovery.actions":{bye:[0,0,0,"-"],hello:[1,0,0,"-"],probe:[2,0,0,"-"],probematch:[3,0,0,"-"],resolve:[4,0,0,"-"],resolvematch:[5,0,0,"-"]},"wsdiscovery.actions.bye":{createByeMessage:[0,1,1,""],parseByeMessage:[0,1,1,""]},"wsdiscovery.actions.hello":{createHelloMessage:[1,1,1,""],parseHelloMessage:[1,1,1,""]},"wsdiscovery.actions.probe":{createProbeMessage:[2,1,1,""],parseProbeMessage:[2,1,1,""]},"wsdiscovery.actions.probematch":{createProbeMatchMessage:[3,1,1,""],parseProbeMatchMessage:[3,1,1,""]},"wsdiscovery.actions.resolve":{createResolveMessage:[4,1,1,""],parseResolveMessage:[4,1,1,""]},"wsdiscovery.actions.resolvematch":{createResolveMatchMessage:[5,1,1,""],parseResolveMatchMessage:[5,1,1,""]},"wsdiscovery.daemon":{Daemon:[8,2,1,""]},"wsdiscovery.daemon.Daemon":{_sendBye:[8,3,1,""],_sendHello:[8,3,1,""],_sendProbe:[8,3,1,""],_sendProbeMatch:[8,3,1,""],_sendResolve:[8,3,1,""],_sendResolveMatch:[8,3,1,""],envReceived:[8,3,1,""]},"wsdiscovery.discovery":{ThreadedWSDiscovery:[9,2,1,""]},"wsdiscovery.discovery.ThreadedWSDiscovery":{clearRemoteServices:[9,3,1,""],searchServices:[9,3,1,""],setRemoteServiceByeCallback:[9,3,1,""],setRemoteServiceHelloCallback:[9,3,1,""],setRemoveServiceDisappearedCallback:[9,3,1,""],start:[9,3,1,""],stop:[9,3,1,""]},"wsdiscovery.envelope":{SoapEnvelope:[10,2,1,""],constructBye:[10,1,1,""],constructHello:[10,1,1,""],constructProbe:[10,1,1,""],constructProbeMatch:[10,1,1,""],constructResolve:[10,1,1,""],constructResolveMatch:[10,1,1,""]},"wsdiscovery.envelope.SoapEnvelope":{getAction:[10,3,1,""],getEPR:[10,3,1,""],getInstanceId:[10,3,1,""],getMessageId:[10,3,1,""],getMessageNumber:[10,3,1,""],getMetadataVersion:[10,3,1,""],getProbeResolveMatches:[10,3,1,""],getRelatesTo:[10,3,1,""],getRelationshipType:[10,3,1,""],getReplyTo:[10,3,1,""],getScopes:[10,3,1,""],getSequenceId:[10,3,1,""],getTo:[10,3,1,""],getTypes:[10,3,1,""],getXAddrs:[10,3,1,""],setAction:[10,3,1,""],setEPR:[10,3,1,""],setInstanceId:[10,3,1,""],setMessageId:[10,3,1,""],setMessageNumber:[10,3,1,""],setMetadataVersion:[10,3,1,""],setProbeResolveMatches:[10,3,1,""],setRelatesTo:[10,3,1,""],setRelationshipType:[10,3,1,""],setReplyTo:[10,3,1,""],setScopes:[10,3,1,""],setSequenceId:[10,3,1,""],setTo:[10,3,1,""],setTypes:[10,3,1,""],setXAddrs:[10,3,1,""]},"wsdiscovery.message":{createSOAPMessage:[19,1,1,""],parseSOAPMessage:[19,1,1,""]},"wsdiscovery.namespaces":{NS_ACTION_BYE:[13,4,1,""],NS_ACTION_HELLO:[13,4,1,""],NS_ACTION_PROBE:[13,4,1,""],NS_ACTION_PROBE_MATCH:[13,4,1,""],NS_ACTION_RESOLVE:[13,4,1,""],NS_ACTION_RESOLVE_MATCH:[13,4,1,""],NS_ADDRESSING:[13,4,1,""],NS_DISCOVERY:[13,4,1,""],NS_SOAPENV:[13,4,1,""]},"wsdiscovery.publishing":{ThreadedWSPublishing:[15,2,1,""]},"wsdiscovery.publishing.ThreadedWSPublishing":{clearLocalServices:[15,3,1,""],publishService:[15,3,1,""],start:[15,3,1,""],stop:[15,3,1,""]},"wsdiscovery.qname":{QName:[16,2,1,""]},"wsdiscovery.qname.QName":{getFullname:[16,3,1,""],getLocalname:[16,3,1,""],getNamespace:[16,3,1,""],getNamespacePrefix:[16,3,1,""]},"wsdiscovery.scope":{Scope:[17,2,1,""]},"wsdiscovery.scope.Scope":{getMatchBy:[17,3,1,""],getQuotedValue:[17,3,1,""],getValue:[17,3,1,""]},"wsdiscovery.service":{Service:[20,2,1,""]},"wsdiscovery.service.Service":{getEPR:[20,3,1,""],getInstanceId:[20,3,1,""],getMessageNumber:[20,3,1,""],getMetadataVersion:[20,3,1,""],getScopes:[20,3,1,""],getTypes:[20,3,1,""],getXAddrs:[20,3,1,""],incrementMessageNumber:[20,3,1,""],setEPR:[20,3,1,""],setInstanceId:[20,3,1,""],setMessageNumber:[20,3,1,""],setMetadataVersion:[20,3,1,""],setScopes:[20,3,1,""],setTypes:[20,3,1,""],setXAddrs:[20,3,1,""]},"wsdiscovery.threaded":{AddressMonitorThread:[22,2,1,""],NetworkingThread:[22,2,1,""],ThreadedNetworking:[22,2,1,""],_StoppableDaemonThread:[22,2,1,""]},"wsdiscovery.threaded.AddressMonitorThread":{_updateAddrs:[22,3,1,""],run:[22,3,1,""]},"wsdiscovery.threaded.NetworkingThread":{_createMulticastInSocket:[22,5,1,""],_createMulticastOutSocket:[22,5,1,""],_makeMreq:[22,5,1,""],_recvMessages:[22,3,1,""],_sendMsg:[22,3,1,""],_sendPendingMessages:[22,3,1,""],addMulticastMessage:[22,3,1,""],addSourceAddr:[22,3,1,""],addUnicastMessage:[22,3,1,""],join:[22,3,1,""],removeSourceAddr:[22,3,1,""],run:[22,3,1,""],start:[22,3,1,""]},"wsdiscovery.threaded.ThreadedNetworking":{_startThreads:[22,3,1,""],_stopThreads:[22,3,1,""],addSourceAddr:[22,3,1,""],removeSourceAddr:[22,3,1,""],sendMulticastMessage:[22,3,1,""],sendUnicastMessage:[22,3,1,""],start:[22,3,1,""],stop:[22,3,1,""]},"wsdiscovery.threaded._StoppableDaemonThread":{schedule_stop:[22,3,1,""]},"wsdiscovery.udp":{UDPMessage:[23,2,1,""]},"wsdiscovery.udp.UDPMessage":{MULTICAST:[23,6,1,""],UNICAST:[23,6,1,""],canSend:[23,3,1,""],getAddr:[23,3,1,""],getEnv:[23,3,1,""],getPort:[23,3,1,""],isFinished:[23,3,1,""],msgType:[23,3,1,""],refresh:[23,3,1,""]},"wsdiscovery.uri":{URI:[24,2,1,""]},"wsdiscovery.uri.URI":{getAuthority:[24,3,1,""],getPath:[24,3,1,""],getPathExQueryFragment:[24,3,1,""],getScheme:[24,3,1,""]},wsdiscover:{"--address":[7,7,1,"cmdoption-wsdiscover-a"],"--capture":[7,7,1,"cmdoption-wsdiscover-c"],"--loglevel":[7,7,1,"cmdoption-wsdiscover-l"],"--port":[7,7,1,"cmdoption-wsdiscover-p"],"--scope":[7,7,1,"cmdoption-wsdiscover-s"],"-a":[7,7,1,"cmdoption-wsdiscover-a"],"-c":[7,7,1,"cmdoption-wsdiscover-c"],"-l":[7,7,1,"cmdoption-wsdiscover-l"],"-p":[7,7,1,"cmdoption-wsdiscover-p"],"-s":[7,7,1,"cmdoption-wsdiscover-s"]},wsdiscovery:{daemon:[8,0,0,"-"],envelope:[10,0,0,"-"],message:[19,0,0,"-"],namespaces:[13,0,0,"-"],qname:[16,0,0,"-"],scope:[17,0,0,"-"],service:[20,0,0,"-"],threaded:[22,0,0,"-"],udp:[23,0,0,"-"],uri:[24,0,0,"-"]},wspublish:{"--address":[7,7,1,"cmdoption-wspublish-a"],"--capture":[7,7,1,"cmdoption-wspublish-c"],"--loglevel":[7,7,1,"cmdoption-wspublish-l"],"--port":[7,7,1,"cmdoption-wspublish-p"],"--scope":[7,7,1,"cmdoption-wspublish-s"],"--type":[7,7,1,"cmdoption-wspublish-t"],"-a":[7,7,1,"cmdoption-wspublish-a"],"-c":[7,7,1,"cmdoption-wspublish-c"],"-l":[7,7,1,"cmdoption-wspublish-l"],"-p":[7,7,1,"cmdoption-wspublish-p"],"-s":[7,7,1,"cmdoption-wspublish-s"],"-t":[7,7,1,"cmdoption-wspublish-t"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","data","Python data"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"],"7":["std","cmdoption","program option"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:data","5":"py:staticmethod","6":"py:attribute","7":"std:cmdoption"},terms:{"class":[6,8,9,10,11,15,16,17,20,23,24],"default":22,"float":22,"function":[14,19,24],"new":9,"return":22,"short":[11,25],"static":22,"true":22,For:25,The:[12,14,22],There:7,Use:22,_createmulticastinsocket:22,_createmulticastoutsocket:22,_makemreq:22,_quitev:22,_recvmessag:22,_sendby:8,_sendhello:8,_sendmsg:22,_sendpendingmessag:22,_sendprob:8,_sendprobematch:8,_sendresolv:8,_sendresolvematch:8,_startthread:22,_stoppabledaemonthread:22,_stopthread:22,_updateaddr:22,action:[0,1,2,3,4,5,10,21],activ:22,actual:[14,21],add:22,addit:24,addmulticastmessag:22,addr:[8,22,23],address:[7,8,9,13,15,18,20,21,22],addressmonitorthread:22,addsourceaddr:22,addunicastmessag:22,after:22,agnost:8,aliv:22,also:22,alwai:22,ani:22,appear:9,applic:11,arg:22,argument:22,arrang:22,associ:21,attempt:22,avail:[7,18],base:[6,9,11,15,25],been:22,befor:[9,15,22],belong:21,between:19,block:22,build:11,bye:[10,12,13,15,18,19],call:[9,15,21,22],callabl:22,callback:9,camera:25,can:[18,21,22],cansend:23,captur:[7,8,22],categori:21,caus:22,chang:18,clean:[9,15,22],clear:9,clearlocalservic:15,clearremoteservic:9,client:18,command:11,common:[18,21],commun:[6,11],connect:25,constrain:17,construct:10,constructby:10,constructhello:10,constructor:22,constructprob:10,constructprobematch:10,constructresolv:10,constructresolvematch:10,contain:15,content:11,control:22,creat:14,createbyemessag:0,createhellomessag:1,createprobematchmessag:3,createprobemessag:2,createresolvematchmessag:5,createresolvemessag:4,createsoapmessag:19,current:22,daemon:[6,9,11,15,22],data:19,deadlock:22,debug:7,decid:22,decoupl:14,defin:18,definit:[6,11],delai:23,deseri:19,detail:25,devic:25,disabl:9,disappear:9,discov:[7,9,11,18],discover:20,discoveri:[0,1,2,3,4,5,7,8,11,13,14,17,20,22],dom:[0,1,2,3,4,5],each:19,either:22,endpoint:[20,21],env:[0,1,2,3,4,5,8,19,22,23],envelop:[0,1,2,3,4,5,6,12,13,19,21],envreceiv:8,epr:[8,10,20,21],error:[7,22],except:22,exit:22,explan:18,facil:[6,11,22],factori:[6,12,19,21],file:7,filter:9,follow:[12,18],fraction:22,framework:[11,14],from:[14,22],full:[6,7,9,25],gener:[6,14],get:20,getact:10,getaddr:23,getauthor:24,getenv:23,getepr:[10,20],getfullnam:16,getinstanceid:[10,20],getlocalnam:16,getmatchbi:17,getmessageid:10,getmessagenumb:[10,20],getmetadatavers:[10,20],getnamespac:16,getnamespaceprefix:16,getpath:24,getpathexqueryfrag:24,getport:23,getproberesolvematch:10,getquotedvalu:17,getrelatesto:10,getrelationshiptyp:10,getreplyto:10,getschem:24,getscop:[10,20],getsequenceid:10,getto:10,gettyp:[10,20],getvalu:17,getxaddr:[10,20],given:[9,15],group:21,handl:[6,11,22],happen:22,has:22,hello:[9,10,12,13,18,19],help:23,host:22,http:[7,13,16],identifi:21,implement:[6,8,10,11,14,16,17,20,21,22,23,24],includ:[15,21],incrementmessagenumb:20,index:11,info:7,initialdelai:[22,23],instanceid:[10,20],introduct:11,introductori:25,invok:22,ipaddr:19,is_al:22,isfinish:23,item:15,its:18,join:[18,22],keyword:22,kwarg:[8,9,15,22],leav:18,level:7,limit:18,line:11,list:9,localnam:16,locat:18,log:7,logic:21,loglevel:7,made:22,mai:[18,22],manag:[18,23],mani:22,match:[6,9,10,11,12,13,18,19,21],matchbi:17,materi:25,mean:22,messag:[6,7,8,9,11,13,14,15,21,22,23,25],messageid:10,messagenumb:[10,20],metadata:18,metadatavers:[10,20],method:[9,15,22],might:9,mixin:8,model:7,modul:[11,24],more:22,most:22,msg:22,msgtype:23,multicast:[18,22,23,25],must:[18,22],myn:7,myservice_typ:7,name:[16,21],namespac:[6,7,11,16,21],namespace_prefix:16,network:[6,9,11,15,18,20,21,25],networkingthread:22,none:[8,9,16,17,22],normal:22,noth:22,ns_action_by:13,ns_action_hello:13,ns_action_prob:13,ns_action_probe_match:13,ns_action_resolv:13,ns_action_resolve_match:13,ns_address:13,ns_discoveri:13,ns_soapenv:13,number:22,nutshel:11,object:[0,1,2,3,4,5,19,22],observ:22,occur:22,onc:22,one:[7,15,18],onli:9,onlin:9,onvif:7,oper:22,option:[7,18,22],org:[7,13,16],organ:21,other:[9,15,22,25],out:22,over:25,overrid:22,packag:[13,21],page:11,paramet:9,pars:[0,1,2,3,4,5],parsebyemessag:0,parsehellomessag:1,parseprobematchmessag:3,parseprobemessag:2,parser:[6,11],parseresolvematchmessag:5,parseresolvemessag:4,parsesoapmessag:19,particular:18,pass:[9,22],pattern:15,per:[15,22],point:22,port:[7,8,9,22,23],prepar:18,present:22,printer:25,probe:[10,12,13,18,19,21],probematch:[3,13],proberesolvematch:10,provid:[6,11,12,14,21],publish:[6,7,11,14],publishservic:15,purpos:21,qname:[6,11,21],qualifi:[16,21],rais:22,realli:22,receiv:18,refer:[20,21],refresh:23,relatesto:[8,10],relationshiptyp:10,remot:9,remov:[15,22],removesourceaddr:22,repeat:23,replyto:10,repres:[10,22],represent:[6,11,19,21],resolv:[10,12,13,18,19,21],resolvematch:[5,13],resourc:21,respect:22,respond:18,retriev:21,reusabl:6,run:22,runtimeerror:22,same:22,schedul:22,schedule_stop:22,schema:13,scope:[6,7,8,9,10,11,15,18,20,21],scopesfilt:9,search:[9,11],searchservic:9,second:22,see:[16,18,25],self:22,semant:[11,21,23,25],send:[15,18,22],sendmulticastmessag:22,sendunicastmessag:22,sent:[9,15],separ:22,sequenceid:10,sequenti:22,serial:[6,12],serv:21,servic:[6,7,8,10,11,14,18,21,24,25],set:[9,14,20],setact:10,setepr:[10,20],setinstanceid:[10,20],setmessageid:10,setmessagenumb:[10,20],setmetadatavers:[10,20],setproberesolvematch:10,setrelatesto:10,setrelationshiptyp:10,setremoteservicebyecallback:9,setremoteservicehellocallback:9,setremoveservicedisappearedcallback:9,setreplyto:10,setscop:[10,20],setsequenceid:10,setto:10,settyp:[10,20],setxaddr:[10,20],shall:22,should:[9,15,18,22],similar:21,simpl:11,sleep:22,soap:[0,1,2,3,4,5,10,13,19,21,25],soapenvelop:10,some:18,specif:25,specifi:22,standard:[22,25],start:[9,15,22],still:22,stop:[9,15,22],stoppabl:22,string:[0,1,2,3,4,5,19],subclass:22,support:[16,24],system:[14,22],tag:21,taken:22,target:22,term:[11,18,25],termin:22,than:22,them:15,thereof:22,thi:[11,21,22],thread:[6,9,14,15],threadednetwork:[9,15,22],threadedwsdiscoveri:9,threadedwspublish:15,through:22,time:22,timeout:[9,22],tool:[7,11],ttl:[8,22],two:7,type:[7,8,9,10,15,18,20],typesfilt:9,udp:[6,11,25],udpmessag:23,unhandl:22,uni:25,unicast:[18,22,23],uniqu:21,until:22,uri:[6,7,11,21],used:[13,17,21,25],useful:24,using:[7,9,15,22],util:11,uuid:9,uuid_:8,valu:17,wai:18,wait:22,warn:7,web:[20,21,25],when:[9,18,21,22],whether:22,which:[9,15],whose:22,wide:25,wiki:16,wikipedia:16,would:22,wrap:21,wsd:22,wsdiscov:11,wsdiscoveri:[0,1,2,3,4,5,8,9,10,13,15,16,17,19,20,22,23,24],wspublish:11,www:[7,13],xaddr:[10,15,20],xml:[0,1,2,3,4,5,13,19,21],xmlsoap:13,you:22},titles:["<span class=\"xref std std-term\">Bye</span> message (de)serialization","<span class=\"xref std std-term\">Hello</span> message (de)serialization","<span class=\"xref std std-term\">Probe</span> message (de)serialization","<span class=\"xref std std-term\">Probe match</span> message (de)serialization","<span class=\"xref std std-term\">Resolve</span> message (de)serialization","<span class=\"xref std std-term\">Resolve match</span> message (de)serialization","Framework for discovery applications","Command-line utilities","Generic networking base daemon","Service discovery implementation","WS-Discovery message envelope &amp; factories","Package documentation","WS-Discovery message facilities","Namespace definitions","Networking daemon base classes","Service publishing implementation","QName representation","Service Scope representation","WS-Discovery message semantics","WS-Discovery messages (de)serialization","Service representation","WS-Discovery terms","Threaded networking base classes","UDP communications handling","URI parser for scope matching","WS-Discovery in a nutshell"],titleterms:{"class":[14,22],applic:6,base:[8,14,22],bye:0,command:7,commun:23,daemon:[8,14],definit:13,discoveri:[6,9,10,12,18,19,21,25],document:11,envelop:10,facil:12,factori:10,framework:6,gener:8,handl:23,hello:1,implement:[9,15],indic:11,line:7,match:[3,5,24],messag:[0,1,2,3,4,5,10,12,18,19],namespac:13,network:[8,14,22],nutshel:25,packag:11,parser:24,probe:[2,3],publish:15,qname:16,represent:[16,17,20],resolv:[4,5],scope:[17,24],semant:18,serial:[0,1,2,3,4,5,19],servic:[9,15,17,20],tabl:11,term:21,thread:22,udp:23,uri:24,util:7,wsdiscov:7,wspublish:7}})