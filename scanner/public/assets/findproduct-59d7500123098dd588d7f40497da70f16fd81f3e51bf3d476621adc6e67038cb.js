function order_by_occurrence(e){var a={};return e.forEach(function(e){a[e]||(a[e]=0),a[e]++}),Object.keys(a).sort(function(e,r){return a[e]<a[r]})}function load_quagga(){if($("#barcode-scanner").length>0&&navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.getUserMedia){var e=[];Quagga.initialized==undefined&&Quagga.onDetected(function(a){var r=a.codeResult.code;e.push(r),e.length>20&&(code=order_by_occurrence(e)[0],e=[],Quagga.stop(),$.ajax({type:"POST",url:"/products/get_barcode",data:{upc:code}}))}),Quagga.init({inputStream:{name:"Live",type:"LiveStream",numOfWorkers:navigator.hardwareConcurrency,target:document.querySelector("#barcode-scanner")},decoder:{readers:["ean_reader","ean_8_reader","code_39_reader","code_39_vin_reader","codabar_reader","upc_reader","upc_e_reader"]}},function(e){if(e)return void console.log(e);Quagga.initialized=!0,Quagga.start()})}}$(document).on("turbolinks:load",load_quagga);