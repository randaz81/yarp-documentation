/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "YARP", "index.html", [
    [ "Welcome to YARP", "index.html", "index" ],
    [ "YARP Modules", "modules.html", "modules" ],
    [ "Other Pages", "usergroup0.html", [
      [ "How to add a device to YARP", "add_a_device.html", [
        [ "What is a device driver in YARP?", "add_a_device.html#dev2-howto-intro", null ],
        [ "Step by step instructions", "add_a_device.html#dev2-howto-steps", null ]
      ] ],
      [ "Audio in YARP", "AudioDoc.html", [
        [ "yarp::sig::Sound data type", "AudioDoc.html#datatype", null ],
        [ "yarp devices", "AudioDoc.html#devices_general", null ],
        [ "Physical device drivers", "AudioDoc.html#driver_devices", null ],
        [ "wrapper devices", "AudioDoc.html#devices_wrappers", null ],
        [ "Examples", "AudioDoc.html#AudioExamples", null ],
        [ "Limitations", "AudioDoc.html#AudioLimitations", null ]
      ] ],
      [ "mpi carriers", "carrier_config_mpi.html", [
        [ "Using the MPI carriers", "carrier_config_mpi.html#carrier_config_mpi_usage", null ],
        [ "What is MPI?", "carrier_config_mpi.html#carrier_config_mpi_intro", null ],
        [ "Benefits of using MPI", "carrier_config_mpi.html#carrier_config_mpi_benefits", null ],
        [ "Sideeffects of using MPI", "carrier_config_mpi.html#carrier_config_mpi_sideeffects", null ],
        [ "Compiling YARP with MPI support", "carrier_config_mpi.html#carrier_config_mpi_compliation", null ],
        [ "Open source MPI implementations", "carrier_config_mpi.html#carrier_config_mpi_implementations", null ]
      ] ],
      [ "Using the YARP companion utility", "companion_use.html", [
        [ "YARP companion basics", "companion_use.html#companion_basics", null ],
        [ "YARP companion advanced", "companion_use.html#companion_advanced", null ]
      ] ],
      [ "YARP Dependencies", "dependencies.html", [
        [ "Required Dependencies", "dependencies.html#dependencies_required", [
          [ "The ACE Library", "dependencies.html#dependencies_ace", [
            [ "The general approach to installing ACE", "dependencies.html#dependencies_ace_install", null ],
            [ "Compiling ACE on UNIX", "dependencies.html#dependencies_ace_install_unix", null ],
            [ "Compiling ACE on Windows", "dependencies.html#ace_windows", null ]
          ] ],
          [ "Eigen", "dependencies.html#dependencies_eigen", [
            [ "Linux", "dependencies.html#dependencies_eigen_linux", null ],
            [ "macOS", "dependencies.html#dependencies_eigen_macos", null ],
            [ "Windows", "dependencies.html#dependencies_eigen_windows", null ]
          ] ]
        ] ],
        [ "GUI Dependencies", "dependencies.html#dependencies_gui", [
          [ "Qt5 (Recommended)", "dependencies.html#dependencies_qt5", [
            [ "Linux", "dependencies.html#dependencies_qt5_Linux", [
              [ "Debian/Ubuntu", "dependencies.html#dependencies_qt5_debian_ubuntu", null ],
              [ "Others", "dependencies.html#dependencies_qt5_linux_others", null ]
            ] ],
            [ "Windows", "dependencies.html#dependencies_qt5_windows", null ],
            [ "macOS", "dependencies.html#dependencies_qt5_macos", null ]
          ] ]
        ] ]
      ] ],
      [ "Device Drivers How-To", "dev-how-to.html", [
        [ "What is a device driver in YARP?", "dev-how-to.html#dev-howto-intro", null ],
        [ "Adding a device driver to YARP_dev", "dev-how-to.html#dev-howto-lib", null ],
        [ "Adding a device driver factory", "dev-how-to.html#dev-howto-factory", null ],
        [ "Getting things compiled", "dev-how-to.html#dev-howto-compile", null ],
        [ "Hey, why not automate all this?", "dev-how-to.html#dev-howto-wow", null ]
      ] ],
      [ "FrameTransform: possibile server-client configurations", "Fts_ftc_config.html", [
        [ "Description", "Fts_ftc_config.html#Fts_ftc_config_intro", null ],
        [ "fts_full_ros compatible configurations", "Fts_ftc_config.html#fts_full_ros", null ],
        [ "fts_yarp_only compatible configurations", "Fts_ftc_config.html#fts_yarp_only", null ],
        [ "Peculiar client to client configuration", "Fts_ftc_config.html#client_to_client", null ]
      ] ],
      [ "User Manual", "manual.html", [
        [ "YARP User Manual", "manual.html#manual_intro", null ]
      ] ],
      [ "User Manual Title", "manual_title.html", null ],
      [ "Software for Humanoid Robots: The YARP Approach", "note_yarp_philosophy.html", [
        [ "One processor is never enough.", "note_yarp_philosophy.html#philosophy_many", null ],
        [ "Modularity.", "note_yarp_philosophy.html#philosophy_module", null ],
        [ "Minimal interference.", "note_yarp_philosophy.html#philosophy_interfere", null ],
        [ "Stopping hurts.", "note_yarp_philosophy.html#philosophy_stopping", null ],
        [ "Humility helps.", "note_yarp_philosophy.html#philosophy_humility", null ],
        [ "Exploit diversity.", "note_yarp_philosophy.html#philosophy_diversity", null ]
      ] ],
      [ "Using port monitors for arbitrating multiple connections", "arbitration.html", [
        [ "Description", "arbitration.html#arbitration_desc", null ],
        [ "Requirements", "arbitration.html#arbitration_req", null ],
        [ "Running the example", "arbitration.html#arbitration_running", null ],
        [ "Scripts", "arbitration.html#arbitration_scripts", [
          [ "ball_monitor.lua", "arbitration.html#arbitration_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration.html#arbitration_line_monitor", null ],
          [ "sel_monitor.lua", "arbitration.html#arbitration_sel_monitor", null ]
        ] ]
      ] ],
      [ "An example of using port arbitrator with time events", "arbitration_tevent.html", [
        [ "Description", "arbitration_tevent.html#arbitration_tevent_desc", null ],
        [ "Requirements", "arbitration_tevent.html#arbitration_tevent_req", null ],
        [ "Running the example", "arbitration_tevent.html#arbitration_tevent_running", null ],
        [ "Scripts", "arbitration_tevent.html#arbitration_tevent_scripts", [
          [ "ball_monitor.lua", "arbitration_tevent.html#arbitration_tevent_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration_tevent.html#arbitration_tevent_line_monitor", null ]
        ] ]
      ] ],
      [ "An example of using the portmonitor object at the both sides of a connection to encode and decode data", "coder_decoder.html", [
        [ "Description", "coder_decoder.html#coder_decoder_desc", null ],
        [ "Requirements", "coder_decoder.html#coder_decoder_req", null ],
        [ "Running the example", "coder_decoder.html#coder_decoder_running", null ],
        [ "Scripts", "coder_decoder.html#coder_decoder_scripts", [
          [ "codec.lua", "coder_decoder.html#coder_decoder_codec", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify image data", "image_modification.html", [
        [ "Description", "image_modification.html#image_modification_desc", null ],
        [ "Requirements", "image_modification.html#image_modification_req", null ],
        [ "Running the example", "image_modification.html#image_modification_running", null ],
        [ "Scripts", "image_modification.html#image_modification_scripts", [
          [ "img_modifier.lua", "image_modification.html#image_modification_img_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use C++ and DLLS to modify incoming data in an input port", "simple_dll.html", [
        [ "Description", "simple_dll.html#simple_dll_desc", null ],
        [ "Requirements", "simple_dll.html#simple_dll_req", null ],
        [ "Running the example", "simple_dll.html#simple_dll_running", null ],
        [ "Code Samples", "simple_dll.html#simple_dll_sample", [
          [ "SimpleMonitorObject.h", "simple_dll.html#simple_dll_sample_h", null ],
          [ "SimpleMonitorObject.cpp", "simple_dll.html#simple_dll_sample_cpp", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify incoming data in an input port", "simple_modification.html", [
        [ "Description", "simple_modification.html#simple_modification_desc", null ],
        [ "Requirements", "simple_modification.html#simple_modification_req", null ],
        [ "Running the example", "simple_modification.html#simple_modification_running", null ],
        [ "Scripts", "simple_modification.html#simple_modification_scripts", [
          [ "bot_modifier.lua", "simple_modification.html#simple_modification_bot_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to create a new data type in a port", "type_modification.html", [
        [ "Description", "type_modification.html#type_modification_desc", null ],
        [ "Requirements", "type_modification.html#type_modification_req", null ],
        [ "Running the example", "type_modification.html#type_modification_running", null ],
        [ "Scripts", "type_modification.html#type_modification_scripts", [
          [ "type_modifier.lua", "type_modification.html#type_modification_type_modifier", null ]
        ] ]
      ] ],
      [ "README", "md_doc_release_yarp_3_7_README.html", null ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP os library", "yarp_os.html", "yarp_os" ],
      [ "YARP robotinterface XML files", "yarp_robotinterface_xml_config_files.html", [
        [ "A minimal XML file", "yarp_robotinterface_xml_config_files.html#yarp_robotinterface_xml_config_files_basics", null ],
        [ "Reference documentation of XML format.", "yarp_robotinterface_xml_config_files.html#yarp_config_file_reference", [
          [ "robot Element", "yarp_robotinterface_xml_config_files.html#robot_element", null ],
          [ "devices Element", "yarp_robotinterface_xml_config_files.html#devices_element", null ],
          [ "device Element", "yarp_robotinterface_xml_config_files.html#device_element", null ],
          [ "group Element", "yarp_robotinterface_xml_config_files.html#group_element", null ],
          [ "param Element", "yarp_robotinterface_xml_config_files.html#param_element", null ],
          [ "action Element", "yarp_robotinterface_xml_config_files.html#action_element", null ]
        ] ]
      ] ],
      [ "Deprecated List", "deprecated.html", null ],
      [ "Todo List", "todo.html", null ]
    ] ],
    [ "API Documentation", "usergroup1.html", [
      [ "Namespace List", "namespaces.html", [
        [ "Namespace List", "namespaces.html", "namespaces_dup" ],
        [ "Namespace Members", "namespacemembers.html", [
          [ "All", "namespacemembers.html", "namespacemembers_dup" ],
          [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
          [ "Variables", "namespacemembers_vars.html", null ],
          [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
          [ "Enumerations", "namespacemembers_enum.html", null ],
          [ "Enumerator", "namespacemembers_eval.html", null ]
        ] ]
      ] ],
      [ "Class List", "annotated.html", [
        [ "Class List", "annotated.html", "annotated_dup" ],
        [ "Class Index", "classes.html", null ],
        [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
        [ "Class Members", "functions.html", [
          [ "All", "functions.html", "functions_dup" ],
          [ "Functions", "functions_func.html", "functions_func" ],
          [ "Variables", "functions_vars.html", "functions_vars" ],
          [ "Typedefs", "functions_type.html", "functions_type" ],
          [ "Enumerations", "functions_enum.html", null ],
          [ "Enumerator", "functions_eval.html", null ],
          [ "Related Functions", "functions_rela.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ],
        [ "File Members", "globals.html", [
          [ "All", "globals.html", "globals_dup" ],
          [ "Functions", "globals_func.html", "globals_func" ],
          [ "Variables", "globals_vars.html", "globals_vars" ],
          [ "Typedefs", "globals_type.html", "globals_type" ],
          [ "Enumerations", "globals_enum.html", null ],
          [ "Enumerator", "globals_eval.html", null ],
          [ "Macros", "globals_defs.html", "globals_defs" ]
        ] ]
      ] ],
      [ "Examples", "examples.html", "examples" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"",
"CameraVocabs_8h.html#ab1fa0904eb76a0026ed75c91b597167a",
"ControlBoardWrapperTorqueControl_8h.html",
"FrameGrabberControlsDC1394__Responder_8cpp_source.html",
"IAudioRender_8h.html",
"ILocalization2D_8cpp_source.html",
"ImageDraw_8h_source.html",
"ImplementAmplifierControl_8h.html",
"Log_8cpp.html#a6f699060902f800f12aaae150f3a708e",
"Math_8h.html#a76fe6abbc565fe5f10f29e78f2a36be9",
"NameServerContainer_8h_source.html",
"Pcl_8h_source.html",
"PortMonitor_8h_source.html",
"RgbdSensor__nws__ros_8h.html",
"ShmemHybridStream_8cpp.html",
"TypedReader_8h.html",
"YarpLoggerFiles_8cpp.html#aaee450e70efbae05dac31a22c2970f78",
"classAnalogSensorClient.html#a695341518106b7f08c271176595a91c2",
"classBoschIMU.html#a4d70a1cdf4ec4085f11828eca2806630",
"classControlBoardRemapperBuffers.html#ad5dbd8517d1e1c64b0d5d38c55a5ceff",
"classControlBoardWrapperTorqueControl.html",
"classFakeAnalogSensor.html#a9582477bfbc87ac7836bc5ce67d339d4",
"classFakeBatteryService__getBatteryStatus__helper_1_1Reply.html#a2cbe0d2486837243249407d84c8fd54a",
"classFakeBatteryService__setBatteryVoltage__helper.html#a25fc4221eb398f80affca65b9eb27676",
"classFakeFrameGrabber.html#aff4ecdb37f6a383fcd66c586e67cbc24",
"classFakeMotionControl.html#a79a731138a75cba42e09c00571260ada",
"classFakePositionSensor.html#a80e4af21163d181ecf06bdee08a6f315",
"classFrameGrabber__nws__yarp.html#a2f3eb37530eed1855e6c2871527f026d",
"classFrameTransformStorageSetRPC__clearAllRPC__helper.html#ac775a9fd640509c0e754e89bc46179f9",
"classHumanCarrier.html#a057c2597e98aeb8baef45cb718d01ccb",
"classILocalization2DMsgs__set__initial__pose1__RPC__helper_1_1Reply.html#a7d734b39299e38e08eb77f0a26054230",
"classIMap2DMsgs__clear__all__maps__RPC__helper_1_1Command.html#a8bf9d81e3e49f0371072c3a332aa6cb0",
"classIMap2DMsgs__enable__maps__compression__RPC__helper_1_1Command.html#ae3a8cc69fa49a94d7bcd74f6977c1777",
"classIMap2DMsgs__get__map__RPC__helper.html#a32426762b1f779d42d6012766838f8da",
"classIMap2DMsgs__remove__map__RPC__helper.html#a55ca3df831aa72478e42ee1d5d5f35cc",
"classIMap2DMsgs__store__area__RPC__helper.html#a38f7a13cbb3998b61fe507e826912678",
"classINavigation2DMsgs__get__absolute__location__of__current__target__RPC__helper.html#af7838f91e0b09c8a18f9f9cb41630d3d",
"classINavigation2DMsgs__get__relative__location__of__current__target__RPC__helper_1_1Reply.html",
"classINavigation2DMsgs__stop__navigation__RPC__helper_1_1Reply.html#a9ebd40114fa66a8f048429c0cfdd8c9c",
"classLaserFromPointCloud.html#a22c37f34b22510122d21e38adfd43795",
"classMap2DStorage.html#a8c0b77727528b5e5f9b11988e3bf76eb",
"classMobileBaseVelocityControlRPC__applyVelocityCommandRPC__helper.html#ab051e0df5e465d12f922362632cc3c8e",
"classMpiP2PCarrier.html#a4fe3ae8c556d1d1b200c405e620e0d47",
"classNavigation2D__nwc__yarp.html#a3c1cc184c7b3625cb192a3e56e3a0836",
"classOpenCVGrabber.html#a68b6bc542b38f0c6bb978492171e939f",
"classPropertyItem.html",
"classRPCMessagesParser.html",
"classRemoteControlBoard.html#a5aebc9ee70700f8960d091ae2d924bba",
"classRgbdSensor__nws__yarp.html#a28c4d50ab1c759dc699702e9d1eb6a17",
"classSensorMetadata.html#a2cc402226418a12515f9b755fccd722c",
"classShmemInputStreamImpl.html",
"classTransformClient.html#a8f78757b0becdc845e0fbd1e3b5680b9",
"classVirtualAnalogWrapper.html#a8c1c131b53d5df9fa36b25f5d0b93e20",
"classdepthCameraDriver.html#a90a86e16ee8f88851b361a58098713e2",
"classlaserHokuyo.html#a5efc09294a1d535ad5b935f703af872b",
"classreturn__get__locations__list.html#a939dd2c49beacce2a269b4637418825b",
"classyarp_1_1dev_1_1CanMessage.html#af92d98a4d01cd5a22c2cb13343af235d",
"classyarp_1_1dev_1_1IAnalogSensor.html#af2f4a0bcb759c98ce40bd7d32b836fb9",
"classyarp_1_1dev_1_1IEncodersRaw.html#ae82df2fd84ada52264ce7e787a7a46c8",
"classyarp_1_1dev_1_1IImpedanceControlRaw.html#a9c1edf24f60d23489ef036a88b64b534",
"classyarp_1_1dev_1_1IPositionControlRaw.html#a2c842e6331feebd294c083f6f857622c",
"classyarp_1_1dev_1_1IVelocityControl.html#a9ffbe00295e1c9a8eacdc1c0b85058a2",
"classyarp_1_1dev_1_1ImplementMotor.html#ab9236ce7304e74e706701832b29d7c1c",
"classyarp_1_1dev_1_1Map2DAreaData.html#ac4a96b0b600722629abe1e32f9bb55f9",
"classyarp_1_1dev_1_1OdometryData.html#a1a7ecb60955de0602f82f7e8fed34afa",
"classyarp_1_1dev_1_1impl_1_1FixedSizeBuffersManager.html#a3035644d89849754313a99ede9407867",
"classyarp_1_1manager_1_1Connecting.html#a52b98b64789e7d9359c5a06561d58214",
"classyarp_1_1manager_1_1InputData.html#a859a5c567d5b188df25f8df97191a74f",
"classyarp_1_1manager_1_1Module.html#acfff8a6eb71a92ae6dc35e5ad87c7a69",
"classyarp_1_1manager_1_1TempLoader.html#a0e4dc34b9c986a85601d5ecce6928a13",
"classyarp_1_1os_1_1AbstractCarrier.html#a08dd254c256af064decb3dd24bf45ca2",
"classyarp_1_1os_1_1Carrier.html#aed86e152b5a633d34060b095871f38f9",
"classyarp_1_1os_1_1Event.html#a4ba35fffb6602ba68fb731412f1dd9ce",
"classyarp_1_1os_1_1NameSpace.html",
"classyarp_1_1os_1_1NullConnectionReader.html#a23091744ff51ba211d3cf005ec861200",
"classyarp_1_1os_1_1PortReaderBufferBase.html#a5ec35d1dc06bba74a157125c58d4eb6c",
"classyarp_1_1os_1_1ResourceFinder.html#ae14acb968173161f40f2588466006c98",
"classyarp_1_1os_1_1StringInputStream.html#aa0c7ed5addbf730eb3c00ecff7f22513",
"classyarp_1_1os_1_1Value.html#a629d18a9c21f91d7d1ae13a6f377c99b",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a0387cb1f74b47bdb52f21f4bb86a20db",
"classyarp_1_1os_1_1impl_1_1HttpTwoWayStream.html#a7cc19371c8d902a23af40435ebece817",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a3aa8f3a47e0503f0b64bf5eb5ab51442",
"classyarp_1_1os_1_1impl_1_1Storable.html#a3e3d3769ef8be524c405583f98c004e3",
"classyarp_1_1os_1_1impl_1_1StoreVocab32.html#a7dbbb6aaa35f8190c0b3894c6cca7982",
"classyarp_1_1profiler_1_1graph_1_1Vertex.html#afab89afd724f1b07b1aaad6bdc61c47a",
"classyarp_1_1robotinterface_1_1RobotInterfaceDTD.html#a33ff120778ff9aa33be0e56a5b2923b2",
"classyarp_1_1rosmsg_1_1TickTime.html#a8f71a657ca5f3cc7c6e71e0f16b0617b",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1AccelWithCovarianceStamped.html#a7fa70842ea8671cd609332a3cd701a8f",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Quaternion.html#a80f58a97cf444a7fce3529985210969c",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1GetPlanReply.html#a1dcae9916b65bb980204a64c50b02d45",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1CompressedImage.html#afbc7dfee389aabe11579a8b05387a6f7",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1MultiEchoLaserScan.html#a69ea6826f4d2fe2c12ef828c769872ef",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1TimeReference.html#a632b57d80e930d4123d058ddb1969cc3",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Float64.html#ae9901cb08f4d551e69c2911d972d784d",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt16.html#adef26c0ef90be99842874986ea874f9a",
"classyarp_1_1rosmsg_1_1tf_1_1tfMessage.html#a74902ccf61da868e1e79b6b4b99e8140",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerUpdate.html#a563ef1da0054432e07631d4b699de507",
"classyarp_1_1serversql_1_1impl_1_1SubscriberOnSql.html#af25bfe1c4de2441bb4ca19442bf6e3b9",
"classyarp_1_1sig_1_1Sound.html#aee9e6dc7fec0feb87f5a9821325d7f41",
"classyarp_1_1yarpLogger_1_1LoggerEngine.html#a956b96c103249dba92f243d50a992c8c",
"dir_1484064d4985e4c5f34c8747901d1d26.html",
"dirs_8h.html#a30f6c4aa724d0511c1bb8cc8e7ff4afd",
"functions_type_u.html",
"globals_o.html",
"index.html#yarp_guis",
"libYARP__os_2src_2yarp_2os_2Time_8h.html#ae0ae51936d9fca34f3fc1c0e2642cc01af9415814136532c3df4d217d37fc9498",
"namespaceactionlib__msgs.html#ada4ed7184949c3580c1977cf22fce592",
"namespaceyarp_1_1conf_1_1dirs.html#af65a3f1f3d8fdc63948913570fd64f8c",
"namespaceyarp_1_1math.html#a6c130b236e4f64c43cc905e29fa6dffa",
"namespaceyarp_1_1sig.html#ac143e7160c4dfde2e47ecf07f59e9716a6125feee7e5d10d03c8d42d8bd9ac935",
"os_2Run_8h.html",
"rosPixelCode_8h.html#a029836b3bf523a5c694effc2296b2311",
"sensor__msgs__SetCameraInfoReply_8h.html",
"structFrameTransformContainer_1_1Iterator.html#a658e01eafeff4b402fed900575c19fdd",
"structnet__destination__mgr.html#a98e1d8d6f989c50e9509620aa34098f9",
"structyarp_1_1os_1_1SystemInfo_1_1ProcessorInfo.html#aae5efbd6370be17726719b232a38f3bf",
"structyarp_1_1sig_1_1PixelRgbInt.html#a4ee4462e3edc8b4b90485e5ca11fe74f",
"tf2__msgs__TF2Error_8h.html",
"v2_3_68.html#autotoc_md107",
"v3_0_1.html#autotoc_md346",
"v3_4_6.html#autotoc_md667",
"visualization__msgs__MarkerArray_8h_source.html",
"yarp_2rosmsg_2nav__msgs_2MapMetaData_8h.html",
"yarp_2rosmsg_2visualization__msgs_2InteractiveMarkerPose_8h.html#a2b6eb22bc31c441feeaa9d8d4ea1dc64",
"yarp_pointcloud.html#general_usage_point_cloud",
"yarpmotorgui.html#yarpmotorgui_intro"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';