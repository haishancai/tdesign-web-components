import 'tdesign-web-components/textarea';

export default function Textarea() {

  const value=''
  
  const onBlur = (value,{ e }) =>{
    console.log('onBlur: ', value, e);
  }

  const onFocus = (value,{ e }) =>{
    console.log('onFocus: ', value, e);
  }

  const onKeyup = (e) =>{
    console.log('onKeyup', e)
  }

  const onKeypress = (e) =>{
    console.log('onKeypress', e)
  }

  const onKeydown = (e) =>{
    console.log('onKeydown', e)
  }

    return (
        <t-textarea
          placeholder="请输入"
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeypress={onKeypress}
          onKeydown={onKeydown}
          onKeyup={onKeyup}
        ></t-textarea>
    )
  }

