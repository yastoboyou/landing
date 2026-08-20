import { useState } from 'react'
import { Collapsible } from 'radix-ui'
import { ArrowUpRight, ChevronDown, GraduationCap } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { eduList, translations, type Lang } from '../i18n/content'

const COLLAPSED_COUNT = 2

/*
 * Diploma photos are dropped into src/assets by name, not imported by hand — this glob picks
 * them up automatically once they exist (dev server included), no code change needed:
 *   diploma-main-1.jpg, diploma-main-2.jpg, ...        -> gallery for the "Дипломированный психолог" highlight
 *   diploma-edu-1.jpg                                   -> single photo for eduList item #1 (source order)
 *   diploma-edu-4-1.jpg, diploma-edu-4-2.jpg, ...        -> multiple photos for eduList item #4, shown together
 * The number right after "diploma-edu-" is the item's position in the list; an optional
 * "-N" suffix groups several files under the same item, shown in filename order.
 */
const mainPhotoModules = import.meta.glob('../assets/diploma-main-*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>
const eduPhotoModules = import.meta.glob('../assets/diploma-edu-*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const mainPhotos = Object.keys(mainPhotoModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((key) => mainPhotoModules[key])

const eduPhotosByIndex = new Map<number, { sub: number; src: string }[]>()
for (const [path, src] of Object.entries(eduPhotoModules)) {
  const match = path.match(/diploma-edu-(\d+)(?:-(\d+))?\.[^./]+$/i)
  if (!match) continue
  const index = Number(match[1])
  const sub = match[2] ? Number(match[2]) : 0
  const group = eduPhotosByIndex.get(index) ?? []
  group.push({ sub, src })
  eduPhotosByIndex.set(index, group)
}
for (const group of eduPhotosByIndex.values()) {
  group.sort((a, b) => a.sub - b.sub)
}

interface EducationProps {
  lang: Lang
}

export function Education({ lang }: EducationProps) {
  const t = translations[lang]
  const items = eduList[lang]
  const [activePhotos, setActivePhotos] = useState<string[] | null>(null)
  const [expanded, setExpanded] = useState(false)
  const alwaysVisible = items.slice(0, COLLAPSED_COUNT)
  const rest = items.slice(COLLAPSED_COUNT)

  return (
    <section id="education" className="education">
      <div className="education__inner">
        <div className="section-head">
          <span className="badge">{t.eduBadge}</span>
          <h2 className="section-title">{t.eduTitle}</h2>
          <p className="section-lead">{t.eduLead}</p>
        </div>
        <div className="education__highlight">
          <span className="education__highlight-sticker" aria-hidden="true">
            <GraduationCap size={22} strokeWidth={1.75} color="#fff" />
          </span>
          <div className="education__year education__year--spacer" aria-hidden="true" />
          <div className="education__item-body">
            <h3 className="education__item-title">{t.eduHighlightTitle}</h3>
            <p className="education__item-desc">{t.eduHighlightText}</p>
          </div>
          {mainPhotos.length > 0 && (
            <button type="button" className="education__view-btn" onClick={() => setActivePhotos(mainPhotos)}>
              {t.eduViewLabel}
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </button>
          )}
        </div>
        <Collapsible.Root open={expanded} onOpenChange={setExpanded}>
          <div className="education__list">
            {alwaysVisible.map((item, i) => {
              const group = eduPhotosByIndex.get(i + 1)?.map((p) => p.src)

              return (
                <div className="education__item" key={i}>
                  <div className="education__year">{item.year}</div>
                  <div className="education__item-body">
                    <h3 className="education__item-title">{item.title}</h3>
                    <p className="education__item-desc">{item.desc}</p>
                  </div>
                  {group && group.length > 0 && (
                    <button type="button" className="education__view-btn" onClick={() => setActivePhotos(group)}>
                      {t.eduViewLabel}
                      <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                    </button>
                  )}
                </div>
              )
            })}
          </div>
          {rest.length > 0 && (
            <Collapsible.Content className="education__collapsible">
              <div className="education__list">
                {rest.map((item, i) => {
                  const originalIndex = COLLAPSED_COUNT + i
                  const group = eduPhotosByIndex.get(originalIndex + 1)?.map((p) => p.src)

                  return (
                    <div className="education__item" key={originalIndex}>
                      <div className="education__year">{item.year}</div>
                      <div className="education__item-body">
                        <h3 className="education__item-title">{item.title}</h3>
                        <p className="education__item-desc">{item.desc}</p>
                      </div>
                      {group && group.length > 0 && (
                        <button type="button" className="education__view-btn" onClick={() => setActivePhotos(group)}>
                          {t.eduViewLabel}
                          <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </Collapsible.Content>
          )}
        </Collapsible.Root>
        {items.length > COLLAPSED_COUNT && (
          <button type="button" className="education__more" onClick={() => setExpanded((v) => !v)}>
            {expanded ? t.eduShowLess : t.eduShowMore}
            <ChevronDown
              size={16}
              strokeWidth={1.75}
              className={expanded ? 'education__more-icon education__more-icon--up' : 'education__more-icon'}
              aria-hidden="true"
            />
          </button>
        )}
      </div>

      <Dialog open={activePhotos !== null} onOpenChange={(open) => !open && setActivePhotos(null)}>
        <DialogContent className="flex h-[min(640px,85vh)] w-[min(640px,90vw)] flex-col overflow-y-auto bg-transparent p-0 ring-0 sm:max-w-none">
          <DialogTitle className="sr-only">{t.eduViewLabel}</DialogTitle>
          <div className="grid flex-1 grid-cols-1 place-items-center gap-1 sm:grid-cols-2">
            {activePhotos?.map((src, i) => (
              <img src={src} alt="" key={i} className="max-h-full w-full rounded-lg object-contain" />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
