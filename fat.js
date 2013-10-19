!function(){
  'use strict'  

  var isType = function(o){
        return /\[object (\w+)\]/.test({}.toString.call(o)) && RegExp.$1
      },

      isObject = function(o){ return isType(o) === 'Object'},
      
      trim = function(str){
        return str.replace(/^\s+|\s+$/g, '')
      },
      extend = function(a, b, isExtendObj){
        for(var bKey in b){
          if(isObject(a[bKey]) && isObject(b[bKey]) && isExtendObj){
            extend(a[bKey], b[bKey], true)
          }else{
            a[bKey] = b[bKey]
          }
        }
        return a
      },
      setStyle = function(_el, o){
        for(var k in o){
          _el.style[k] = o[k]
        }
      }

  var Fat = {
        version : '1.0.2'
      }

  Fat.settings = {
        fontSize: 16,
        color: '#999',
        bg: '#ddd'
      }

  Fat.run = function(fats){
    var set = Fat.settings
        
    for(var i = 0, fat; fat = fats[i]; i++){
      var props = fat.attributes[0].name.split('&'),
          wh = props[0].toLowerCase().split('x'),
          
          w = wh[0] + 'px',
          h = wh[1] + 'px',
          bg = props[1] || set.bg,
          color = props[2] || set.color,
          txt = props[0] + ' ' + trim(fat.innerText)
      
      setStyle(fat, {
        display: 'inline-block',
        textAlign: 'center',
        fontSize: set.fontSize + 'px',
        lineHeight: h,
        width: w,
        height: h,
        color: color,
        backgroundColor: bg        
      })   
      
      fat.innerText = txt
      fat.setAttribute('skip', '1')
    }

    return Fat
  }

  Fat.setDefault = function(op){
    Fat.settings = extend(Fat.settings, op)
    return Fat
  }

  Fat.init = function(){
    Fat.run(document.querySelectorAll('fat'))
    return Fat
  }

  Fat.update = function(){
    Fat.run(document.querySelectorAll('fat:not([skip="1"])'))
    return Fat
  }

  window.FatPlaceHolder = Fat
}() 