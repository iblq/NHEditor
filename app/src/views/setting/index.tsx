import { Button, Row, message } from 'antd'
import React, { useRef } from 'react'
import Form from './Form'
import db from '@/src/util/db'

const Setting = (props: any) => {
  const formRef: any = useRef(null)

  const onSave = () => {
    formRef.current.validateFieldsAndScroll((err: string | object, values: object) => {
      if (!err) {
        console.log('Received values of form: ', values)
        db.set('config', values)
        message.success('保存成功')
      }
    })
  }

  const reset = () => {
    db.setDefault()
    setTimeout(() => {
      formRef.current.resetFields()
    }, 500)
  }

  return (
    <div style={{ width: '100%' }}>
      <Form ref={formRef} {...props} />
      <Row className="g-ta-r">
        <Button type="primary" onClick={onSave}>
          保存
        </Button>
        <Button className="g-ml-12" type="primary" onClick={reset}>
          重置
        </Button>
      </Row>
    </div>
  )
}

export default Setting
