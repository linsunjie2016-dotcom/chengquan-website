---
name: alibaba-product-6images
description: >-
  Generate a complete 6-image Alibaba International Station (阿里国际站) product main image set from any product photo. Produces: Hero主图, 场景图, 细节图, 颜色系列矩阵图, 规格说明图, 工厂实力图. Each image is 1:1 square, with a fashionable American model (if applicable), left-side text layout, bottom-left color swatch display, and a bottom rose-pink info strip. Includes a mandatory self-review & correction step — if the first batch looks sparse or unfinished, the skill auto-reruns with richer content before presenting to the user. Use this skill whenever the user wants to make 阿里国际站主图, 产品主图套图, 6张listing图, product listing images for Alibaba, or says "帮我做主图" / "做一套产品图" / "生成listing图".
---

# Alibaba International Station 6-Image Product Set

A complete workflow for generating a professional 6-image product main image set for Alibaba International Station (or Amazon/Shopify). Built from real production experience — every rule here comes from tested output.

---

## When This Skill Triggers

Use this skill when the user provides:
- A product photo (any category: wig, apparel, hardware, electronics, beauty, etc.)
- A request to create Alibaba listing images, product main images, or a 6-image set
- Phrases like: "帮我做阿里国际站主图", "生成6张主图", "做一套产品图", "listing images"

---

## Step 0 — Analyze the Product Before Writing Any Prompt

Before generating any image, read the reference photo carefully and extract:

| Field | What to look for |
|-------|-----------------|
| Product category | What is this product? (wig, clothing, hardware, etc.) |
| Key visual features | Color, material, shape, style, distinguishing details |
| Target market | Who buys this? (US, EU, B2B buyer, consumer) |
| Color variants | Does the product come in multiple colors/styles? |
| Use scenario | How/where is this product used? |

Use these extractions to customize every image prompt. Do not use generic placeholder text.

---

## Step 1 — Generate All 6 Images in Parallel

Generate all 6 images in one parallel batch. Each image must follow the **Standard Layout Rules** below.

### Standard Layout Rules (apply to ALL 6 images)

```
┌─────────────────────────────────────────────────────┐
│  LEFT 40%                    RIGHT 60%              │
│  ┌──────────────────────┐   ┌───────────────────┐   │
│  │ TOP: Large Bold      │   │                   │   │
│  │ Headline Text        │   │  Main Visual:     │   │
│  │                      │   │  Product / Model  │   │
│  │ MID: 3-4 bullet      │   │  / Scene / Detail │   │
│  │ feature points       │   │                   │   │
│  │                      │   │                   │   │
│  │ BOTTOM-LEFT CORNER:  │   │                   │   │
│  │ Color swatch display │   │                   │   │
│  │ (6-7 hair/product    │   │                   │   │
│  │  color variants)     │   │                   │   │
│  └──────────────────────┘   └───────────────────┘   │
├─────────────────────────────────────────────────────┤
│  BOTTOM STRIP: Rose/dark-pink banner, white bold    │
│  "FACTORY DIRECT | OEM/ODM | LOW MOQ"               │
└─────────────────────────────────────────────────────┘
```

**Background**: White-to-blush-pink gradient (left bright white, right soft pink). Never dark or black background.

**Color swatch / product variant display** (bottom-left, always present):
- Show 6–7 product color/style variants as small neat visual swatches
- For hair products: vertical hanging hair strands side by side
- For apparel: folded fabric swatches or garment color chips
- For hardware/electronics: mini product renders in different colors
- Label: "More Colors Available" or "30+ Colors Available"
- This element must appear in ALL 6 images — it is a signature consistency element

**Typography**:
- Headline: Bold black (or dark) sans-serif, very large, fully readable
- Sub-points: Medium weight, clean, left-aligned with ✓ or bullet
- Bottom strip: White bold text on rose/dark-pink background
- All text must be 100% visible — never overlapping with the main visual

**Model** (for consumer-facing products like wigs, apparel, accessories):
- Young (22–25 years old), beautiful American woman
- Appropriate skin tone for the target market (default: fair skin, green/blue eyes)
- Wearing the product naturally
- Model is background/atmosphere — product is always the focal hero
- Outfit: stylish, minimal (white crop top, denim jacket, casual chic)
- For B2B/industrial products: no model needed, use product + factory scene

---

## The 6 Images

### Image 1 — Hero Main Image (核心主图)

**Purpose**: First impression, highest click-through potential

**Main visual (right 60%)**: Model wearing/using the product. Product fills 65–70% of frame. Hair/product detail is ultra-sharp; model face is slightly softer. White-to-blush gradient background.

