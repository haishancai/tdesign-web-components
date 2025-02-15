import 'tdesign-web-components/button';

export default function Button() {
  return (
    <div style={{ gap: 16, display: 'inline-flex', flexDirection: 'column' }}>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button variant="outline" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="dashed" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="text" ghost>
          幽灵按钮
        </t-button>
      </div>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button variant="outline" theme="primary" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="dashed" theme="primary" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="text" theme="primary" ghost>
          幽灵按钮
        </t-button>
      </div>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button variant="outline" theme="success" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="dashed" theme="success" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="text" theme="success" ghost>
          幽灵按钮
        </t-button>
      </div>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button variant="outline" theme="warning" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="dashed" theme="warning" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="text" theme="warning" ghost>
          幽灵按钮
        </t-button>
      </div>
      <div style={{ gap: 16, display: 'inline-flex' }}>
        <t-button variant="outline" theme="danger" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="dashed" theme="danger" ghost>
          幽灵按钮
        </t-button>
        <t-button variant="text" theme="danger" ghost>
          幽灵按钮
        </t-button>
      </div>
    </div>
  );
}
