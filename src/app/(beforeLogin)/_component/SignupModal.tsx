"use client";

import style from './signup.module.css';
import onSubmit from '../_lib/signup';
import BackButton from "@/app/(beforeLogin)/_component/BackButton";
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react'; 
import Default from './../@modal/default';

function showMessage(message: string | null | undefined) {
  if (message === "no_id") {return "아이디를 입력하세요.";}
  if (message === "no_name") {return "닉네임을 입력하세요.";}
  if (message === "no_password") {return "비밀번호를 입력하세요.";}
  if (message === "no_image") {return "이미지를 업로드하세요.";}
  if (message === "user_exists") {return "이미 사용 중인 아이디입니다.";}
  return '';
}



export default function SignupModal() {
  const [state, formAction] = useActionState(onSubmit, { message: null }); 
  const { pending } = useFormStatus();

   console.log('메시지:', state.message);
  console.log('showMessage 결과:', showMessage(state.message));

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">아이디</label>
                <input id="id" name="id" className={style.input} type="text" placeholder=""
                        defaultValue={state.id as string}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">닉네임</label>
                <input id="name" name="name" className={style.input} type="text" placeholder=""
                        defaultValue={state.nickname as string}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                <input id="password" name="password" className={style.input} type="password" placeholder=""
                       defaultValue={state.password as string}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">프로필</label>
                <input id="image" name="image" className={style.input} type="file" accept="image/*"
                defaultValue={state.image as string}
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <div style={{ color: 'red', fontSize: '18px', position:'absolute', bottom:'80px'}}>{showMessage(state?.message || null)}</div>
              <button type="submit" className={style.actionButton} disabled={pending}>가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>)
}