
declare namespace ty {
  
  export function authorize(params: {
    
    scope: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function authorizeStatus(params: {
    
    scope: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function readFile(params: {
    
    filePath: string
    
    encoding: string
    
    position: number
    
    length: number
    complete?: () => void
    success?: (params: {
      
      data: string
    }) => void
    fail?: (params: {}) => void
  }): void

  
  export function readFileSync(req?: FileReadFileReqBean): {
    
    data: string
  }

  
  export function chooseImage(params?: {
    
    count?: number
    
    sizeType?: string[]
    
    sourceType?: string[]
    complete?: () => void
    success?: (params: {
      
      tempFilePaths: string[]
      
      tempFiles?: TempFileCB[]
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function previewImage(params: {
    
    urls: string[]
    
    current: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function showToast(params: {
    
    title: string
    
    icon?: string
    
    image?: string
    
    duration?: number
    
    mask?: boolean
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function showModal(params: {
    
    title: string
    
    content?: string
    
    showCancel?: boolean
    
    cancelText?: string
    
    cancelColor?: string
    
    confirmText?: string
    
    confirmColor?: string
    complete?: () => void
    success?: (params: {
      
      content?: string
      
      confirm: boolean
      
      cancel: boolean
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function showLoading(params: {
    
    title: string
    
    mask?: boolean
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function showActionSheet(params: {
    
    alertText?: string
    
    itemList: string[]
    
    itemColor?: string
    complete?: () => void
    success?: (params: {
      
      tapIndex: number
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function hideToast(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function hideLoading(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function makePhoneCall(params: {
    
    phoneNumber: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  
  export function setClipboardData(params: {
    
    data: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  
  export function getClipboardData(params?: {
    complete?: () => void
    success?: (params: {
      
      data: string
    }) => void
    fail?: (params: {}) => void
  }): void

  
  export function getSystemInfo(params?: {
    complete?: () => void
    success?: (params: {
      is24Hour: boolean
      system: string
      brand: string
      model: string
      platform: string
      timezoneId: string
      pixelRatio: number
      screenWidth: number
      screenHeight: number
      windowWidth: number
      windowHeight: number
      statusBarHeight: number
      language: string
      safeArea: SafeArea
      albumAuthorized: boolean
      cameraAuthorized: boolean
      locationAuthorized: boolean
      microphoneAuthorized: boolean
      notificationAuthorized: boolean
      notificationAlertAuthorized: boolean
      notificationBadgeAuthorized: boolean
      notificationSoundAuthorized: boolean
      bluetoothEnabled: boolean
      locationEnabled: boolean
      wifiEnabled: boolean
      theme?: Themes
      deviceOrientation?: Orientation
    }) => void
    fail?: (params: {}) => void
  }): void

  
  export function getSystemInfoSync(): {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation
  }

  
  export function getNetworkType(params?: {
    complete?: () => void
    success?: (params: {
      
      networkType: string
      
      signalStrength: number
    }) => void
    fail?: (params: {}) => void
  }): void

  
  export function setStorage(params: {
    
    key: string
    
    data: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function setStorageSync(storageDataBean?: StorageDataBean): null

  
  export function getStorage(params: {
    
    key: string
    complete?: () => void
    success?: (params: {
      
      data?: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function getStorageSync(storageKeyBean?: StorageKeyBean): {
    
    data?: string
  }

  
  export function removeStorage(params: {
    
    key: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function removeStorageSync(storageKeyBean?: StorageKeyBean): null

  
  export function clearStorage(params?: {
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  
  export function clearStorageSync(): null

  
  export function uploadFile(params: {
    
    requestId: string
    
    url: string
    
    filePath: string
    
    name: string
    
    header?: any
    
    formData?: any
    
    timeout?: number
    complete?: () => void
    success?: (params: {
      
      data: string
      
      statusCode: number
    }) => void
    failure?: (params: {}) => void
  }): void

  
  export function abort(params: {
    
    requestId: string
    complete?: () => void
    success?: (params: null) => void
    failure?: (params: {}) => void
  }): void

  
  export function onBluetoothAdapterStateChange(
    listener: (params: {
      
      available: boolean
    }) => void
  ): void

  
  export function offBluetoothAdapterStateChange(
    listener: (params: {
      
      available: boolean
    }) => void
  ): void

  
  export function onNetworkStatusChange(
    listener: (params: {
      
      isConnected: boolean
      
      networkType: string
    }) => void
  ): void

  
  export function offNetworkStatusChange(
    listener: (params: {
      
      isConnected: boolean
      
      networkType: string
    }) => void
  ): void

  
  export function onHeadersReceived(
    listener: (params: {
      
      header: any
    }) => void
  ): void

  
  export function offHeadersReceived(
    listener: (params: {
      
      header: any
    }) => void
  ): void

  
  export function onProgressUpdate(
    listener: (params: {
      
      progress: number
      
      totalBytesSent: number
      
      totalBytesExpectedToSend: number
      
      requestId: string
    }) => void
  ): void

  
  export function offProgressUpdate(
    listener: (params: {
      
      progress: number
      
      totalBytesSent: number
      
      totalBytesExpectedToSend: number
      
      requestId: string
    }) => void
  ): void

  export enum HTTPMethod {
    
    OPTIONS = "OPTIONS",

    
    GET = "GET",

    
    HEAD = "HEAD",

    
    POST = "POST",

    
    PUT = "PUT",

    
    DELETE = "DELETE",

    
    TRACE = "TRACE",

    
    CONNECT = "CONNECT",
  }

  export type Profile = {
    
    redirectStart: number
    
    redirectEnd: number
    
    fetchStart: number
    
    domainLookupStart: number
    
    domainLookupEnd: number
    
    connectStart: number
    
    connectEnd: number
    
    SSLconnectionStart: number
    
    SSLconnectionEnd: number
    
    requestStart: number
    
    requestEnd: number
    
    responseStart: number
    
    responseEnd: number
    
    rtt: number
    
    estimate_nettype: string
    
    httpRttEstimate: number
    
    transportRttEstimate: number
    
    downstreamThroughputKbpsEstimate: number
    
    throughputKbps: number
    
    peerIP: string
    
    port: number
    
    socketReused: boolean
    
    sendBytesCount: number
    
    receivedBytedCount: number
  }

  export type FileReadFileReqBean = {
    
    filePath: string
    
    encoding: string
    
    position: number
    
    length: number
  }

  export type TempFileCB = {
    
    path: string
    
    size?: number
  }

  export type SafeArea = {
    left: number
    right: number
    top: number
    bottom: number
    width: number
    height: number
  }

  export enum Themes {
    dark = "dark",

    light = "light",
  }

  export enum Orientation {
    portrait = "portrait",

    landscape = "landscape",
  }

  export type StorageDataBean = {
    
    key: string
    
    data: string
  }

  export type StorageKeyBean = {
    
    key: string
  }

  export type ReadFileBean = {
    
    data: string
  }

  export type ChooseImageBean = {
    
    count?: number
    
    sizeType?: string[]
    
    sourceType?: string[]
  }

  export type ChooseImageCB = {
    
    tempFilePaths: string[]
    
    tempFiles?: TempFileCB[]
  }

  export type PreviewImageBean = {
    
    urls: string[]
    
    current: number
  }

  export type ToastBean = {
    
    title: string
    
    icon?: string
    
    image?: string
    
    duration?: number
    
    mask?: boolean
  }

  export type ModalBean = {
    
    title: string
    
    content?: string
    
    showCancel?: boolean
    
    cancelText?: string
    
    cancelColor?: string
    
    confirmText?: string
    
    confirmColor?: string
  }

  export type ModalCallback = {
    
    content?: string
    
    confirm: boolean
    
    cancel: boolean
  }

  export type LoadingBean = {
    
    title: string
    
    mask?: boolean
  }

  export type ActionSheet = {
    
    alertText?: string
    
    itemList: string[]
    
    itemColor?: string
  }

  export type ActionSheetCallback = {
    
    tapIndex: number
  }

  export type HTTPRequest = {
    
    url: string
    
    taskId: string
    
    data?: string
    
    header?: any
    
    timeout?: number
    
    method?: HTTPMethod
    
    dataType?: any
    
    responseType?: string
    
    enableHttp2?: boolean
    
    enableQuic?: boolean
    
    enableCache?: boolean
  }

  export type SuccessResult = {
    
    data: string
    
    statusCode: number
    
    header: any
    
    cookies: string[]
    
    profile: Profile
    
    taskId: string
  }

  export type RequestContext = {
    
    taskId: string
  }

  export type PhoneCallBean = {
    
    phoneNumber: string
  }

  export type ClipboradDataBean = {
    
    data: string
  }

  export type SystemInfo = {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation
  }

  export type NetworkTypeCB = {
    
    networkType: string
    
    signalStrength: number
  }

  export type StorageCallback = {
    
    data?: string
  }

  export type UpLoadBean = {
    
    requestId: string
    
    url: string
    
    filePath: string
    
    name: string
    
    header?: any
    
    formData?: any
    
    timeout?: number
  }

  export type UpLoadResult = {
    
    data: string
    
    statusCode: number
  }

  export type RequestBean = {
    
    requestId: string
  }

  
  interface RequestTask {
    
    abort(params: {
      complete?: () => void
      success?: (params: null) => void
      failure?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
    }): void

    
    onHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void

    
    offHeadersReceived(
      listener: (params: {
        
        header: any
      }) => void
    ): void
  }
  export function request(params: {
    
    url: string
    
    data?: string
    
    header?: any
    
    timeout?: number
    
    method?: HTTPMethod
    
    dataType?: any
    
    responseType?: string
    
    enableHttp2?: boolean
    
    enableQuic?: boolean
    
    enableCache?: boolean
    complete?: () => void
    success?: (params: {
      
      data: string
      
      statusCode: number
      
      header: any
      
      cookies: string[]
      
      profile: Profile
      
      taskId: string
    }) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): RequestTask
}
