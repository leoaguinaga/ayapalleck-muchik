"use client"

import { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { FileText, Shield, HelpCircle, BookOpen } from 'lucide-react'

import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import FAQ from './components/FAQ'
import ComplaintsBook from './components/ComplaintsBook'

type TabType = 'privacy' | 'terms' | 'faq' | 'complaints'

export default function LegalPage() {
    const [activeTab, setActiveTab] = useState<TabType>('privacy')

    const tabs = [
        { id: 'privacy', label: 'Privacidad', icon: <Shield className="size-4" /> },
        { id: 'terms', label: 'Términos', icon: <FileText className="size-4" /> },
        { id: 'faq', label: 'Preguntas Frecuentes', icon: <HelpCircle className="size-4" /> },
        { id: 'complaints', label: 'Libro de Reclamaciones', icon: <BookOpen className="size-4" /> },
    ]

    const renderContent = () => {
        switch (activeTab) {
            case 'privacy':
                return <PrivacyPolicy />
            case 'terms':
                return <TermsOfService />
            case 'faq':
                return <FAQ />
            case 'complaints':
                return <ComplaintsBook />
            default:
                return <PrivacyPolicy />
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-card pt-15">
            <style dangerouslySetInnerHTML={{
                __html: `
        body, html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}} />
            <Header />

            <main className="flex-1 w-full max-w-6xl mx-auto px-4 xl:px-0 py-12 md:py-20 flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-64 shrink-0 flex flex-col gap-2">
                    <h1 className="font-bebas-neue text-3xl md:text-4xl font-black mb-4">Legal & Soporte</h1>
                    <div className="flex flex-wrap md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as TabType)}
                                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-lg font-medium text-sm transition-colors text-left
                                    ${activeTab === tab.id
                                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200'
                                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </aside>

                <div className="flex-1 min-w-0 bg-background rounded-2xl border p-6 md:p-10 shadow-sm">
                    {renderContent()}
                </div>
            </main>

            <Footer />
        </div>
    )
}