**Left panel**:
- Headline: Product name (e.g., "OMBRE PINK LONG WIG")
- 3 bullets: Top 3 product features (material, style, key spec)
- Bottom-left: Color swatch display + "More Colors Available"

**Bottom strip**: "FACTORY DIRECT | OEM/ODM | LOW MOQ"

---

### Image 2 — Lifestyle Scene Image (场景图)

**Purpose**: Show the product in real life, trigger emotional resonance

**Main visual**: Model in a lifestyle setting (bedroom vanity, outdoor cafe, city street, dressing room). Natural lighting. Product worn naturally and confidently.

**Left panel**:
- Headline: Aspirational line (e.g., "STYLE YOUR LOOK")
- Subtitle: Product tagline (e.g., "Vibrant Ombre Wig for Every Occasion")
- 3 bullets: Use occasions (Party & Festival Ready / Daily Fashion Wear / Photo Shoots & Events)
- Bottom-left: Color swatch display + "30+ Colors Available"

**Bottom strip**: "CUSTOM COLOR ACCEPTED | OEM/ODM | SAMPLE ORDER OK"

---

### Image 3 — Detail / Quality Close-Up (细节图)

**Purpose**: Build trust through material/texture detail

**Main visual**: Extreme close-up of the product's most impressive detail — texture, fiber, stitching, surface finish. Ultra-sharp. Fills right 65% of frame.

**Left panel**:
- Headline: "HAIR DETAIL" or "[PRODUCT] DETAIL"
- Subtitle: "Premium [Material] Quality"
- 3 annotation callouts with arrows pointing to the detail:
  → Feature 1 (e.g., "Silky Smooth Texture")
  → Feature 2 (e.g., "Tangle-Free Strands")
  → Feature 3 (e.g., "Rich Color Pigment")
- Bottom-left: Color swatch display + "More Colors Available"

**Bottom strip**: "[KEY BENEFIT] | TANGLE-FREE | NATURAL LOOK" (adapt to product)

---

### Image 4 — Color Series Matrix (颜色系列矩阵图)

**Purpose**: Show full product range, encourage bulk/wholesale inquiry

**Main visual (right 65%)**: Clean grid of 6 product color/style variants. Each variant shown in a circle or rounded rectangle with a color name label below. One variant highlighted with "HOT" badge (the hero SKU). White background per card.

**Left panel**:
- Top: "FULL COLOR COLLECTION" headline
- Subtitle: "30+ Shades Available | Custom Color Accepted"
- "WHY CHOOSE US" section with 4 trust points:
  ✓ 10+ Years Manufacturing
  ✓ Low MOQ Accepted
  ✓ Fast Sampling 7 Days
  ✓ OEM/ODM Welcome
- Bottom-left: Color swatch bar + "All Colors In Stock"

**Bottom strip**: "WHOLESALE | OEM/ODM | PRIVATE LABEL"

---

### Image 5 — Product Specifications (规格说明图)

**Purpose**: Inform technical buyers, reduce inquiry friction

**Main visual**: Product displayed flat-lay, hanging, or from the back — in a position that allows callout annotations. Annotation lines/arrows pointing to key specs.

Annotation examples (adapt to product):
- "Adjustable Cap Size: 22.5 inch avg"
- "Hair Length: 26 inches"
- "Lace Front / Full Cap Available"
- "Temperature Resistant up to 180°C"
- "Weft Density: 130%"
- "Fiber: Premium Kanekalon Synthetic"

**Left panel**:
- Headline: "PRODUCT SPECIFICATIONS"
- Subtitle: "Every Detail Matters"
- 4 quality badge checkmarks:
  ✓ ISO Quality Control
  ✓ 100% Hand-Tied Cap (adapt to product)
  ✓ Secure Adjustable Straps
  ✓ Passed Quality Test
- Bottom-left: Color swatch display + "Multiple Colors Available"

**Bottom strip**: "QUALITY GUARANTEED | OEM/ODM | FAST SHIPPING"

---

### Image 6 — Factory Capability (工厂实力图)

**Purpose**: Build supplier credibility for B2B buyers

**Main visual (right 55%)**: Split into two panels:
- Top panel: Factory production line with workers in clean uniforms (professional, modern facility)
- Bottom panel: Finished packaged products stacked/ready for shipping, with DHL / FedEx / UPS logos

**Left panel**:
- Headline: "WHY CHOOSE US"
- 6 capability points with emoji icons:
  🏭 10+ Years Wig Manufacturing
  📦 MOQ: 10 pcs per style
  ⚡ Sample Ready in 7 Days
  🎨 Custom Color & Style OEM/ODM
  🚢 Global Shipping DHL/FedEx/UPS
  ✅ Strict QC Before Delivery
