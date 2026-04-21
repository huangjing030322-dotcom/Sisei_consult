
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '名前を入力してください';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号を入力してください';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = '会社名を入力してください';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上入力してください';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      // 这里的 URL 改为你在 Hostinger 上的 PHP 文件地址
      const response = await fetch("https://.com/app/submit.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("送信完了", {
          description: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。"
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        throw new Error("保存失败");
      }
    } catch (error) {
      toast.error("送信エラー", {
        description: "送信に失敗しました。もう一度お試しください。"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  //   try {
  //     await new Promise(resolve => setTimeout(resolve, 1000));
      
  //     const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  //     submissions.push({
  //       ...formData,
  //       timestamp: new Date().toISOString()
  //     });
  //     localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
  //     toast({
  //       title: "送信完了",
  //       description: "お問い合わせを受け付けました。担当者より折り返しご連絡いたします。"
  //     });
      
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       company: '',
  //       message: ''
  //     });
  //   } catch (error) {
  //     toast({
  //       title: "送信エラー",
  //       description: "送信に失敗しました。もう一度お試しください。",
  //       variant: "destructive"
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">名前 *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="text-foreground"
          placeholder="例）山田 太郎"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">メールアドレス *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="text-foreground"
          placeholder="例）yamada@example.com"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">電話番号 *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="text-foreground"
          placeholder="例）03-1234-5678"
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">会社名 *</Label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="text-foreground"
          placeholder="例）株式会社サンプル"
        />
        {errors.company && (
          <p className="text-sm text-destructive">{errors.company}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">お問い合わせ内容 *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="min-h-[150px] text-foreground"
          placeholder="お問い合わせ内容をご記入ください"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full transition-all duration-200 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </Button>
    </form>
  );
};

export default ContactForm;
