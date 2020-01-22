/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import { Button, Icon, Input, message, Row } from 'antd'
import { CodeMirror } from '@/src/components'

import db from '@/src/util/db'
import { exec } from '@/src/util/cmd'
import { pReadFile, pWriteFile } from '@/src/util/io'
import { colorCfg } from '@/src/constant'

const { TextArea } = Input

const CodeMirrorCom: any = CodeMirror

const Nginx = () => {
  const { nginxPath, nginxCmdPath } = db.get('config')

  const [content, setContent] = useState('')
  const [info, setInfo] = useState('')
  const [type, setType] = useState('edit')
  const [status, setStatus] = useState('success')

  const contentRef = useRef('')
  contentRef.current = content

  const readFile = async () => {
    const [data, err] = await pReadFile(nginxPath)
    if (err) return
    setContent(data)
    setType('edit')
  }

  useEffect(() => {
    readFile()
    exec(`${nginxCmdPath}`)
  }, [])

  const onChange = (v: string) => setContent(v)

  const updateInfo = (err: string) => {
    const newInfo = `${info} ${new Date().toLocaleTimeString().substr(0, 9)}>  ${err}`
    setInfo(newInfo)
  }

  const onRestart = async () => {
    // write file
    const [writeErr] = await pWriteFile(nginxPath, contentRef.current)
    if (writeErr) {
      updateInfo(writeErr)
      message.error('文件保存错误')
      return
    }
    // test conf
    const [res, err] = await exec(`${nginxCmdPath} -t`)

    if (err) {
      updateInfo(err)
      message.error('重启失败，请查看日志或检查命令配置是否正确')
      setStatus('error')
      return false
    }
    // reload config
    const [res2, startErr] = await exec(`${nginxCmdPath} -s reload`)

    if (startErr) {
      updateInfo(startErr)
      return false
    }
    setStatus('success')
    message.success('重启成功')
  }

  return (
    <>
      <Row style={{ marginBottom: 12 }}>
        <Button size="small" type={type === 'edit' ? 'primary' : 'default'} onClick={readFile}>
          编辑
        </Button>
        <Button type="primary" size="small" style={{ marginLeft: 12 }} onClick={onRestart}>
          重启
        </Button>
        <div className="g-sm-info">如有错误请检查 setting 页面命令配置是否正确</div>
        <div style={{ color: colorCfg[status], fontSize: '16px' }} className="g-fr">
          {status === 'success' && <Icon type="check-circle" />}
          {status === 'error' && <Icon type="close-circle" />}
        </div>
        <Button
          size="small"
          className="g-fr"
          type={type === 'info' ? 'primary' : 'default'}
          style={{ marginRight: 12 }}
          onClick={() => setType('info')}
        >
          日志
        </Button>
      </Row>

      <div className="g-content">
        {type === 'edit' ? (
          <CodeMirrorCom value={content} onChange={onChange} onSave={onRestart} />
        ) : (
          <TextArea className="log" value={info} style={{ height: '100%' }} />
        )}
      </div>
    </>
  )
}

export default Nginx
