(function () {
  'use strict';

  var OS_GROUPS = [{
    "family": "windows",
    "os": "Windows XP",
    "hint": "4 Editionen",
    "multiEdition": true,
    "editions": [{
        "edition": "Home",
        "downloads": [{
            "variant": "RTM",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPHomeRTM.iso"
        }, {
            "variant": "SP1",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPHomeSP1.iso"
        }, {
            "variant": "SP2",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPHomeSP2.iso"
        }, {
            "variant": "SP3",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPHomeSP3.iso"
        }],
        "kind": "choice"
    }, {
        "edition": "Professional",
        "downloads": [{
            "variant": "RTM",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPProRTM.iso"
        }, {
            "variant": "SP1",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPProSP1.iso"
        }, {
            "variant": "SP2",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPProSP2.ISO"
        }, {
            "variant": "SP3",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPProSP3.iso"
        }],
        "kind": "choice"
    }, {
        "edition": "Starter",
        "downloads": [{
            "variant": "SP2",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPStartSP2.iso"
        }, {
            "variant": "SP3",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPStartSP3.iso"
        }],
        "kind": "choice"
    }, {
        "edition": "Professional x64",
        "downloads": [{
            "variant": "RTM",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPProX64.iso"
        }, {
            "variant": "SP2",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WinXPAllInOne/WinXPProX64SP2.iso"
        }],
        "kind": "choice"
    }]
}, {
    "family": "windows",
    "os": "Windows Vista",
    "hint": "3 Editionen",
    "multiEdition": true,
    "editions": [{
        "edition": "Standard",
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-vista-all-versions-rtm-english/en_windows_vista_x86_dvd_x12-34293.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-vista-all-versions-rtm-english/en_windows_vista_x64_dvd_x12-40712.iso"
        }],
        "kind": "choice"
    }, {
        "edition": "Business N",
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-vista-all-versions-rtm-english/en_windows_vista_business_n_x86_dvd_vl_x13-21533.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-vista-all-versions-rtm-english/en_windows_vista_business_n_x64_dvd_vl_x13-21545.iso"
        }],
        "kind": "choice"
    }, {
        "edition": "Business",
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-vista-all-versions-rtm-english/en_windows_vista_business_x86_dvd_vl_x13-13415.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-vista-all-versions-rtm-english/en_windows_vista_business_x64_dvd_vl_x13-13435.iso"
        }],
        "kind": "choice"
    }]
}, {
    "family": "windows",
    "os": "Windows 7",
    "hint": "3 Editionen",
    "multiEdition": true,
    "editions": [{
        "edition": "Home Premium",
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/en_windows_7_home_premium_with_sp1_x86_dvd_u_676701_202303/en_windows_7_home_premium_with_sp1_x86_dvd_u_676701.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/20230422_20230422_1429/Windows%207%20Home%20Premium.iso"
        }],
        "kind": "choice"
    }, {
        "edition": "Professional",
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-7-professional_202008/Windows%207%20Professional.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/20230422_20230422_1429/Windows%207%20Professional.iso"
        }],
        "kind": "choice"
    }, {
        "edition": "Ultimate",
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-7-ultimate-32-bit-original/Windows%207%20Ultimate%2032-bit%20%5BOriginal%5D.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/20230422_20230422_1429/Windows%207%20Ultimate.iso"
        }],
        "kind": "choice"
    }]
}, {
    "family": "windows",
    "os": "Windows 8.1",
    "hint": "x86 · x64",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/win-8.1/Win8.1_EnglishInternational_x32.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/win-8.1/Win8.1_EnglishInternational_x64.iso"
        }],
        "kind": "choice"
    }]
}, {
    "family": "windows",
    "os": "Windows 10 22H2",
    "hint": "x86 · x64",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "x86",
            "arch": "x86 (32-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-10-22h2-isos/Win10_22H2_English_x86.iso"
        }, {
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-10-22h2-isos/Win10_22H2_English_x64.iso"
        }],
        "kind": "choice"
    }]
}, {
    "family": "windows",
    "os": "Windows 11 24H2",
    "hint": "x64 · ARM64",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "x64",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-11-24h2-iso_202501/Win11_24H2_English_x64.iso"
        }, {
            "variant": "ARM64",
            "arch": "ARM64",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-11-24h2-arm64-iso/Win11_24H2_English_Arm64.iso"
        }],
        "kind": "choice"
    }]
}, {
    "family": "server",
    "os": "Windows Server 2012",
    "hint": "x64 (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/WindowsServer2012x64USA/HRM_SSS_X64FRE_EN-US_DV5.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "server",
    "os": "Windows Server 2012 R2",
    "hint": "x64 (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/en_windows_server_2012_r2_x64_dvd_27079461/en_windows_server_2012_r2_x64_dvd_2707946.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "server",
    "os": "Windows Server 2016",
    "hint": "x64 (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/en_windows_server_2016_x64_dvd_9327751/en_windows_server_2016_x64_dvd_9327751.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "server",
    "os": "Windows Server 2019",
    "hint": "x64 (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/en-us_windows_server_2019_x64_dvd_f9475476/en-us_windows_server_2019_x64_dvd_f9475476.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "server",
    "os": "Windows Server 2022",
    "hint": "x64 (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-server-2022/winserver22-en.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "server",
    "os": "Windows Server 2025",
    "hint": "x64 (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "x64 (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/windows-server-2025-iso/en-us_windows_server_2025_updated_march_2025_x64_dvd_e24d2ee5.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.0 Cheetah",
    "hint": "PowerPC",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/osx_100_4k78_install/osx_100_4k78_install.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.1 Puma",
    "hint": "PowerPC",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/mac-os-x-puma/Mac%20OS%20X%20Puma%20Build%2010.1.5G64/Mac%20OS%20X%20Puma.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.2 Jaguar",
    "hint": "2 Disks",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "Disk 1",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/apple-mac-os-x-10.2.0-build-6c115/disk1.iso"
        }, {
            "variant": "Disk 2",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/apple-mac-os-x-10.2.0-build-6c115/disk2.iso"
        }],
        "kind": "disks"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.3 Panther",
    "hint": "3 Disks",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "Disk 1",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/mac-os-x-panther-10.3/Apple%20Mac%20OS%20X%2010.3.0%20-%20Disk%201.iso"
        }, {
            "variant": "Disk 2",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/mac-os-x-panther-10.3/Apple%20Mac%20OS%20X%2010.3.0%20-%20Disk%202.iso"
        }, {
            "variant": "Disk 3",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/apple-mac-os-x-10.2.0-build-6c115/disk2.iso"
        }],
        "kind": "disks"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.4 Tiger",
    "hint": "PowerPC · Intel",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "PowerPC",
            "arch": "PowerPC",
            "provider": "Archive.org",
            "url": "https://archive.org/download/mac-os-x-10.4-tiger-retail-dvd/Mac%20OS%20X%2010.4%20Tiger%20Retail%20DVD.iso"
        }, {
            "variant": "Intel",
            "arch": "Intel",
            "provider": "Archive.org",
            "url": "https://archive.org/download/macosxtiger/Mac%20OS%20X%2010.4%20Tiger.iso"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.5 Leopard",
    "hint": "PowerPC & Intel (Universal)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "PowerPC & Intel (Universal)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/gcpd-apple_macosxleopard_9a581_dvd/leopard_9a581_userdvd.dmg"
        }],
        "kind": "single"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.6 Snow Leopard",
    "hint": "Intel (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/mac-os-x-10.6-snow-leopard-retail/Mac_OS_X_10.6_Snow_Leopard_Retail.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.7 Lion",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/mac-os-x-lion-10.7.5/Mac%20OS%20X%20Lion%2010.7.5.iso"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Apple.com",
            "url": "https://updates.cdn-apple.com/2021/macos/041-7683-20210614-E610947E-C7CE-46EB-8860-D26D71F0D3EA/InstallMacOSX.dmg"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.8 Mountain Lion",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/install-esd-os-x-mountain-lion-10.8.5/InstallESD---OS%20X%20Mountain%20Lion%2010.8.5-.iso"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Apple.com",
            "url": "https://updates.cdn-apple.com/2021/macos/031-0627-20210614-90D11F33-1A65-42DD-BBEA-E1D9F43A6B3F/InstallMacOSX.dmg"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.9 Mavericks",
    "hint": "Intel (64-Bit)",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/os-x-mavericks-10.9.5/OS%20X%20Mavericks%2010.9.5.iso"
        }],
        "kind": "single"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.10 Yosemite",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/os-x-yosemite_202103/Install%20OS%20X%20Yosemite.zip"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Apple.com",
            "url": "http://updates-http.cdn-apple.com/2019/cert/061-41343-20191023-02465f92-3ab5-4c92-bfe2-b725447a070d/InstallMacOSX.dmg"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.11 El Capitan",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/install-os-x-el-capitan/InstallMacOSX.dmg"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Apple.com",
            "url": "http://updates-http.cdn-apple.com/2019/cert/061-41424-20191024-218af9ec-cf50-4516-9011-228c78eda3d2/InstallMacOSX.dmg"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "Mac OS X 10.12 Sierra",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/MacOSXHighSierra10.13/macOS%20HighSierra%2010.13.iso"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Apple.com",
            "url": "http://updates-http.cdn-apple.com/2019/cert/061-39476-20191023-48f365f4-0015-4c41-9f44-39d3d2aca067/InstallOS.dmg"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 10.13 High Sierra",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/MacOSXHighSierra10.13/macOS%20HighSierra%2010.13.iso"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-high-sierra/id1246284741?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 10.14 Mojave",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/install-mac-os-mojave/Install%20macOS%20Mojave.zip"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-mojave/id1398502828?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 10.15 Catalina",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "Archive.org",
            "url": "https://archive.org/download/macos_catalina_10.15_19a583_202112/macOS_Catalina_10.15_19A583.dmg"
        }, {
            "variant": "",
            "arch": "Intel (64-Bit)",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-catalina/id1466841314?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 11 Big Sur",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "Archive.org",
            "url": "https://archive.org/download/install-mac-os-big-sur.app_202104/Install%20macOS%20Big%20Sur.app.zip"
        }, {
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-big-sur/id1526878132?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 12 Monterey",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "Archive.org",
            "url": "https://archive.org/download/macOS_Monterey_12_6_1/macOS_Monterey_12_6_1.iso"
        }, {
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-monterey/id1576738294?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 13 Ventura",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "Archive.org",
            "url": "https://archive.org/download/macosventura/Ventura.iso"
        }, {
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-ventura/id1638787999?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 14 Sonoma",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "Archive.org",
            "url": "https://archive.org/download/sonoma_20231120/Sonoma.iso"
        }, {
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-sonoma/id6450717509?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 15 Sequoia",
    "hint": "2 Quellen",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "Archive.org",
            "url": "https://archive.org/download/install-assistant_20241011/InstallAssistant.pkg"
        }, {
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "App Store",
            "url": "macappstores://apps.apple.com/app/macos-sequoia/id6596773750?mt=12"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 26 Tahoe",
    "hint": "1 Quelle",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [/*{
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "Archive.org",
            "url": "https://archive.org/download/install-assistant_20241011/InstallAssistant.pkg"
        },*/ {
            "variant": "",
            "arch": "Intel & Apple Silicon",
            "provider": "Apple.com",
            "url": "https://swcdn.apple.com/content/downloads/37/33/140-93587-A_GRFFH93NOL/f944yaqo1cjhh2m0kxrl0zhcpg9yb9qphv/InstallAssistant.pkg"
        }],
        "kind": "choice"
    }]
}, {
    "family": "mac",
    "os": "macOS 27 Golden Gate",
    "hint": "1 Quelle",
    "multiEdition": false,
    "editions": [{
        "edition": null,
        "downloads": [{
            "variant": "Beta 8",
            "arch": "Apple Silicon",
            "provider": "Apple.com",
            "url": "https://swcdn.apple.com/content/downloads/55/45/142-14110-A_H34ULMV1OS/wd7kahgtrwg0b6w6recw2eb9jl9b0zaogg/InstallAssistant.pkg"
        }],
        "kind": "choice"
    }]
}];

  var FAMILIES = {
    windows: { label: 'Windows', desc: 'Client-Betriebssysteme' },
    server:  { label: 'Windows Server', desc: 'Server-Betriebssysteme' },
    mac:     { label: 'Mac', desc: 'Mac OS X / macOS' }
  };

  var ICON = {
    windows: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.4 10.4 4.4v7.1H3V5.4Zm0 13.2 7.4 1v-7H3v6ZM11.3 4.3 21 3v8.5h-9.7V4.3Zm0 8.2H21V21l-9.7-1.3v-7.2Z"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="6" rx="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.6"/><path d="M7 7h.01M7 17h.01"/></svg>',
    mac: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.9c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.3-2c.7-1.1 1-2.2 1-2.3-.1 0-2-.8-2-3.1Zm-2-5.7c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1.1Z"/></svg>',
    archive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 3 7.5 12 12l9-4.5L12 3Z"/><path d="M3 12l9 4.5L21 12"/><path d="M3 16.5 12 21l9-4.5"/></svg>',
    apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.9c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-1 2.3-2c.7-1.1 1-2.2 1-2.3-.1 0-2-.8-2-3.1Zm-2-5.7c.5-.7.9-1.6.8-2.5-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.4 2.3-1.1Z"/></svg>',
    appstore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8.3 15.5 12 9l3.7 6.5M9.6 13.8h4.8"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16"/></svg>',
    disk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.6"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2"/><path d="M9.5 3v2.5M14.5 3v2.5M9.5 18.5V21M14.5 18.5V21M3 9.5h2.5M3 14.5h2.5M18.5 9.5H21M18.5 14.5H21"/></svg>'
  };
  var PROVIDER_ICON = { 'Archive.org': ICON.archive, 'Apple.com': ICON.apple, 'App Store': ICON.appstore };

  var state = { family: null, group: null, edition: null };
  var activeIndex = -1, filtered = [];

  var $ = function (s, c) { return (c || document).querySelector(s); };
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }
  function prefersReduced() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  var settleTimers = {};
  function openReveal(sel) {
    var el = $(sel); el.classList.add('open');
    clearTimeout(settleTimers[sel]);
    settleTimers[sel] = setTimeout(function () { el.classList.add('settled'); }, prefersReduced() ? 20 : 440);
  }
  function closeReveal(sel) {
    var el = $(sel); el.classList.remove('open'); el.classList.remove('settled');
    clearTimeout(settleTimers[sel]);
  }
  function scrollIntoViewSoft(sel) {
    if (window.matchMedia('(max-width: 560px)').matches) {
      setTimeout(function () {
        var el = $(sel); if (el) el.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'center' });
      }, 150);
    }
  }
    
  function buildFamilies() {
    var grid = $('#familyGrid');
    Object.keys(FAMILIES).forEach(function (key) {
      var count = OS_GROUPS.filter(function (g) { return g.family === key; }).length;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'family-card';
      btn.setAttribute('aria-pressed', 'false');
      btn.dataset.family = key;
      btn.innerHTML =
        '<span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 9.5 18 20 6"/></svg></span>' +
        '<span class="icon">' + ICON[key] + '</span>' +
        '<span class="fam-name">' + esc(FAMILIES[key].label) + '</span>' +
        '<span class="fam-count">' + count + ' Systeme</span>';
      btn.addEventListener('click', function () { selectFamily(key); });
      grid.appendChild(btn);
    });
  }

  function selectFamily(key) {
    state.family = key; state.group = null; state.edition = null;
    Array.prototype.forEach.call(document.querySelectorAll('.family-card'), function (c) {
      c.setAttribute('aria-pressed', String(c.dataset.family === key));
    });
    resetTrigger();
    closeReveal('#stepEdition');
    closeReveal('#stepDownload');
    openReveal('#stepOs');
    closePanel();
    scrollIntoViewSoft('#comboTrigger');
  }

  function resetTrigger() {
    $('#ctLabel').innerHTML = '<span class="ct-placeholder">Betriebssystem auswählen …</span>';
    var sub = $('#ctSub'); sub.textContent = ''; sub.style.display = 'none';
    $('#comboTrigger').setAttribute('aria-expanded', 'false');
  }

  function currentGroups() {
    return OS_GROUPS.filter(function (g) { return g.family === state.family; });
  }

  function renderList(query) {
    var list = $('#comboList');
    var q = (query || '').trim().toLowerCase();
    filtered = currentGroups().filter(function (g) {
      return !q || g.os.toLowerCase().indexOf(q) !== -1 || (g.hint || '').toLowerCase().indexOf(q) !== -1;
    });
    activeIndex = filtered.length ? 0 : -1;
    if (!filtered.length) { list.innerHTML = '<div class="combo-empty">Kein System gefunden.</div>'; return; }
    list.innerHTML = filtered.map(function (g, i) {
      var sel = state.group && state.group.os === g.os;
      return '<div class="opt" role="option" id="opt-' + i + '" data-i="' + i + '" aria-selected="' + (sel ? 'true' : 'false') + '">' +
        '<span class="opt-name">' + esc(g.os) + '</span>' +
        '<span class="opt-hint">' + esc(g.hint) + '</span></div>';
    }).join('');
    Array.prototype.forEach.call(list.querySelectorAll('.opt'), function (el) {
      el.addEventListener('click', function () { chooseOs(filtered[+el.dataset.i]); });
      el.addEventListener('pointermove', function () { setActive(+el.dataset.i); });
    });
    highlight();
  }
  function setActive(i) { if (i !== activeIndex) { activeIndex = i; highlight(); } }
  function highlight() {
    var opts = $('#comboList').querySelectorAll('.opt');
    Array.prototype.forEach.call(opts, function (el, i) { el.classList.toggle('active', i === activeIndex); });
    if (activeIndex >= 0 && opts[activeIndex]) opts[activeIndex].scrollIntoView({ block: 'nearest' });
    var t = $('#comboTrigger');
    if (activeIndex >= 0 && opts[activeIndex]) t.setAttribute('aria-activedescendant', 'opt-' + activeIndex);
    else t.removeAttribute('aria-activedescendant');
  }
  function openPanel() {
    renderList('');
    $('#comboPanel').classList.add('open');
    $('#comboTrigger').setAttribute('aria-expanded', 'true');
    var s = $('#comboSearch'); s.value = '';
    setTimeout(function () { s.focus({ preventScroll: true }); }, 20);
    document.addEventListener('pointerdown', outsideClose, true);
    document.addEventListener('keydown', escClose, true);
  }
  function closePanel() {
    $('#comboPanel').classList.remove('open');
    var t = $('#comboTrigger');
    if (t.getAttribute('aria-expanded') === 'true') t.setAttribute('aria-expanded', 'false');
    document.removeEventListener('pointerdown', outsideClose, true);
    document.removeEventListener('keydown', escClose, true);
  }
  function outsideClose(e) { if (!$('#combo').contains(e.target)) closePanel(); }
  function escClose(e) { if (e.key === 'Escape') { closePanel(); $('#comboTrigger').focus(); } }

  function chooseOs(g) {
    state.group = g; state.edition = null;
    $('#ctLabel').textContent = g.os;
    var sub = $('#ctSub'); sub.textContent = g.hint; sub.style.display = 'block';
    closePanel();
    $('#comboTrigger').focus({ preventScroll: true });

    if (g.multiEdition) {
      renderEditions(g);
      openReveal('#stepEdition');
      closeReveal('#stepDownload');
      setDownloadStepNumber(4);
      scrollIntoViewSoft('#editionGrid');
    } else {
      closeReveal('#stepEdition');
      state.edition = g.editions[0];
      setDownloadStepNumber(3);
      renderDownloads(g, g.editions[0]);
      openReveal('#stepDownload');
      scrollIntoViewSoft('#dlCard');
    }
  }

  function renderEditions(g) {
    var wrap = $('#editionGrid');
    wrap.innerHTML = g.editions.map(function (ed, i) {
      var n = ed.downloads.length;
      var meta = ed.kind === 'disks' ? (n + ' Disks') : (n > 1 ? (n + ' Downloads') : ed.downloads[0].arch);
      return '<button type="button" class="edition-pill" data-i="' + i + '" aria-pressed="false">' +
        '<span class="ep-name">' + esc(ed.edition) + '</span>' +
        '<span class="ep-meta">' + esc(meta) + '</span></button>';
    }).join('');
    Array.prototype.forEach.call(wrap.querySelectorAll('.edition-pill'), function (el) {
      el.addEventListener('click', function () { chooseEdition(g, +el.dataset.i); });
    });
  }

  function chooseEdition(g, i) {
    state.edition = g.editions[i];
    Array.prototype.forEach.call($('#editionGrid').querySelectorAll('.edition-pill'), function (el) {
      el.setAttribute('aria-pressed', String(+el.dataset.i === i));
    });
    renderDownloads(g, g.editions[i]);
    openReveal('#stepDownload');
    scrollIntoViewSoft('#dlCard');
  }

  function setDownloadStepNumber(n) { $('#dlStepNum').textContent = n; }


  function providerSub(p) {
    if (p === 'App Store') return 'Öffnet den Mac App Store';
    if (p === 'Apple.com') return 'Externer Download · Apple';
    return 'Externer Download · ' + p;
  }
  function dlMain(d) {
    if (d.variant) return d.variant;                       // "x64", "Disk 2", "SP3", "PowerPC"
    if (d.provider === 'App Store') return 'Im App Store laden';
    return 'Download via ' + d.provider;
  }
  function dlSub(d) {
    if (d.variant) {
      if (d.provider === 'App Store') return 'Mac App Store';
      return 'via ' + d.provider;
    }
    return providerSub(d.provider);
  }

  function renderDownloads(g, ed) {
    var heading, headIcon;
    if (ed.kind === 'disks') { heading = 'Alle Disks für dieses System – du benötigst jede Datei:'; headIcon = ICON.disk; }
    else if (ed.kind === 'choice') { heading = 'Verfügbare Downloads – wähle den passenden:'; headIcon = ICON.download; }
    else { heading = ''; headIcon = ''; }

    var edTitle = ed.edition ? (g.os + ' · ' + ed.edition) : g.os;

    var single = ed.downloads.length === 1;
    var buttons = ed.downloads.map(function (d, i) {
      var cls = single ? 'primary' : 'secondary';
      var isStore = d.provider === 'App Store';
      var target = isStore ? '' : ' target="_blank" rel="noopener noreferrer"';
      return '<a class="dl-btn ' + cls + '" href="' + esc(d.url) + '"' + target + '>' +
        '<span class="db-glyph">' + (PROVIDER_ICON[d.provider] || ICON.download) + '</span>' +
        '<span class="db-text"><span class="db-main">' + esc(dlMain(d)) + '</span>' +
        '<span class="db-sub">' + esc(dlSub(d)) + '</span></span>' +
        '<span class="db-arch">' + esc(d.arch) + '</span></a>';
    }).join('');


    var archs = [];
    ed.downloads.forEach(function (d) { if (archs.indexOf(d.arch) === -1) archs.push(d.arch); });
    var archLine = archs.join('  ·  ');

    var notes = [];
    if (ed.kind === 'disks') notes.push('Mehrteiliges System: Lade alle ' + ed.downloads.length + ' Disks.');
    if (ed.downloads.some(function (d) { return d.provider === 'App Store'; })) notes.push('Der App-Store-Link funktioniert nur auf einem Mac.');

    $('#dlCard').innerHTML =
      '<div class="dl-head">' +
        '<div class="dl-osicon">' + ICON[g.family] + '</div>' +
        '<div class="dl-titles">' +
          '<div class="dl-name">' + esc(edTitle) + '</div>' +
          '<div class="dl-family">' + esc(FAMILIES[g.family].label) + ' · ' + FAMILIES[g.family].desc + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="arch-banner">' +
        '<span class="ab-key">Architektur</span>' +
        '<span class="ab-val">' + esc(archLine) + '</span>' +
        '<span class="ab-icon">' + ICON.cpu + '</span>' +
      '</div>' +
      (heading ? '<p class="dl-heading">' + heading + '</p>' : '') +
      '<div class="dl-buttons">' + buttons + '</div>' +
      (notes.length ? '<div class="dl-note">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>' +
        '<span>' + notes.map(esc).join(' ') + '</span></div>' : '');
  }


  function initCombo() {
    var trigger = $('#comboTrigger');
    trigger.addEventListener('click', function () {
      if (trigger.getAttribute('aria-expanded') === 'true') closePanel(); else openPanel();
    });
    trigger.addEventListener('keydown', function (e) {
      if ((e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') && trigger.getAttribute('aria-expanded') !== 'true') {
        e.preventDefault(); openPanel();
      }
    });
    var search = $('#comboSearch');
    search.addEventListener('input', function () { renderList(search.value); });
    search.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(Math.min(activeIndex + 1, filtered.length - 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(Math.max(activeIndex - 1, 0)); }
      else if (e.key === 'Enter') { e.preventDefault(); if (filtered[activeIndex]) chooseOs(filtered[activeIndex]); }
      else if (e.key === 'Escape') { e.preventDefault(); closePanel(); trigger.focus(); }
    });
  }

  document.addEventListener('DOMContentLoaded', function () { buildFamilies(); initCombo(); });
})();