- Bottom-left: Color swatch display + "30+ Colors In Stock"

**Bottom strip**: "FACTORY DIRECT | OEM/ODM | WORLDWIDE SHIPPING"

---

## Step 2 — Self-Review & Correction (MANDATORY)

After all 6 images are generated, **you must review each one** against this checklist before showing them to the user:

### Quality Checklist

| Check | Pass criteria | Fail signal |
|-------|--------------|-------------|
| Content richness | Left panel has headline + subtitle + 3+ bullets + color swatches | Text is sparse, only 1-2 elements |
| Color swatch | 6–7 color swatches visible in bottom-left | Missing, too small, or not visible |
| Bottom strip | Full-width rose/pink banner with white text | Missing or too thin |
| Text legibility | All text fully readable, no overlap with visual | Any text cut off or hidden |
| Product clarity | Product/hair is sharp and prominent | Blurry, too small, or obscured |
| Model quality | Young American woman, stylish, natural | Wrong age, wrong ethnicity, unnatural |
| Layout balance | Left text zone clean and uncluttered | Overcrowded or empty |

### Correction Rules

**If ANY image fails 2+ checks**:
- Do NOT show it to the user yet
- Regenerate that specific image with an improved prompt
- Add explicit layout instructions: "Place [element] in [exact location], ensure fully visible"
- Increase content density: add more bullets, larger swatches, clearer annotations

**If the overall set feels sparse** (like a first draft with few elements):
- Regenerate all 6 with enriched prompts before presenting
- This is the most common failure mode — treat sparseness as a hard fail

**If only 1 check fails on 1 image**: acceptable to present but note the limitation.

---

## Step 3 — Present Results

After passing the quality check (or after correction), present all 6 images to the user in order with brief labels:

```
✅ 6张阿里国际站主图套组已完成：

图1 — Hero主图（核心主图）
图2 — 场景图（生活场景）  
图3 — 细节图（品质近景）
图4 — 颜色矩阵图（系列展示）
图5 — 规格说明图（参数标注）
图6 — 工厂实力图（供应商背书）

每张均包含：左下角多色样品展示 + 底部信息条
如需调整任何一张，请告诉我具体修改要求。
```

Then offer next steps:
- 文案调整（实际产品规格/公司数据）
- 单张重做（换模特/场景/色调）
- 继续扩展（定制图、包装图、对比图等）

---

## Reference: Image Prompt Template

Use this base template for every image prompt. Fill in the `[VARIABLES]`:

```
Create a square 1:1 Alibaba International Station [IMAGE_TYPE] image for [PRODUCT_CATEGORY].

RIGHT SIDE (60% of frame): [MAIN_VISUAL_DESCRIPTION]. Bright ecommerce lighting, product/hair/detail ultra-sharp.

LEFT SIDE (40% of frame): Clean white-to-blush-pink gradient background.
- TOP-LEFT BOLD TEXT: "[HEADLINE]" (large, fully visible, no overlap with visual)
- Below headline: "[SUBTITLE]"  
- MIDDLE-LEFT bullets:
  ✓ [FEATURE_1]
  ✓ [FEATURE_2]
  ✓ [FEATURE_3]
- BOTTOM-LEFT CORNER (REQUIRED): Neat display of 6–7 [PRODUCT_TYPE] color variants side by side — [COLOR_LIST]. Each variant straight and clean. Label below: "[COLOR_LABEL]"

BOTTOM STRIP (full width): Rose/dark-pink banner, white bold text: "[STRIP_TEXT]"

STYLE: Bright high-key ecommerce lighting, premium commercial photography, clean professional Alibaba International Station listing image, 1:1 square format. All text 100% legible.
```

---

## Notes & Edge Cases

**Non-consumer products** (industrial hardware, machinery, raw materials):
- Skip the model entirely
- Use product flat-lay or hero product shot as main visual
- Image 2 (scene): show product in use context (e.g., installed, in workshop)
- Adjust color swatches to material/finish swatches or size variants

**Single-color products** (no color variants):
- Replace color swatch in bottom-left with size variants, material options, or certification badges

**Products with no clear model use case**:
- Images 1 & 2 can both be product-only with clean background
- Use lifestyle setting for image 2 (product in environment, not on person)

**Custom product data**: Always ask the user if they have real specs (MOQ, lead time, certifications) to replace the defaults in Images 5 & 6. The defaults are realistic placeholders only.
