'use client';

import { useState } from 'react';
import styles from './InquirySection.module.css';

export default function InquirySection() {
  const [formData, setFormData] = useState({
    inquiryType: '',
    inquiryDetail: '',
    companyName: '',
    department: '',
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    content: ''
  });

  const [agreements, setAgreements] = useState({
    personalInfo: false,
    marketing: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreements(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreements.personalInfo) {
      alert('개인정보 수집 및 이용에 동의하셔야 합니다.');
      return;
    }

    // 여기에 실제 제출 로직을 추가할 수 있습니다
    alert('문의가 정상적으로 제출되었습니다.');
    
    // 폼 초기화
    setFormData({
      inquiryType: '',
      inquiryDetail: '',
      companyName: '',
      department: '',
      name: '',
      jobTitle: '',
      email: '',
      phone: '',
      content: ''
    });
    setAgreements({
      personalInfo: false,
      marketing: false
    });
  };

  return (
    <section className={styles.inquirySection}>
      <div className={styles.contentsInner}>
        <div className={styles.inquiryWrap}>
          <div className={styles.row}>
            <div className={styles.colMd6}>
              <div className={styles.inquiryTxt}>
                <div>
                  <p className={styles.title}>문의하기</p>
                  <p className={styles.text}>
                    궁금하신 사항이 있으시면<br /> 
                    오른쪽의 문의하기를 이용해주세요.<br />
                    담당자가 자세하게 안내해드리겠습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.colMd6}>
              <div className={styles.inquiryWrite}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>문의 유형 *</p>
                    <div className={styles.inquiryCon}>
                      <div className={styles.inquirySelect}>
                        <select 
                          name="inquiryType" 
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">문의 유형을 선택해 주세요</option>
                          <option value="solution">NEXT.CLINIC Solution</option>
                          <option value="service">NEXT.CLINIC Service</option>
                          <option value="consulting">의료 AI 컨설팅</option>
                          <option value="technical">기술/영업</option>
                          <option value="partnership">파트너십</option>
                          <option value="recruitment">채용</option>
                          <option value="lecture">강연</option>
                          <option value="other">기타</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>문의 내용 *</p>
                    <div className={styles.inquiryCon}>
                      <textarea 
                        name="content"
                        value={formData.content}
                        onChange={handleInputChange}
                        placeholder="문의 내용을 입력해주세요."
                        required
                      />
                      <p className={styles.inquiryGuide}>
                        솔루션 또는 서비스명(예: NEXT.CLINIC Search, NEXT.CLINIC Chatbot, NEXT.CLINIC GeM, AI ReportCopilot, AI TA, AI Q&A, KMS 등)을 명시하고, 
                        도입 목적과 사용자 수 등 구체적인 내용을 기재해 주시면 더욱 상세한 상담이 가능합니다.
                      </p>
                    </div>
                  </div>

                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>회사명 *</p>
                    <div className={styles.inquiryCon}>
                      <input 
                        type="text" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>부서 *</p>
                    <div className={styles.inquiryCon}>
                      <input 
                        type="text" 
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>이름 *</p>
                    <div className={styles.inquiryCon}>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>직함</p>
                    <div className={styles.inquiryCon}>
                      <input 
                        type="text" 
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>이메일 *</p>
                    <div className={styles.inquiryCon}>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inquiryRow}>
                    <p className={styles.inquiryTitle}>휴대번호 *</p>
                    <div className={styles.inquiryCon}>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.btnArea}>
                    <div className={styles.checkBtn}>
                      <span className={styles.checkbox2}>
                        <input 
                          type="checkbox" 
                          name="personalInfo"
                          checked={agreements.personalInfo}
                          onChange={handleAgreementChange}
                          required
                        />
                        <label htmlFor="personalInfo">개인정보 수집 및 이용에 동의합니다.</label>
                        <span className={styles.noticeText}>
                          <a href="/ai-web/privacy">자세히 보기</a>
                        </span>
                      </span>
                    </div>
                    <div className={styles.checkBtn}>
                      <span className={styles.checkbox2}>
                        <input 
                          type="checkbox" 
                          name="marketing"
                          checked={agreements.marketing}
                          onChange={handleAgreementChange}
                        />
                        <label htmlFor="marketing">
                          <span className={styles.red}>(선택)</span>마케팅 이용 및 뉴스레터 수신에 동의합니다.
                        </label>
                      </span>
                    </div>
                    <button type="submit" className={styles.btnL}>
                      제출하기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span className={styles.inquiryBg}>
          <object type="image/svg+xml" data="/images/bg_polygon.svg" className={styles.inquiryBg01} />
          <object type="image/svg+xml" data="/images/bg_polygon.svg" className={styles.inquiryBg02} />
        </span>
      </div>
    </section>
  );
} 