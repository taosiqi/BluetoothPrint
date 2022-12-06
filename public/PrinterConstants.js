         // operation success
         var E_SUCCESS = 0;
         var E_INVALID_PARAMETER                = -1;
         var E_NO_ENOUGH_BUFFER                 = -2;
         var E_INVALID_MODEL_TYPE               = -3;
         var E_NOT_SUPPORT				        = -4;
         var E_PORT_NOT_OPEN				    = -5;
         var E_BAD_HANDLE                       = -6;
         var E_NOT_IMPLEMENTED                  = -7;
         var E_INVALID_MODEL                    = -8;
         var E_NOT_ENOUGH_MEMORY                = -9;
         var E_BASE                             = -100;
         // IO Error
         /* io setting error */
         var E_IO_ERROR                         = -300;
         var E_IO_INVALID_SETTING			    = -301; 
         var E_IO_NAME_TOO_LONG				    = -302;
         var E_IO_OS_VERSION_TOO_LOW		    = -304;
         var E_IO_INVALID_HANDLE			    = -308;
         var E_IO_PORT_NOT_OPEN                 = -309;
         var E_PORT_ALREADY_OPEN                = -310;
         /* io open error */
         var E_IO_PORT_OPEN_FAILED              = -311;
         /* io attr get/set error */
         var E_IO_GETATTR_ERROR				    = -312;
         var E_IO_SETATTR_ERROR                 = -313;
         /* io write error */
         var E_IO_WRITE_FAILED                  = -321;
         var E_IO_WRITE_TIMEOUT                 = -322;
         /* io read error */
         var E_IO_READ_FAILED                   = -331;
         var E_IO_READ_TIMEOUT                  = -332;
         /* io flush error */
         var E_IO_FLUSH_FAILED				    = -341;
         /* serial port error */
         var E_IO_SERIAL_INVALID_BAUDRATE	    = -351;
         var E_IO_SERIAL_INVALID_HANDSHAKE      = -352;
         // USB port error 
         var E_IO_INVALID_USB_PATH	            = -371;
         var E_IO_USB_DEVICE_NOT_FOUND	        = -372;
         var E_IO_USB_DEVICE_BUSY	            = -373;
         /* Extern LIBUSB error */
         var E_IO_LIBUSB_E_START	            = -1100;
         var E_IO_LIBUSB_E_END	                = -1200;
         /* Success (no error) */
         var E_LIBUSB_SUCCESS                   = -1101;
         /* Input/output error */
         var E_LIBUSB_ERROR_IO                  = -1102;
         /* Invalid parameter */
         var E_LIBUSB_ERROR_INVALID_PARAM       = -1103;
         /** Access denied (insufficient permissions) */
         var E_LIBUSB_ERROR_ACCESS              = -1104;
         /* No such device (it may have been disconnected) */
         var E_LIBUSB_ERROR_NO_DEVICE           = -1105;
         /* Entity not found */
         var E_LIBUSB_ERROR_NOT_FOUND           = -1106;
         /* Resource busy */
         var E_LIBUSB_ERROR_BUSY                = -1107;
         /* Operation timed out */
         var E_LIBUSB_ERROR_TIMEOUT             = -1108;
         /* Overflow */
         var E_LIBUSB_ERROR_OVERFLOW            = -1109;
         /* Pipe error */
         var E_LIBUSB_ERROR_PIPE                = -1110;
         /* System call interrupted (perhaps due to signal) */
         var E_LIBUSB_ERROR_INTERRUPTED         = -1111;
         /* Insufficient memory */
         var E_LIBUSB_ERROR_NO_MEM              = -1112;
         /* Operation not supported or unimplemented on this platform */
         var E_LIBUSB_ERROR_NOT_SUPPORTED       = -1113;
         /* Other error */
         var E_LIBUSB_ERROR_OTHER               = -1199;
 
         // Card - Encrypt Head Error
         // msr track
         var E_MSR_TRACK_NOT_READY			    = -401;
         // smard card
         var E_SMART_CARD_NOT_READY			    = -411;
         //encrypt head
         var E_EH_SET_ERROR				        = -501;
         var E_EH_DECRYPT_ERROR                 = -511;
 
 
         //Printer Command Class
         // first byte
         var C_ESC				                = 1;
         var C_TSC				                = 2;
         // second byte
         //status mode 2 : example PT541,PT562,PT1561
         var C_STAT_2			                = 0x0100;
         //status mode 3 : example TP 801/805/806
         var C_STAT_3			                = 0x0200;
         var C_USBADV                           = 0x1000;
         var C_CMDPKG                           = 0x2000;
         var C_UNKNOWN                          = -1;
         
         // usb ctl command
         var USB_CTRL_RESET                     = 1;
         var USB_CTRL_GET_STATUS                = 2;
         
         //GS Mode
         var GS_MODE                            = 0;
 
 
          //Text Align
          var ALIGNMENT_LEFT = 0;
          var ALIGNMENT_CENTER = 1;
          var ALIGNMENT_RIGHT = 2;
          var ALIGNMENT_TOP = 0;
          var ALIGNMENT_BOTTOM = 2;
  
          //BarCode Type
          var BARCODE_UPC_A = 65;
          var BARCODE_UPC_E = 66;
          var BARCODE_EAN13 = 67;
          var BARCODE_JAN13 = 67;
          var BARCODE_EAN8 = 68;
          var BARCODE_JAN8 = 68;
          var BARCODE_CODE39 = 69;
          var BARCODE_ITF = 70;
          var BARCODE_CODABAR = 71;
          var BARCODE_CODE93 = 72;
          var BARCODE_CODE128 = 73;
          var SYMBOL_STANDARD_PDF417 = 101;
          var SYMBOL_TRUNCATED_PDF417 = 102;
          var SYMBOL_QRCODE1 = 103;
          var SYMBOL_QRCODE2 = 104;
          //Cut Paper Mode
          var FULL_CUT = 0;
          var PARTIAL_CUT = 1;
          //PDF417 Code error correction level
          var PDF417_ERROR_SET_LEVEL = 48;
          var PDF417_ERROR_SET_RATIO = 49;
  
          var PDF417_ERROR_CORRECTION_LEVEL_0 = 48;
          var PDF417_ERROR_CORRECTION_LEVEL_1 = 49;
          var PDF417_ERROR_CORRECTION_LEVEL_2 = 50;
          var PDF417_ERROR_CORRECTION_LEVEL_3 = 51;
          var PDF417_ERROR_CORRECTION_LEVEL_4 = 52;
          var PDF417_ERROR_CORRECTION_LEVEL_5 = 53;
          var PDF417_ERROR_CORRECTION_LEVEL_6 = 54;
          var PDF417_ERROR_CORRECTION_LEVEL_7 = 55;
          var PDF417_ERROR_CORRECTION_LEVEL_8 = 56;
          
          //QR Code error correction level
          var QRCODE_ERROR_CORRECTION_LEVEL_L = 48;
          var QRCODE_ERROR_CORRECTION_LEVEL_M = 49;
          var QRCODE_ERROR_CORRECTION_LEVEL_Q = 50;
          var QRCODE_ERROR_CORRECTION_LEVEL_H = 51;
          //Symbol model
          var SYMBOL_MODEL_1 = 49;
          var SYMBOL_MODEL_2 = 50;
          //Text Font
          var TEXT_FONT_A = 0;
          var TEXT_FONT_B = 1;
          //Text Size
          var TEXT_SIZE_0WIDTH = 0;
          var TEXT_SIZE_1WIDTH = 16;
          var TEXT_SIZE_2WIDTH = 32;
          var TEXT_SIZE_3WIDTH = 48;
          var TEXT_SIZE_4WIDTH = 64;
          var TEXT_SIZE_5WIDTH = 80;
          var TEXT_SIZE_6WIDTH = 96;
          var TEXT_SIZE_7WIDTH = 112;
  
          var TEXT_SIZE_0HEIGHT = 0;
          var TEXT_SIZE_1HEIGHT = 1;
          var TEXT_SIZE_2HEIGHT = 2;
          var TEXT_SIZE_3HEIGHT = 3;
          var TEXT_SIZE_4HEIGHT = 4;
          var TEXT_SIZE_5HEIGHT = 5;
          var TEXT_SIZE_6HEIGHT = 6;
          var TEXT_SIZE_7HEIGHT = 7;
  
          // Print Text Styles
          var TEXT_NORMAL_MODE = 0;
          var TEXT_FONT_EMPHASIZED = 2;
          var TEXT_FONT_UNDERLINE_MODE = 4;
          var TEXT_FONT_REVERSE = 8;
          var TEXT_FONT_DH_MODE = 16;
          var TEXT_FONT_DW_MODE = 32;
          var TEXT_FONT_DW_DH_MODE = 48;
  
          // Print HRI Position 
          var BARCODE_HRI_NONE = 0;
          var BARCODE_HRI_ABOVE = 1;
          var BARCODE_HRI_BELOW = 2;
          var BARCODE_HRI_BOTH = 3;
          //Print HRI Font
          var BARCODE_HRI_FONT_A = 0;
          var BARCODE_HRI_FONT_B = 1;
          //Select print direction in page mode 
          var PRINT_DIRECTION_LEFT_TO_RIGHT = 0;
          var PRINT_DIRECTION_BOTTOM_TO_TOP = 1;
          var PRINT_DIRECTION_RIGHT_TO_LEFT = 2;
          var PRINT_DIRECTION_TOP_TO_BOTTOM = 3;
          //Bit Image Mode
          var BITIMAGE_8DOT_SINGLE_DENSITY = 0;
          var BITIMAGE_8DOT_DOUBLE_DENSITY = 1;
          var BITIMAGE_24DOT_SINGLE_DENSITY = 32;
          var BITIMAGE_24DOT_DOUBLE_DENSITY = 33;
          //Print Image Mode
          var PRINT_IMAGE_NORMAL		    = 0;
          var PRINT_IMAGE_DOUBLE_WIDTH	    = 1;
          var PRINT_IMAGE_DOUBLE_HEIGHT    = 2;
          var PRINT_IMAGE_QUADRUPLE        = 3;
  
          //Printer Status
          var STS_NORMAL = 0;
          var STS_PAPEREMPTY = 1;
          var STS_COVEROPEN = 2;
          var STS_PAPERNEAREND = 4;
          var STS_MSR_READY = 8;
          var STS_SMARTCARD_READY = 16;
          var STS_ERROR = 32;
          var STS_NOT_OPEN = 64;
          var STS_OFFLINE = 128;
          //Character Code Table
          var CHARACTERSET_DEFAULT         = 0;
          var CHARACTERSET_USA             = 437;
          var CHARACTERSET_MULTILINGUAL    = 850;
          var CHARACTERSET_PORTUGUESE      = 860;
          var CHARACTERSET_CANADIAN_FRENCH = 863;
          var CHARACTERSET_NORDIC          = 865;
          var CHARACTERSET_WPC1252         = 1252;
          var CHARACTERSET_CYRILLIC2       = 866;
          var CHARACTERSET_LATIN2          = 852;
          var CHARACTERSET_EURO            = 858;
  
          //Card Type
          var MSRCARDTYPE_NONE = 0;
          var MSRCARDTYPE_MAGNETICCARD = 1;
          var MSRCARDTYPE_SMARTCARD = 2;
          //MSR Read TrackNo Option
          var TRACK_FULL = 0;
          var TRACK_NO_1 = 1;
          var TRACE_NO_2 = 2;
          var TRACE_NO_3 = 3;
          var TRACE_NO_1_2 = 4;
          //Smart Card Operation
          var SMARTCARD_POWERDOWN = 17;
          var SMARTCARD_POWERUP = 18;
          var SMARTCARD_GETDATA = 19;
          var SMARTCARD_SENDDATA = 20;
          var SMARTCARD_APDU = 21;
          //CashDrawer
          var CASH_DRAWER_1 = 0;
          var CASH_DRAWER_2 = 1;
  
          /* Print Drawer Time Mode*/
          var DRAWER_ON_TIME_100   = 100;
          var DRAWER_ON_TIME_200   = 200;
          var DRAWER_ON_TIME_300   = 300;
          var DRAWER_ON_TIME_400   = 400;
          var DRAWER_ON_TIME_500   = 500;
          var DRAWER_ON_TIME_600   = 600;
          var DRAWER_ON_TIME_700   = 700;
          var DRAWER_ON_TIME_800   = 800;
          //Encrypt Head
          var EH_FIX = 0x30;
          var EH_DUKPT = 0x31;
          var EH_DISABLE = 0x30;
          var EH_ENABLE = 0x31;
          var EH_NONE = 0x30;
          var EH_3DES = 0x31;
          var EH_AES = 0x32;
 
 
         /* 1:  ESC Printers */
         /* TP Series Receipt Printers */
         var MODEL_TP801		                = 0x1001;    /* 3" Thermal Receipt Printer */
         var MODEL_TP805		                = 0x1002;    /* 3" Thermal Receipt Printer */
         var MODEL_TP806		                = 0x1003;    /* 3" Thermal Receipt Printer */
         var MODEL_DT210		                = 0x1006 ;   /* 3" Thermal Receipt Printer( Without Cutter) only for Dascom */
         /* PPT Series Receipt Printers */
         var MODEL_PPT2_A		                = 0x1011 ;   /* 2" Thermal Receipt Printer */
         var MODEL_PPT2_UR	                    = 0x1012 ;   /* 2" Thermal Receipt Printer */
         /* PPT  Dot-matrix Printers */
         var MODEL_PPTD3		                = 0x1021 ;   /* 3" Dot-matrix Printer */
         /* 11: Mobile Printers */
         var MODEL_MPT2     	                = 0x1101;    /* 2" Mobile Receipt Printer */
         var MODEL_MPT3                         = 0x1102;    /* 3" Mobile Receipt Printer */
         var MODEL_MLP2                         = 0x1103 ;   /* 2" Mobile Label Printer   */
         var MODEL_MPS3     	                = 0x1104 ;   /* 3" Mobile Receipt Printer */
         /* Mobile Dot-matrix Printers */
         var MODEL_MPD2     	                = 0x1131 ;   /* 2" Mobile Dot-matrix Printer */
         /* Mobile Receipt Printers with special fuctions */
         var MODEL_MPT_E2	                    = 0x1151;    /* 2" Mobile Receipt Printer with card reader */
         /* Mobile Office Printers */
         var MODEL_MPT8	                        = 0x1191;   /* MPT8 A4 Mobile Thermal Transfer Printer */
         /* 15: PT Control Board */
         var MODEL_PT541                        = 0x1541;   /* 2" Receipt Print Control Board */
         var MODEL_PT562                        = 0x1562;   /* 2" Label Print Control Board */
 
         /* 2: Printers (ZPL Support) */
 
         /* 9: Other Printers */
         /* 91: TSC Label Printers */
         var MODEL_LP1062   	                = 0x9101;    /* 106mm Thermal Label Printer, Support TSC  */
         /* 96~99: Special Printers */
         var MODEL_LPQ58    	                = 0x9601;   /* 2" Thermal Receipt/Label Printer, Support ESC & TSC */
         var MODEL_LPQ80    	                = 0x9602;   /* 3" Thermal Receipt/Label Printer, Support ESC & TSC  */
 
         var MODEL_UNKNOWN                      = 0;
         var MODEL_INVALID                      = -1;
 
         var MODEL_MAX                          = 31;