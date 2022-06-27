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
"ControlBoardWrapperRemoteVariables_8h.html",
"FrameGrabberControlsDC1394__Forwarder_8cpp.html",
"IAudioGrabberSound_8cpp_source.html",
"ILocalization2DServerImpl_8cpp.html#ae71449b1cc6e6250b91f539153a7a0d3",
"ImageDraw_8h.html#ad94308a6d9384fec02b4e0c612a3b103",
"Image_8cpp.html#aefc62803b7b137dfd8e1a30a395d11ee",
"Log_8cpp.html#a0533bbc2534a2c8075e060896c9bd2d8",
"Math_8h.html#a585ffddfddd149bbccd95463ed6c87fa",
"NameConfig_8cpp.html",
"Param_8h.html",
"PortCore_8h.html",
"RemoteFrameGrabber_8h_source.html",
"ServerSerial_8cpp_source.html",
"TickDuration_8h.html",
"XMLReaderFileV1_8cpp.html#ae3a2e754423714331936dfcc35beddcd",
"changelog.html#yarp_3_6_series",
"classBayerCarrier.html#ac190eb85afe66c327a212b38f524d5c0",
"classControlBoardRemapper.html#ac27cfe3c39f1aef8634c4bb968bffbc1",
"classControlBoardWrapperPositionControl.html#a4b7c49294c8ebfe7704af11430eb4269",
"classDynamixelAX12FtdiDriver.html#ae63be369f61d81fb3bd9e536260bcfc3",
"classFakeBatteryService__getBatteryStatusString__helper_1_1Command.html#ab335f81e11658e9c10e59f09ca9300c9",
"classFakeBatteryService__setBatteryStatus__helper_1_1Reply.html#a2f76ff9c70f3f7f81c98f8835b57d513",
"classFakeFrameGrabber.html#a766bc67159870bc1aa78be480f61755e",
"classFakeMotionControl.html#a5a80dde42cc0d551465089c915cf1cf5",
"classFakeMotionControl.html#afe6c3938db892a2cc4c9fe8e26167fd4",
"classFrameGrabberCropper.html#af5b8150fa390d862dca20b3895a897ad",
"classFrameTransformStorageGetRPC__getTransformsRPC__helper.html#a7e61c380dad97bb38a9c536ac33da751",
"classH264Decoder.html#acf62c851a3e0554a63d4aa77c9d3edc5",
"classILocalization2DMsgs__get__localization__status__RPC__helper_1_1Command.html#ad39a52cfe421d97daa940319bfa535cd",
"classIMap2DMsgs__clear__all__locations__RPC__helper.html#a98c756216e90a87de3c793c208d2d5bd",
"classIMap2DMsgs__delete__path__RPC__helper_1_1Command.html#a510f61258a119d6016b83266d0c66899",
"classIMap2DMsgs__get__location__RPC__helper_1_1Reply.html#a02fd00dfef39515f27241c72f86512ac",
"classIMap2DMsgs__load__maps__collection__RPC__helper.html",
"classIMap2DMsgs__save__map__to__disk__RPC__helper_1_1Reply.html#a3dc3af459be0c2ac36f1d1a3a00becd7",
"classINavigation2DMsgs__apply__velocity__command__RPC__helper.html#a88aa5f7796ce6d44969fd97aaf0699ad",
"classINavigation2DMsgs__get__navigation__status__RPC__helper_1_1Command.html#a02f82438c76817296822693e862e2126",
"classINavigation2DMsgs__resume__navigation__RPC__helper_1_1Command.html#a72244f164445fa04961dc43372e44d7f",
"classLaserFromDepth.html#a533d3e5ebe543dad45011c433f484507",
"classMap2DStorage.html",
"classMjpegDecompression.html#af08e0d3502fbae6565578e7de43ecc39",
"classMpiCarrier.html#a4a0525ebbf8a4b9e951897d3f30606b5",
"classMultipleAnalogSensorsRemapper.html#ae133da83c0027c15a9ec52c6efa7c15d",
"classOdometry2D__nws__ros.html#a2a9f7c59ce8a7c3d0c1ead2d4c1f8486",
"classPoseStampedRosPublisher.html#a770a11b48953fb58a1ab407b46d91649",
"classRGBDSensorWrapper.html#a76d0804840929e9bd0d4c680e99324d4",
"classRemoteControlBoard.html#a27333ba222ce8e8df4198b9e3d06fb53",
"classRemoteFrameGrabber.html#afbf49a895ae299e88c00d3e1e1f2f9ea",
"classSDLJoypad.html#ad3bc3eb7206e1d8e379d6d47bff57bf6",
"classServerInertial.html#ac19ac3cd8319d5ab154bc50516eebea0",
"classTcpRosStream.html",
"classUnixSocketCarrier.html#a92f67f27d0ed523161bfa085332dc240",
"classYarpRunProcInfo.html#af636a40fc33928eb407e8eca63d5f91a",
"classfakeNavigation.html#a81677e88248025d41e173eb6693067ed",
"classreturn__get__current__position1.html#a7b3992e0d414770b5df981923adda7e5",
"classyarp_1_1dev_1_1AudioPlayerDeviceBase.html#a79a01565c04bc467408cb87f739f1ed7",
"classyarp_1_1dev_1_1DriverCreator.html#a2dccefbeee601ffa214fa700c9e5ee5f",
"classyarp_1_1dev_1_1IControlMode.html#a4b6c39d6c3d45901c29391b8dc12e1eb",
"classyarp_1_1dev_1_1IGazeControl.html#a47cdee9c32594f1be639f16793d3c14e",
"classyarp_1_1dev_1_1IPWMControlRaw.html#ae15be1037919f60186c49f77e6969e3f",
"classyarp_1_1dev_1_1ISixAxisForceTorqueSensors.html#a7dea3f62f7e0ffe764d47bce3f21a490",
"classyarp_1_1dev_1_1ImplementEncoders.html#a8e06b5a6b605c2e06f270df973ebc6c1",
"classyarp_1_1dev_1_1ImplementVelocityControl.html#a7d3d51b3b9e411c22b249f8a77bb06bc",
"classyarp_1_1dev_1_1Nav2D_1_1Map2DPath.html#aaf37c413c350a2b5bf6d81a7917bc4d4",
"classyarp_1_1dev_1_1StubImplPositionControlRaw.html#a335a617db4cde78e83928b8962c21ff9",
"classyarp_1_1manager_1_1BinaryExpParser.html#ae496dca2f9512439b5830b4a081a6d9c",
"classyarp_1_1manager_1_1GPU.html#ad6937cd161f74b2f770f97e49e52c4d7",
"classyarp_1_1manager_1_1Manager.html#ab82ebf2569be95d60c4c6010f2e13755",
"classyarp_1_1manager_1_1ResYarpPort.html#a09c2de7066c50dc1b6b12e9c12e266dd",
"classyarp_1_1math_1_1RandnScalar.html",
"classyarp_1_1os_1_1BufferedPort.html#a6273f7d63bdf255568956abd3f24cbf8",
"classyarp_1_1os_1_1Contact.html#ac3d3727f391b30b0af5f68c725802ca7",
"classyarp_1_1os_1_1ManagedBytes.html#a1d5a7a014e6635df10a88c1edcebe575",
"classyarp_1_1os_1_1Node_1_1Helper.html#a2653549de8bdfef0431b4e1cf5ecd6fc",
"classyarp_1_1os_1_1Port.html",
"classyarp_1_1os_1_1QosStyle.html#a579006f786ae71b1504b258c2b42b0ab",
"classyarp_1_1os_1_1RpcClient.html#ac68777d6f47c57835d9d92ae858f7f0b",
"classyarp_1_1os_1_1Thread.html",
"classyarp_1_1os_1_1YarpPlugin.html#a588d96b5eb651a3c010384e64a1bc10a",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#ac234ae086942de18afbb54aab696f33a",
"classyarp_1_1os_1_1impl_1_1LogPrivate.html#aaa5da5fc7a2961ba121a0b38d0c297eb",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#aff4cab8559d785d5b5d75bfc3d02447b",
"classyarp_1_1os_1_1impl_1_1StoreFloat32.html#a6b9b65a1e0d4195842247b457007581a",
"classyarp_1_1os_1_1impl_1_1TextCarrier.html#aee9473305c5be07d1ad7c0a5f380ccb8",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberControls__Forwarder.html#accf869b326613ecd0eb205cb62eded71",
"classyarp_1_1robotinterface_1_1experimental_1_1Robot.html#aed7a65064cbb1860b4a58ca7fccdd76c",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1AddDiagnostics.html#af51c19aa5ffd68e2e0e0c26db30536a9",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Point32.html#ac7f0edef3a2ed255ecadd58ea32dd3a1",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1TwistStamped.html#a3161ce4dfcf6a6a93750415fd7b6ccf0",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1Odometry.html#acfcd08991b7c62e236f9bd2eea8cae8a",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1JointState.html#a3918cd1c8b341a88ca1147234465afe1",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1PointCloud2.html#a57a097bf3e5d89a7fef2d71d8402e6ec",
"classyarp_1_1rosmsg_1_1shape__msgs_1_1SolidPrimitive.html#ae3bd200f0a5a0b5f5dfb2de1e91ce7b2",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int32.html#ae1702dd0d2c33f056bdc89578d750e29",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt64MultiArray.html#afe9b90af2459cf812223e74fb7d9ee9d",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1ImageMarker.html",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1MenuEntry.html#a3a88065603c1d444e7704a98cd7a2faf",
"classyarp_1_1sig_1_1ImageNetworkHeader.html",
"classyarp_1_1wire__rep__utils_1_1RosWireImage.html#a3902a459dd569392475364a3114615ef",
"compiler_8h.html#a8d7ecc41dd6ebcd05a3d1f834d759fc7",
"dir_65558b39c90f371363d1ee5a0680e663.html",
"experimental_2Robot_8h.html#a87ba0431cca19e1a8e3318f728b628b7",
"geometry__msgs_2TwistWithCovariance_8h.html",
"group__dev__impl__navigation.html#ga51615f6e2233890f024f7dc9c7b99d08",
"laserFromDepth_8cpp.html#af7e8592d0a634bd3642e9fd508ea8022",
"libYARP__sig_2src_2yarp_2sig_2Image_8h.html#a2e411d9f65992414d37bdcfec7f737b4a27d76c9893d80f63662832d3ed725fb7",
"namespacemembers_func_m.html",
"namespaceyarp_1_1dev.html#a85759cb5433501b4db008efb0cd400f3a942a1dcc72c4d9e4d17569e9b2447760",
"namespaceyarp_1_1os.html#ae0ae51936d9fca34f3fc1c0e2642cc01",
"namespaceyarp_1_1sig_1_1file.html#a12cac6c4573623f7e9d5cb56797de399aeaa33015a2d1399fd76c83abf5b3dba6",
"port_power_2ex0000_receiver_8cpp-example.html",
"rostypes_tutorial_continued.html#rostypes_tutorial_continued_sender",
"std__msgs_2Byte_8h.html",
"structMonitorLua.html#a06e50b5ab84bab115a36a95fe0b0721f",
"structswig__lua__var__info.html#aea961df3cc15877e8354cb535bef2c1e",
"structyarp_1_1profiler_1_1NetworkProfilerBasic_1_1ProcessInfo.html#ac6ee55201228b0614a60db9f6992680b",
"swigluarun_8h.html#a20c6437f49ae257857683ba0e7b2100f",
"trajectory__msgs_2JointTrajectoryPoint_8h.html",
"v2_3_68_1.html#autotoc_md163",
"v3_2_0.html",
"v3_5_0.html#autotoc_md761",
"yarp-v3_87-build_2src_2libYARP__conf_2src_2yarp_2conf_2api_8h.html#acfebdb44cda5e5eed2913bb1a2254276",
"yarp_2rosmsg_2sensor__msgs_2MagneticField_8h.html",
"yarp_2src_2libYARP__robotinterface_2src_2yarp_2robotinterface_2api_8h_source.html",
"yarp_rfmodule_tutorial.html#yarp_rfmodule_tutorial_code",
"ymm-types_8h.html#a269ad14d1e407b5db3db568f4d482696aa4827c0db39dc6fd537865b180b78e60"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';